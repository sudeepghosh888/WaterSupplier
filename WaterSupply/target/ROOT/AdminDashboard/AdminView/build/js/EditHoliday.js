/**
 * 
 * 
 */

// Author : Deepak
// Description : Algo Holiday v1.0
 
 $(document).ready(function() {
    $( "#accordion" ).accordion({
    	 collapsible: true,
         heightStyle: "content"
    });
    
    Holiday.initformvalidation();
  } );
var EditHoliday = (function() {
	// Instance stores a reference to the Singleton
	var instance;
	var REL = "Country";
	
 	 function myfuntion() {
 		 
	 }
	var holiday = Holiday.getInstance();

 	$(Holiday.HOLIDAY_FORM_ID).submit(function(e) {
		if ($(Holiday.HOLIDAY_FORM_ID).validate().form()) {
			holiday.saveholiday();
		}
		e.preventDefault(); 
	});
 	
	$(Holiday.DESCTINATION_FORM_ID).submit(function(e) {
		if ($(Holiday.DESCTINATION_FORM_ID).validate().form()) {
			holiday.saveDestination();
		}
		e.preventDefault(); 
	});
	
	$(Holiday.ITINENARY_FORM_ID).submit(function(e) {
		if ($(Holiday.ITINENARY_FORM_ID).validate().form()) {
			holiday.saveItinerary();
		}
		e.preventDefault(); 
	});
	
	$(Holiday.INCLUSSION_FORM_ID).submit(function(e) {
		if ($(Holiday.INCLUSSION_FORM_ID).validate().form()) {
			holiday.saveInclusion();
		}
		e.preventDefault(); 
	});
	
	$(Holiday.CANCELLATION_FORM_ID).submit(function(e) {
		if ($(Holiday.CANCELLATION_FORM_ID).validate().form()) {
			holiday.saveCancellation();
		}
		e.preventDefault(); 
	});
	
	$(Holiday.UPLOAD_FORM_ID).submit(function(e) {
		if($(Holiday.UPLOAD_FORM_ID).validate().form()){
         		holiday.updateUploads();
       	}
		e.preventDefault(); 
	});
	 
	function init(){
		return {
			myfuntion : myfuntion,
 			
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