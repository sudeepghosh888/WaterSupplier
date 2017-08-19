/**
 * 
 * 
 */

// Author : Deepak
// Description : Algo Holiday v1.0
		   

var Package = (function() {
	
	var holidayPackageId = 0;
	// script for holiday package datepicker
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
	bookIndex = 0;

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
	// script for flight info datepicker

	/*$('#flight_to_date').datepicker({
		dateFormat : "dd-M-yy"
	});

	$("#flight_from_date").datepicker({
		dateFormat : "dd-M-yy",
		minDate : 0,
		onSelect : function(date) {
			var date1 = $('#flight_from_date').datepicker('getDate');
			var date = new Date(Date.parse(date1));
			date.setDate(date.getDate() + 1);
			var newDate = date.toDateString();
			newDate = new Date(Date.parse(newDate));
			$('#flight_to_date').datepicker("option", "minDate", newDate);
		}
	});

	// script for timepicker
	$(function() {
		$('#depart_time,#arive_time,#travel_time').timepicker();
	});*/

	// validate the comment form when it is submitted
	$("#holidaypackagesform").validate();
	// validate signup form on keyup and submit
	$("#hotelform").validate();
	//$("#roomform").validate();

	$("#flightform").validate();

	$('#holidaypackagesform').submit(
					function() {
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
														var html="";
														html+="<form id='hotelform' class='form-horizontal form-label-left' method='POST' action='"+Appconstants.SUPPLIER_DASHBOARD_BASEURL+"/savehotel' novalidate>";
														html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Hotel Name<span class='required'>*</span>";
														html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'>";
														html+="<input type='text' id='hotelname' name='hotelName' required='required' placeholder='Hotel Name'";
														html+="class='form-control col-md-7 col-xs-12'> </div> </div>";
														html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Country Name<span class='required'>*</span>";
														html+="</label> <div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='countryname' name='countryName'";
														html+="required='required' placeholder='Country Name' class='form-control col-md-7 col-xs-12'>";
														html+="</div> </div>";
														html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>City Name<span class='required'>*</span> </label>";
														html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
														html+="<input type='text' id='cityname' name='cityName' required='required' placeholder='City Name' class='form-control col-md-7 col-xs-12'>";
														html+="</div> </div>";
														html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Number";
														html+="of Nights<span class='required'>*</span> </label> <div class='col-md-6 col-sm-6 col-xs-12'>";
														html+="<input type='number' id='nod' name='noOfnight' required='required' placeholder='Number of Nights'";
														html+="class='form-control col-md-7 col-xs-12' min='0'>";
														html+="</div> </div>";
 														html+="<div class='form-group hotel_info_Template hide'  id='hotel_info_Template'> <div class='form-group'>";
														html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'>Hotel Name<span class='required'>*</span> </label>";
														html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
														html+="<input type='text' id='hotelname' name='hotelName' required='required' placeholder='Hotel Name'";
														html+="class='form-control col-md-7 col-xs-12'>";
														html+="</div>  </div>";
														html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Country";
														html+="Name<span class='required'>*</span> </label>";
														html+="<div class='col-md-6 col-sm-6 col-xs-12'> <input type='text' id='countryname' name='countryName'";
														html+="required='required' placeholder='Country Name' class='form-control col-md-7 col-xs-12'>";
														html+="</div> </div>";
														html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>City Name<span class='required'>*</span>";
														html+="</label>";
														html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
														html+=" <input type='text' id='cityname' name='cityName' required='required' placeholder='City Name'";
														html+="class='form-control col-md-7 col-xs-12'>  </div> </div>";
														html+="<div class='form-group'> <label class='control-label col-md-3 col-sm-3 col-xs-12'>Number";
														html+="of Night<span class='required'>*</span> </label>";
														html+="<div class='col-md-6 col-sm-6 col-xs-12'>";
														html+="<input type='number' id='nod' name='noOfnight' required='required' placeholder='Number of Night'";
														html+="class='form-control col-md-7 col-xs-12' min='0'>  </div> </div>";
 														html+="<div class='col-xs-1 pull-right'>";
														html+="<button type='button' class='btn btn-default removeButton'>";
													    html+="<i class='fa fa-minus'></i></button></div></div> ";
													    html+="<div class='form-group'>";
													    html+="<label class='control-label col-md-3 col-sm-3 col-xs-12'><span class='required'></span> </label>";
													    html+="<div class='col-md-6 col-sm-6 col-xs-12'> <button type='submit' class='btn btn-success'";
													    html+="id='submit_hotel'>Submit</button> </div> </div>";
													    html+=" </form>";
													    html+="<div class='col-xs-1 pull-right'>";
													    html+="<button type='button' class='btn btn-default' id='addmorehotel'>";
													    html+="<i class='fa fa-plus'></i> </button> </div>";
 													    
								 						$('#hotel-info').html(html);
								 						$("#hotelform").validate();

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
								 						
								 						$("#hotelform").submit(
								 								function() {
								 									if ($("#hotelform").validate().form()) {
								 										$(this).append('<input type="hidden" name="holidayPackageId" value="'+holidayPackageId+'"/> ');
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
								 																	swal({
								 																		  title: 'Success',
								 																		  text: "Pacakage added",
								 																		  type: 'success',
								 																		  showCancelButton: true,
								 			 															  confirmButtonText: 'Add New!',
								 																		  cancelButtonText: 'No thats it!',
								 																		  confirmButtonClass: 'btn btn-success',
								 																		  cancelButtonClass: 'btn btn-danger',
								 																		  buttonsStyling: false
								 																		}).then(function() {
								 																			resetform();
								 																		}, function(dismiss) {
								 																		  // dismiss can be 'cancel', 'overlay',
								 																		  // 'close', and 'timer'
								 																		  if (dismiss === 'cancel') {
								 																			  
								 											         		               location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL+'/holidaylist/holidaylist';

								 																		  }
								 																		})
								 																		
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
								 									return false;
								 								});
								 						
								 						
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
						return false;
					});

	
 
	// refresh the form
	function resetform() {
		$('#holidaypackagesform')[0].reset();
		$('#hotelform')[0].reset();
		$('#package_link').click();
		
	}
 
	
	
 })();