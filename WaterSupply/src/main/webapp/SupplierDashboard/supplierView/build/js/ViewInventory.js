/**
 * 
 * 
 */

// Author : Deepak
// Description : Algo Holiday v1.0
 

function viewinventory(holidayPackageId) {
	setTimeout( function() {$('#viewinventor').modal('show');
	}, 1000);
	var viewInventory_obg = ViewInventory.getInstance();
	viewInventory_obg.getinventory(holidayPackageId);
	
	}


var ViewInventory = (function() {
	// Instance stores a reference to the Singleton
	var instance;
	var REL = "ViewInventory";
	
 	(function($) {
		$.extend($.datepicker, {

			// Reference the orignal function so we can override it and call it
			// later
			_inlineDatepicker2 : $.datepicker._inlineDatepicker,

			// Override the _inlineDatepicker method
			_inlineDatepicker : function(target, inst) {

				// Call the original
				this._inlineDatepicker2(target, inst);

				var beforeShow = $.datepicker._get(inst, 'beforeShow');

				if (beforeShow) {
					beforeShow.apply(target, [ target, inst ]);
				}
			}
		});
	}(jQuery));

	var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec" ];
	var totalseat = 0;
	var maxDate = 365;
	var inventories = "";
	
	function getinventory(holidayPackageId){
		$('#modal-body').loading();

		setTimeout( function(){
		$ .ajax({
			type : 'GET',
			url : Appconstants.SUPPLIER_DASHBOARD_BASEURL + '/getinventory?holidayPackageId='+holidayPackageId,
			success : function(data) {
				if (data.status === 'success') {
					inventories = data.inventories;
					totalseat = data.totalseat;
					maxDate = data.maxDate;
					initDatepicker();
					$('#modal-body').loading('done');

					return;
				} else if (data.status === 'fail') {
					if (data.status_code === "401") {
						swal('Denied', data.message, 'error');
						location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
					} else {
						new PNotify({
							title : 'Error',
							text : data.message,
							type : 'error',
							styling : 'bootstrap3'
						});

					}
				} else {
					new PNotify({
						title : 'Error',
						text : "Opps somethig went wrong",
						type : 'error',
						styling : 'bootstrap3'
					});
				}
			},
			error : function() {
				console.log('some this went worng');
			}
		});
	}, 2000);

	}
	function initDatepicker() {
		
		var isDatePicker = $('#delux').hasClass('hasDatepicker');
		
		 if (isDatePicker) {
			 $('#delux').datepicker('destroy'); 
		 }

			$('#delux').datepicker(
					{
						showTime : true,
						constrainInput : false,
						minDate : 0,
						autoclose : false,
						inline : true,
						// The calendar is recreated OnSelect for inline
						// calendar
						onSelect : function(date, dp) {
							// updateDatePickerCells(dp);
							console.log(dp);
						},
						onClose : function() {
							$(this).data('datepicker').inline = false;
						},
						onChangeMonthYear : function(year, month, dp) {
							updateDatePickerCells(dp.selectedDay, dp.selectedMonth, dp.selectedYear, totalseat, inventories);
						},

						beforeShow : function(elem, dp) { // This is for
															// non-inline
 							setTimeout(function() { 
								
								updateDatePickerCells(dp.selectedDay, dp.selectedMonth, dp.selectedYear,totalseat, inventories);

							}, 0);
						}
					});
		/*}
		$('#delux').datepicker("show");*/
	}

	
	function updateDatePickerCells(day, month, year, totalseat, inventories) {
		var i = 1;
 		 		setTimeout( function() {
		 $(".ui-datepicker-calendar .ui-state-default").each( function() {
		var data = inventories[(i + '-'+ (month + 1) + '-' + year)];

		if (inventories[(i + '-' + (month + 1) + '-' + year)]) {
			if ($(this).parent('td').hasClass('ui-state-disabled')) {
				$(this) .parent('td').append( '<div><p>' + monthNames[month] + '' + $(this) .html() +'</p><p>'+ data.noOfseat+ '/'+ totalseat+'</p></div>');
			}else{
				var $data = $('<div><p>'+ monthNames[month] + ' ' + $(this) .html() + '</p><p>' + data.noOfseat + '/' + totalseat + '</p></div>')
				.appendTo( $(this).parent( 'td'));
	 // $compile($data)($scope);
	 $(this) .parent('td') .addClass( 'ui-datepicker-unselectable');
	 }
	 } else {
	 console.log('Not present');
	 }
	 i++;
	  });
	}, 0);
 		 		 
 	}
	
	function initData(_inventories, _totalseat, _maxDate){
		inventories = _inventories;
		totalseat = _totalseat;
		maxDate = _maxDate;
		initDatepicker();
	 
	}
	
	 
	function init(){
		return {
			initDatepicker : initDatepicker,
			getinventory:getinventory,
			initData: initData
		};
	}
	return {
		// Get the Singleton instance if one exists
		// or create one if it doesn't
		getInstance: function () {
			if ( !instance ) {
				instance = init();
			}
			return instance;
		},
		//expose all public method and objects here
		REL : REL
		//loadDependents: loadDependents
	};
	
	
})();