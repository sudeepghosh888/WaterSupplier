/**
 * 
 * 
 */

// Author : Deepak
// Description : Algo Holiday v1.0
 

 
var EditPackage = (function() {
	// Instance stores a reference to the Singleton
	var instance;
	var REL = "EditPackage";
	var holidayPackageId = 0;
	var holidayId=0;
	
 	 function Sample() {
 		 
	 }
  
 	function openAddModel(holidayId) {
 		 setTimeout(function() {
 		$('#add_pacakage_model').modal('show');	
 		},1000);
 		
 	
	}
 	
 	function getform(holidayId) {
 		holidayId=holidayId;
 		 
 		var html="";
		html+="<div class='col-xs-2'>";
		html+="<ul class='nav nav-tabs tabs-left'>";
		html+="<li class='active'><a href='#holiday-packages' data-toggle='tab' id='package_link'>Package Info</a></li>";
		html+="<li><a href='#hotel-info' data-toggle='tab' id='hotel_link'>Hotel Info</a></li>";
		html+="</ul> </div>";
		html+="<div class='col-xs-10'>";
		html+="<div class='tab-content'>";
		html+="<div class='tab-pane active holiday-info' id='holiday-packages'>";
		html+="<p class='lead'>Holiday package Info</p>";
		html+="<form id='holidaypackagesform' class='form-horizontal form-label-left' method='POST'";
		html+="action='"+Appconstants.SUPPLIER_DASHBOARD_BASEURL+"/saveholidayPackage'>";
		html+="<div class='form-group'>";
		html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>Package";
		html+="Name<span class='required'>*</span> </label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
		html+="<input type='text' id='packagename'";
		html+="placeholder='Package Name' required='required'";
		html+="name='packageType'";
		html+="class='form-control col-md-7 col-xs-12'>";
		html+="</div>";
		html+="</div>";
		html+="<div class='form-group'>";
		html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>From Date<span class='required'>*</span></label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
		html+="<input type='text' name='serviceFromDate'";
		html+="id='from_date' value='' required='required'";
		html+="placeholder='From Date'";
		html+="class='form-control col-md-7 col-xs-12'>";
		html+="</div> </div> <div class='form-group'>";
		html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>To Date<span class='required'>*</span> </label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='to_date' name='serviceToDate' placeholder='To Date' required='required'";
		html+="class='form-control col-md-7 col-xs-12' value='' /> </div> 	</div>";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Number  of Seat<span class='required'>*</span> </label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='number' id='no-seat' name='noOfseat' required='required' placeholder='Number of Seat'";
		html+="class='form-control col-md-7 col-xs-12' min='0'> </div> </div>";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Rate<span class='required'>*</span> </label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='number' id='rate' name='rate' placeholder='Rate' required='required'";
		html+="class='form-control col-md-7 col-xs-12' min='0'> </div> </div>";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'><span class='required'></span> </label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'> <button type='submit' class='btn btn-success' id='submit_package'>Submit</button>";
		html+="</div>  </div>";
		html+="<input type='hidden' name='holidayId' id='pacakage_holidayId' value='0'>";
		html+="</form> </div>";
		html+="<div class='tab-pane hotel-info' id='hotel-info'> <p class='lead'>Hotel Info</p>";
		html+="<form id='hotelform' class='form-horizontal form-label-left' method='POST' action='"+Appconstants.SUPPLIER_DASHBOARD_BASEURL+"/savehotel'>";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Hotel Name<span class='required'>*</span>";
		html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='hotelname' name='hotelName'; required='required' placeholder='Hotel Name'";
		html+="class='form-control col-md-7 col-xs-12'> </div></div>";
		html+="<div class='form-group'>  <label class='control-label col-md-3 col-sm-3 col-xs-12'>Country Name<span class='required'>*</span>";
		html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'>";
		html+="<input type='text' id='countryname' name='countryName' required='required' placeholder='Country Name'";
		html+="class='form-control col-md-7 col-xs-12'> </div> </div>";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>City Name<span class='required'>*</span>";
		html+="</label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
		html+="<input type='text' id='cityname' name='cityName' required='required' placeholder='City Name'  class='form-control col-md-7 col-xs-12'></div></div>";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Number of Night<span class='required'>*</span>";
		html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input type='number' id='nod' name='noOfnight' required='required' placeholder='Number of Nights' class='form-control col-md-7 col-xs-12' min='0'>";
		html+="</div> </div>";
 		html+="<div class='form-group hotel_info_Template hide'  id='hotel_info_Template'> <div class='form-group'>";
		html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>Hotel Name<span class='required'>*</span>";
		html+="</label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='hotelname' name='hotelName' required='required' placeholder='Hotel Name' class='form-control col-md-7 col-xs-12'>";
		html+="</div> </div>";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Country Name<span class='required'>*</span>";
		html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='countryname' name='countryName' required='required' placeholder='Country Name'";
		html+="class='form-control col-md-7 col-xs-12'> </div>  </div>";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>City Name<span class='required'>*</span>";
		html+="</label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='cityname' name='cityName' required='required' placeholder='City Name'";
		html+="class='form-control col-md-7 col-xs-12'>";
		html+="</div> </div>";
		html+="<div class='form-group'>";
		html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>Number of Nights<span class='required'>*</span>";
		html+="</label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
		html+="<input type='number' id='nod' name='noOfnight' required='required' placeholder='Number of Nights'";
		html+="class='form-control col-md-7 col-xs-12' min='0'>";
		html+="</div>";
		html+="</div>";
 		html+="<div class='col-xs-1 pull-right'>";
		html+="<button type='button' class='btn btn-default removeButton'>";
		html+="<i class='fa fa-minus'></i>";
		html+="</button> </div> </div> ";
		html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>";
		html+="<span class='required'></span> </label>";
		html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
		html+="<button type='submit' class='btn btn-success' id='submit_hotel'>Submit</button>";
		html+="</div> </div>";
		html+="</form>";
		html+="<div class='col-xs-1 pull-right'>";
		html+="<button type='button' class='btn btn-default' id='addmorehotel'>";
		html+="<i class='fa fa-plus'></i>";
		html+="</button>";
		html+="</div>";
		html+="</div>";
		html+="<div class='clearfix'></div> </div> </div>";
 		$('#package_info').loading();
		$('#package_info').html(html);
		
		 $('#holidaypackagesform').submit(
					function() {
						var editPackage_obg = EditPackage.getInstance();
						editPackage_obg.addpackage();
 						return false;			

					});
		 $('#hotelform').submit(
			function() {
				var editPackage_obg = EditPackage.getInstance();
				editPackage_obg.addhotel();			
				return false;
			});
		
		
		$('#pacakage_holidayId').val(holidayId);

 		$('#to_date').datepicker({
 			dateFormat : "dd-mm-yy"
 		});

 		$("#from_date").datepicker({
 			dateFormat : "dd-mm-yy",
 			minDate : 0,
 			onSelect : function(date) {
 				var date1 = $('#from_date').datepicker('getDate');
 				var date = new Date(Date.parse(date1));
 				date.setDate(date.getDate() + 1);
 				var newDate = date.toDateString();
 				newDate = new Date(Date.parse(newDate));
 				$('#to_date').datepicker("option", "minDate", newDate);
 			}
 		});
		$('#package_info').loading('done');
		
		
		$('#addmorehotel').click(function() {
	        var $template = $('#hotel_info_Template'),
	           $clone    = $template
	                           .clone()
	                           .removeClass('hide')
	                           .removeAttr('id')
	                           .attr('data-book-index', bookIndex)
	                           .insertBefore($template);
	
	         $('.removeButton').click(function() {
	             var $row  = $(this).parents('.hotel_info_Template');
	                 $row.remove();
	         });
	   });

			$("#holidaypackagesform").validate();
 			$("#hotelform").validate();

	}

 	function viewpackageinfo(holidayPackageId) {
 		var html="";
 		$('#package_info').loading();

		 $.ajax({
				type : 'GET',
				url : Appconstants.SUPPLIER_DASHBOARD_BASEURL+"/getpackageinfo?holidayPackageId="+holidayPackageId,
				contentType: "text/plain",
				dataType: "json",
				processData: false, //
				success : function(data) {
					if(data.status==='success'){
						html+="<div class='col-xs-2'>";
						html+="<ul class='nav nav-tabs tabs-left'>";
						html+="<li class='active'><a href='#holiday-packages' data-toggle='tab' id='package_link'>Package Info</a></li>";
						html+="<li><a href='#hotel-info' data-toggle='tab' id='hotel_link'>Hotel Info</a></li>";
						html+="</ul> </div>";
						html+="<div class='col-xs-10'>";
						html+="<div class='tab-content'>";
						html+="<div class='tab-pane active holiday-info' id='holiday-packages'>";
						html+="<p class='lead'>Holiday package Info</p>";
						html+="<form id='holidaypackagesform' class='form-horizontal form-label-left' method='POST'";
						html+="action='"+Appconstants.SUPPLIER_DASHBOARD_BASEURL+"/updateholidayPackage'>";
						html+="<div class='form-group'>";
						html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>Package";
						html+="Name<span class='required'>*</span> </label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
						html+="<input type='text' id='packagename'";
						html+="placeholder='Package Name' required='required' value='"+data.holidayPackage.packageType+"'";
						html+="name='packageType'";
						html+="class='form-control col-md-7 col-xs-12'>";
						html+="</div>";
						html+="</div>";
						html+="<div class='form-group'>";
						html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>From Date<span class='required'>*</span></label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
						html+="<input type='text' name='serviceFromDate' value='"+data.holidayPackage.serviceFromDate+"'";
						html+="id='from_date' value='' required='required' readonly='readonly'";
						html+="placeholder='From Date'";
						html+="class='form-control col-md-7 col-xs-12'>";
						html+="</div> </div> <div class='form-group'>";
						html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>To Date<span class='required'>*</span> </label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='to_date' name='serviceToDate' placeholder='To Date' required='required'  value='"+data.holidayPackage.serviceToDate+"'";
						html+="class='form-control col-md-7 col-xs-12'  readonly='readonly' /> </div> 	</div>";
						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Number  of Seat<span class='required'>*</span> </label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='number' id='no-seat' name='noOfseat' required='required' placeholder='Number of Seat' value='"+data.holidayPackage.noOfseat+"'";
						html+="class='form-control col-md-7 col-xs-12' min='0' readonly='readonly'> </div> </div>";
						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Rate<span class='required'>*</span> </label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='number' id='rate' name='rate' placeholder='Rate' required='required' value='"+data.holidayPackage.rate+"'";
						html+="class='form-control col-md-7 col-xs-12' min='0'> </div> </div>";
						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'><span class='required'></span> </label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'> <button type='submit' class='btn btn-success' id='submit_package'>Submit</button>";
						html+="</div>  </div>";
						html+="<input type='hidden' name='holidayPackageId' id='pacakage_holidayPackageId' value='"+data.holidayPackage.holidayPackageId+"'>";
						html+="<input type='hidden' name='holidayId' id='pacakage_holidayId' value='"+data.holidayPackage.holidayId+"'>";
						html+="</form> </div>";
					
						html+="<div class='tab-pane hotel-info' id='hotel-info'> <p class='lead'>Hotel Info</p>";
						html+="<form id='hotelform' class='form-horizontal form-label-left' method='POST' action='"+Appconstants.SUPPLIER_DASHBOARD_BASEURL+"/savehotel'>";
						html+="<input type='hidden' name='holidayPackageId' value='"+data.holidayPackage.holidayPackageId+"'/>";
						$.each(data.hotelInfos, function(i, item) {
 						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Hotel Name<span class='required'>*</span>";
						html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='hotelname' name='hotelName'; required='required' placeholder='Hotel Name'";
						html+="class='form-control col-md-7 col-xs-12' value='"+item.hotelName+"'> </div></div>";
						html+="<div class='form-group'>  <label class='control-label col-md-3 col-sm-3 col-xs-12'>Country Name<span class='required'>*</span>";
						html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'>";
						html+="<input type='text' id='countryname' name='countryName' required='required' placeholder='Country Name'";
						html+="class='form-control col-md-7 col-xs-12' value='"+item.countryName+"'> </div> </div>";
						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>City Name<span class='required'>*</span>";
						html+="</label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
						html+="<input type='text' id='cityname' name='cityName' required='required' placeholder='City Name'  class='form-control col-md-7 col-xs-12' value='"+item.cityName+"'></div></div>";
						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Number of Nights<span class='required'>*</span>";
						html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input type='number' id='nod' name='noOfnight' required='required' placeholder='Number of Nights' class='form-control col-md-7 col-xs-12' min='0' value='"+item.noOfnight+"'>";
						html+="</div> </div>";
					 
						html+="<input type='hidden' name='hotelInfoID'   value='"+item.hotelInfoID+"'>";
						});
						
						html+="<div class='form-group hotel_info_Template hide'  id='hotel_info_Template'> <div class='form-group'>";
						html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>Hotel Name<span class='required'>*</span>";
						html+="</label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='hotelname' name='hotelName' required='required' placeholder='Hotel Name' class='form-control col-md-7 col-xs-12'>";
						html+="</div> </div>";
						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Country Name<span class='required'>*</span>";
						html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='countryname' name='countryName' required='required' placeholder='Country Name'";
						html+="class='form-control col-md-7 col-xs-12'> </div>  </div>";
						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>City Name<span class='required'>*</span>";
						html+="</label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='cityname' name='cityName' required='required' placeholder='City Name'";
						html+="class='form-control col-md-7 col-xs-12'>";
						html+="</div> </div>";
						html+="<div class='form-group'>";
						html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>Number of Nights<span class='required'>*</span>";
						html+="</label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
						html+="<input type='number' id='nod' name='noOfnight' required='required' placeholder='Number of Nights'";
						html+="class='form-control col-md-7 col-xs-12' min='0'>";
						html+="</div>";
						html+="</div>";
 						html+="<div class='col-xs-1 pull-right'>";
						html+="<button type='button' class='btn btn-default removeButton'>";
						html+="<i class='fa fa-minus'></i>";
						html+="</button> </div> </div> ";
						html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>";
						html+="<span class='required'></span> </label>";
						html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
						html+="<button type='submit' class='btn btn-success' id='submit_hotel'>Submit</button>";
						html+="</div> </div>";
						html+="</form>";
						html+="<div class='col-xs-1 pull-right'>";
						html+="<button type='button' class='btn btn-default' id='addmorehotel'>";
						html+="<i class='fa fa-plus'></i>";
						html+="</button>";
						html+="</div>";
						html+="</div>";
						html+="<div class='clearfix'></div> </div> </div>";
 						  
						
						 
 						$('#package_info').html(html);
 						$('#addmorehotel').click(function() {
 					        var $template = $('#hotel_info_Template'),
 					           $clone    = $template
 					                           .clone()
 					                           .removeClass('hide')
 					                           .removeAttr('id')
 					                           .attr('data-book-index', bookIndex)
 					                           .insertBefore($template);
 					
 					         $('.removeButton').click(function() {
 					             var $row  = $(this).parents('.hotel_info_Template');
 					                 $row.remove();
 					         });
 					   });

 						$("#holidaypackagesform").validate();
 				 		$("#hotelform").validate();
 				 		
 				 		 $('#holidaypackagesform').submit(
 								function() {
 									var editPackage_obg = EditPackage.getInstance();
 									editPackage_obg.updatepackage();
 			 						return false;			

 								});
 					 $('#hotelform').submit(
 						function() {
 							var editPackage_obg = EditPackage.getInstance();
 							editPackage_obg.updatehotel();			
 							return false;
 						});
						$('#package_info').loading('done');

						
					}else if(data.status==='fail'){
		            	   if(data.status_code==="401"){
		            		 swal( 'Denied', data.message, 'error')
		                	 location.href = Appconstants.ADMIN_DASHBOARD_BASEURL;
		            	   }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: data.message,
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		          		 $('.btn-success').loading('done');

		            	   }
		               }
				},
				error: function() {
					new PNotify({
	                       title: 'Error',
	                       text: "Opps somethig went wrong",
	                       type: 'error',
	                       styling: 'bootstrap3'
	                   }); 			    
					}
			});
	}
 	
 	function addpackage() {
 		if ($("#holidaypackagesform").validate().form()) {
			$('.btn-success').loading(
							{
								text : 'Saving... plz wait this may take a while !'
							})

			$('#holidaypackagesform').ajaxSubmit(
							{
								dataType : 'json',
								success : function(data) {
									if (data.status === 'success') {

										new PNotify(
												{
													title : 'Success',
													text : data.message,
													type : 'success',
													styling : 'bootstrap3'
												});
										$('.btn-success').loading('done');
										$("#hotel_link").click();
										holidayPackageId = data.holidayPackageId;
									} else if (data.status === 'fail') {
										$('.btn-success').loading('done');
											if (data.status_code === "401") {
											swal('Denied',data.message,'error');
											location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
										} else {
											new PNotify(
													{
														title : 'Error',
														text : data.message,
														type : 'error',
														styling : 'bootstrap3'
													});

										}
									} else {
										new PNotify(
												{
													title : 'Error',
													text : "Opps somethig went wrong",
													type : 'error',
													styling : 'bootstrap3'
												});
									}
								},
								error : function() {
									console
											.log('some this went worng');

								}
							});
		}
	}
 	function updatepackage() {
 		if ($("#holidaypackagesform").validate().form()) {
			$('.btn-success').loading(
							{
								text : 'Saving... plz wait this may take a while !'
							})

			$('#holidaypackagesform').ajaxSubmit(
							{
								dataType : 'json',
								success : function(data) {
									if (data.status === 'success') {

										new PNotify(
												{
													title : 'Success',
													text : data.message,
													type : 'success',
													styling : 'bootstrap3'
												});
										$('.btn-success').loading('done');
 									} else if (data.status === 'fail') {
										$('.btn-success').loading('done');
											if (data.status_code === "401") {
											swal('Denied',data.message,'error');
											location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
										} else {
											new PNotify(
													{
														title : 'Error',
														text : data.message,
														type : 'error',
														styling : 'bootstrap3'
													});

										}
									} else {
										new PNotify(
												{
													title : 'Error',
													text : "Opps somethig went wrong",
													type : 'error',
													styling : 'bootstrap3'
												});
									}
								},
								error : function() {
									console
											.log('some this went worng');

								}
							});
		}
	}
	function addhotel() {
		if ($("#hotelform").validate().form()) {
			$("#hotelform").append('<input type="hidden" name="holidayPackageId" value="'+holidayPackageId+'"/> ');
			$('.btn-success').loading({
				text : 'Saving.. !'
			})

			$('#hotelform').ajaxSubmit(
							{
								dataType : 'json',
									success : function(data) {
									if (data.status === 'success') {

										new PNotify(
												{
													title : 'Success',
													text : data.message,
													type : 'success',
													styling : 'bootstrap3'
												});
										$('.btn-success') .loading('done');
									    location.reload();
									    
									} else if (data.status === 'fail') {
										$('.btn-success') .loading('done');

										if (data.status_code === "401") {
											swal('Denied', data.message,'error');
											location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
										} else {
											new PNotify(
													{
														title : 'Error',
														text : data.message,
														type : 'error',
														styling : 'bootstrap3'
													});

										}
									} else {
										new PNotify(
												{
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
		}
	}
	
	function updatehotel() {
		if ($("#hotelform").validate().form()) {
 			$('.btn-success').loading({
				text : 'Saving.. !'
			})

			$('#hotelform').ajaxSubmit(
							{
								dataType : 'json',
									success : function(data) {
									if (data.status === 'success') {

										new PNotify(
												{
													title : 'Success',
													text : data.message,
													type : 'success',
													styling : 'bootstrap3'
												});
										$('.btn-success') .loading('done');
 									    
									} else if (data.status === 'fail') {
										$('.btn-success') .loading('done');

										if (data.status_code === "401") {
											swal('Denied', data.message,'error');
											location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
										} else {
											new PNotify(
													{
														title : 'Error',
														text : data.message,
														type : 'error',
														styling : 'bootstrap3'
													});

										}
									} else {
										new PNotify(
												{
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
		}
	}
	
 	 
 	function resetform() {
		$('#holidaypackagesform')[0].reset();
		$('#hotelform')[0].reset();
 	}
 
 	$("#holidaypackagesform").validate();
	// validate signup form on keyup and submit
	$("#hotelform").validate();
	
	
 	function init(){
		return {
			openAddModel : openAddModel,
			resetform:resetform,
			getform:getform,
			addpackage:addpackage,
			addhotel:addhotel,
			updatepackage:updatepackage,
			updatehotel:updatehotel
 			
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
		REL : REL,
		getform:getform,
		viewpackageinfo:viewpackageinfo
		//loadDependents: loadDependents
	};
	
	
})();