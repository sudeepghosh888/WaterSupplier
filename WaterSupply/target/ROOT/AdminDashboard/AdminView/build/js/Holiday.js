/**
 * 
 * 
 */

// Author : Deepak
// Description : Algo Holiday v1.0
 
 $(document).ready(function() {
	 

		     $("#multycountry input[name='multyCountry']").click(function(){
		       if($('input:radio[name=multyCountry]:checked').val() == "yes"){
		           $('#hidecountry').removeClass('hide')
		         }else if($('input:radio[name=multyCountry]:checked').val() == "no"){
		           $('#hidecountry').addClass('hide')
		         }
		     });
		

			$(".includedCountries").select2({
		 		     placeholder: "select included countries",
			     allowClear: true
			});
			
			
		   $(".includedCities").select2({
 		     placeholder: "select included cities",
		     allowClear: true
		   });
		

		   $(".includedVendors ").select2({
 		     placeholder: "select suppliers",
		     allowClear: true
		   });
		
		
		
		    $('.addButton').click(function() {
		        var $template = $('#des_night_Template'),
		           $clone    = $template
		                           .clone()
		                           .removeClass('hide')
		                           .removeAttr('id')
		                           .attr('data-book-index', bookIndex)
		                           .insertBefore($template);
		
		         $('.removeButton').click(function() {
		             var $row  = $(this).parents('.des_night_Template');
		                 $row.remove();
		         });
		   });
		
		  
		   bookIndex = 0;
		   $('.add_btn_step3').click(function() {
		      bookIndex++;
		       var $template = $('#Itinerary'),
		           $clone    = $template
		                           .clone()
		                           .removeClass('hide')
		                           .removeAttr('id')
		                           .attr('data-book-index', bookIndex)
		                           .insertBefore($template);
		
		         $('.removeButton').click(function() {
		             var $row  = $(this).parents('.Itinerary');
		                 $row.remove();
		         });
		   });
		
		
		 bookIndex = 0;
		   $('.add_btn_5').click(function() {
		      bookIndex++;
		       var $template = $('#step5'),
		           $clone    = $template
		                           .clone()
		                           .removeClass('hide')
		                           .removeAttr('id')
		                           .attr('data-book-index', bookIndex)
		                           .insertBefore($template);
		
		         $('.removeButton').click(function() {
		             var $row  = $(this).parents('.step5');
		                 $row.remove();
		         });
		   });

	 
		/* inclussion editer script start */

     function initToolbarBootstrapBindings() {
       var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
           'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
           'Times New Roman', 'Verdana'
         ],
         fontTarget = $('[title=Font]').siblings('.dropdown-menu');
       $.each(fonts, function(idx, fontName) {
         fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
       });
       $('a[title]').tooltip({
         container: 'body'
       });
       $('.dropdown-menu input').click(function() {
           return false;
         })
         .change(function() {
           $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
         })
         .keydown('esc', function() {
           this.value = '';
           $(this).change();
         });

       $('[data-role=magic-overlay]').each(function() {
         var overlay = $(this),
           target = $(overlay.data('target'));
         overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
       });

       if ("onwebkitspeechchange" in document.createElement("input")) {
         var editorOffset = $('#inclusions').offset();

         $('.voiceBtn').css('position', 'absolute').offset({
           top: editorOffset.top,
           left: editorOffset.left + $('#inclusions').innerWidth() - 35
         });
       } else {
         $('.voiceBtn').hide();
       }
     }

     function showErrorAlert(reason, detail) {
       var msg = '';
       if (reason === 'unsupported-file-type') {
         msg = "Unsupported format " + detail;
       } else {
         console.log("error uploading file", reason, detail);
       }
       $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
         '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#inclusions_alerts');
     }

     initToolbarBootstrapBindings();

     $('#inclusions').wysiwyg({
       fileUploadError: showErrorAlert,
       toolbarSelector: '[data-role=editor-toolbar-inclusions]'

     });

     window.prettyPrint;
     prettyPrint();
     
     $('#inclusions').bind("DOMSubtreeModified",function(){
         $('#inclusions_val').html(
                 $("#inclusions").html()
         );
     });
     
     
 
	 function initToolbarBootstrapBindings() {
       var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
           'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
           'Times New Roman', 'Verdana'
         ],
         fontTarget = $('[title=Font]').siblings('.dropdown-menu');
       $.each(fonts, function(idx, fontName) {
         fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
       });
       $('a[title]').tooltip({
         container: 'body'
       });
       $('.dropdown-menu input').click(function() {
           return false;
         })
         .change(function() {
           $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
         })
         .keydown('esc', function() {
           this.value = '';
           $(this).change();
         });

       $('[data-role=magic-overlay]').each(function() {
         var overlay = $(this),
           target = $(overlay.data('target'));
         overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
       });

       if ("onwebkitspeechchange" in document.createElement("input")) {
         var editorOffset = $('#exclusions').offset();

         $('.voiceBtn').css('position', 'absolute').offset({
           top: editorOffset.top,
           left: editorOffset.left + $('#exclusions').innerWidth() - 35
         });
       } else {
         $('.voiceBtn').hide();
       }
     }

     function showErrorAlert(reason, detail) {
       var msg = '';
       if (reason === 'unsupported-file-type') {
         msg = "Unsupported format " + detail;
       } else {
         console.log("error uploading file", reason, detail);
       }
       $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
         '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#exclusions_alerts');
     }

     initToolbarBootstrapBindings();

     $('#exclusions').wysiwyg({
       fileUploadError: showErrorAlert,
        toolbarSelector: '[data-role=editor-toolbar-exclusions]'

     });

     window.prettyPrint;
     prettyPrint();
     
     $('#exclusions').bind("DOMSubtreeModified",function(){
         $('#exclusions_val').html(
                 $("#exclusions").html()
         );
     });
     
   
     /* exclusions editer script end */
	
     	/* remarks editer script start */
	 function initToolbarBootstrapBindings() {
       var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
           'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
           'Times New Roman', 'Verdana'
         ],
         fontTarget = $('[title=Font]').siblings('.dropdown-menu');
       $.each(fonts, function(idx, fontName) {
         fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
       });
       $('a[title]').tooltip({
         container: 'body'
       });
       $('.dropdown-menu input').click(function() {
           return false;
         })
         .change(function() {
           $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
         })
         .keydown('esc', function() {
           this.value = '';
           $(this).change();
         });

       $('[data-role=magic-overlay]').each(function() {
         var overlay = $(this),
           target = $(overlay.data('target'));
         overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
       });

       if ("onwebkitspeechchange" in document.createElement("input")) {
         var editorOffset = $('#remarks').offset();

         $('.voiceBtn').css('position', 'absolute').offset({
           top: editorOffset.top,
           left: editorOffset.left + $('#remarks').innerWidth() - 35
         });
       } else {
         $('.voiceBtn').hide();
       }
     }

     function showErrorAlert(reason, detail) {
       var msg = '';
       if (reason === 'unsupported-file-type') {
         msg = "Unsupported format " + detail;
       } else {
         console.log("error uploading file", reason, detail);
       }
       $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
         '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#remarks_alerts');
     }

     initToolbarBootstrapBindings();

     $('#remarks').wysiwyg({
       fileUploadError: showErrorAlert,
         toolbarSelector: '[data-role=editor-toolbar-remarks]'

     });

     window.prettyPrint;
     prettyPrint();
     
     $('#remarks').bind("DOMSubtreeModified",function(){
         $('#remarks_val').html(
                 $("#remarks").html()
         );
     });
     
   
     /* remarks editer script end */
     
     	/* cancellationPolicy editer script start */
	 function initToolbarBootstrapBindings() {
       var fonts = ['Serif', 'Sans', 'Arial', 'Arial Black', 'Courier',
           'Courier New', 'Comic Sans MS', 'Helvetica', 'Impact', 'Lucida Grande', 'Lucida Sans', 'Tahoma', 'Times',
           'Times New Roman', 'Verdana'
         ],
         fontTarget = $('[title=Font]').siblings('.dropdown-menu');
       $.each(fonts, function(idx, fontName) {
         fontTarget.append($('<li><a data-edit="fontName ' + fontName + '" style="font-family:\'' + fontName + '\'">' + fontName + '</a></li>'));
       });
       $('a[title]').tooltip({
         container: 'body'
       });
       $('.dropdown-menu input').click(function() {
           return false;
         })
         .change(function() {
           $(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');
         })
         .keydown('esc', function() {
           this.value = '';
           $(this).change();
         });

       $('[data-role=magic-overlay]').each(function() {
         var overlay = $(this),
           target = $(overlay.data('target'));
         overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
       });

       if ("onwebkitspeechchange" in document.createElement("input")) {
         var editorOffset = $('#cancellationPolicy').offset();

         $('.voiceBtn').css('position', 'absolute').offset({
           top: editorOffset.top,
           left: editorOffset.left + $('#cancellationPolicy').innerWidth() - 35
         });
       } else {
         $('.voiceBtn').hide();
       }
     }

     function showErrorAlert(reason, detail) {
       var msg = '';
       if (reason === 'unsupported-file-type') {
         msg = "Unsupported format " + detail;
       } else {
         console.log("error uploading file", reason, detail);
       }
       $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>' +
         '<strong>File upload error</strong> ' + msg + ' </div>').prependTo('#cancellationPolicy_alerts');
     }

     initToolbarBootstrapBindings();

     $('#cancellationPolicy').wysiwyg({
       fileUploadError: showErrorAlert,
       toolbarSelector: '[data-role=editor-toolbar-cancellationPolicy]'
     });

     window.prettyPrint;
     prettyPrint();
     
     $('#cancellationPolicy').bind("DOMSubtreeModified",function(){
         $('#cancellationPolicy_val').html(
                 $("#cancellationPolicy").html()
         );
     });
     /* cancellationPolicy editer script end */
     $('#country').on('change', function() {
		 console.log(this.value);
   		 var country_obj =Country.getInstance();
   		 country_obj.getCityselectoptions(this.value);
		});
	 
 });
 
 
var Holiday = (function() {
	// Instance stores a reference to the Singleton
	var instance;
	var REL = "Holiday";
	var HOLIDAY_FORM_ID ="#holiday_form";
	var DESCTINATION_FORM_ID ="#destination_form";
	var ITINENARY_FORM_ID ="#itenenary_form";
	var INCLUSSION_FORM_ID ="#inclussion_form";
	var CANCELLATION_FORM_ID ="#cancellation_form";
	var UPLOAD_FORM_ID = "#upload_form"
 	var holidayId =0;
 	 function myfuntion() {
 		 
	 }
  
 	 function initformvalidation(){

  	 	$(HOLIDAY_FORM_ID).validate({
 			rules: {
 				holidayName: "required",
 				holidayTypeId: "required",
 				countryId: "required",
 				cityId: "required",
 				multyCountry: "required",
 				//includedCountries: "required",
 				includedCities: "required",
 				noOfdays: { 
 					required: true,
 			      	number: true,
 			      	min: 1
 						  },
 				noOfnights:{ 
 					required: true,
 			      	number: true,
 			      	min: 1
 						  }

 			},
 			messages: {
 				holidayName: "Please enter Holiday Name",
 				holidayTypeId: "Please select holiday type",
 				countryId:  "Please select country",
 				cityId : "Please select city",
 				multyCountry :"please selct any one",
 				//includedCountries:"",
 				includedCities :" Please select citys",
 				noOfdays	: {
 					required: "Please enter no Of days",
 					number :"enter valid number",
 					min: "Value must be greater than 0"
 				},
 				noOfnights	: {
 					required: "Please enter no Of days",
 					number :"enter valid number",
 					min: "Value must be greater than 0"
 				}
 					
 			}
 		});
  	 	
  	 	
  		$(DESCTINATION_FORM_ID).validate({
 			rules: {
 				destinations: "required",
 				nights:{ 
 					required: true,
 			      	number: true,
 			      	min: 1
 						  }

 			},
 			messages: {
 				destinations: "Please enter destination Name",
  				noOfnights	: {
  					nights: "Please enter no Of days",
 					number :"enter valid number",
 					min: "Value must be greater than 0"
 				}
 					
 			}
 		});
  		
  		$(ITINENARY_FORM_ID).validate();
  	//	$("#form_step4").validate();
  		
  		/* $('#form_step4').validate({
  		   ignore: ":hidden:not(textarea)",     
  		   rules: {     
  		       WysiHtmlField: "required"
  		   },
   		});

  		$('#form_step5').validate({
   		   ignore: ":hidden:not(textarea)",     
   		   rules: {     
   		       WysiHtmlField: "required"
   		   },
   		 	noOfdays: "required",
   		 	charges: "required",
    		}); */
  		 $(UPLOAD_FORM_ID).validate({
  	        rules: {
  	        	files: {
  	                required: true
   	            }
  	        },
  		 });
 	 
 	 }
 	 function saveholiday() {
  		$('.btn-success').loading({ text: 'Saving...' })

 		 $.ajax({
				type : $(HOLIDAY_FORM_ID).attr('method'),
				url : $(HOLIDAY_FORM_ID).attr('action'),
				data : $(HOLIDAY_FORM_ID).serialize(), // serializes the form's elements.
				success : function(data) {
		               if(data.status==='success'){

		            	   new PNotify({
		                       title: 'Success',
		                       text: data.message,
		                       type: 'success',
		                       styling: 'bootstrap3'
		                   });
    		    	 $('.btn-success').loading('done');
    		    	
     		    	holidayId =   data.holidayId;
 		               }else if(data.status==='fail'){
		            	   if(data.status_code==="401"){
		            		 swal( 'Denied', data.message, 'error');
		                	 location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
		            	   }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: data.message,
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		            	   
		            	   }
		               }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: "Opps somethig went wrong",
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		               }
				},
				error: function() {
					console.log('some this went worng');

			    }
			}); 
	}
 	
 	 function saveDestination() {
 		$('.btn-success').loading({ text: 'Saving...' })
			var data_save = $(DESCTINATION_FORM_ID).serializeArray();
			data_save.push({ name: "holidayId", value: holidayId });
  		 $.ajax({
				type : $(DESCTINATION_FORM_ID).attr('method'),
				url : $(DESCTINATION_FORM_ID).attr('action'),
				data :data_save,
			success : function(data) {
		               if(data.status==='success'){

		            	   new PNotify({
		                       title: 'Success',
		                       text: data.message,
		                       type: 'success',
		                       styling: 'bootstrap3'
		                   });
    		    	 $('.btn-success').loading('done');
    		    
		               }else if(data.status==='fail'){
		            	   if(data.status_code==="401"){
		            		   swal( 'Denied', data.message, 'error');
		                	 location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
		            	   }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: data.message,
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		            	   
		            	   }
		               }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: "Opps somethig went wrong",
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		               }
				},
				error: function() {
					console.log('some this went worng');

			    }
			}); 
	}
 	function saveItinerary() {
 		$('.btn-success').loading({ text: 'Saving...' })
  		var data_save = $(ITINENARY_FORM_ID).serializeArray();
		data_save.push({ name: "holidayId", value: holidayId });

  		 $.ajax({
				type : $(ITINENARY_FORM_ID).attr('method'),
				url : $(ITINENARY_FORM_ID).attr('action'),
				data :data_save,
			success : function(data) {
		               if(data.status==='success'){

		            	   new PNotify({
		                       title: 'Success',
		                       text: data.message,
		                       type: 'success',
		                       styling: 'bootstrap3'
		                   });
    		    	 $('.btn-success').loading('done');
    		    
		               }else if(data.status==='fail'){
		            	   if(data.status_code==="401"){
		            		   swal( 'Denied', data.message, 'error');
		                	 location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
		            	   }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: data.message,
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		            	   
		            	   }
		               }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: "Opps somethig went wrong",
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		               }
				},
				error: function() {
					console.log('some this went worng');

			    }
			}); 
	}
 	
 	
 	 function saveInclusion() {
 		$('.btn-success').loading({ text: 'Saving...' })
			var data_save = $(INCLUSSION_FORM_ID).serializeArray();
				 data_save.push({ name: "holidayId", value: holidayId });
  		 $.ajax({
				type : $(INCLUSSION_FORM_ID).attr('method'),
				url : $(INCLUSSION_FORM_ID).attr('action'),
				data :data_save,
			success : function(data) {
		               if(data.status==='success'){

		            	   new PNotify({
		                       title: 'Success',
		                       text: data.message,
		                       type: 'success',
		                       styling: 'bootstrap3'
		                   });
    		    	 $('.btn-success').loading('done');
    		    
		               }else if(data.status==='fail'){
		            	   if(data.status_code==="401"){
		            		   swal( 'Denied', data.message, 'error');
		                	 location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
		            	   }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: data.message,
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		            	   
		            	   }
		               }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: "Opps somethig went wrong",
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		               }
				},
				error: function() {
					console.log('some this went worng');

			    }
			}); 
		
	}
 	 
 	function saveCancellation() {
 		$('.btn-success').loading({ text: 'Saving...' })
			var data_save = $(CANCELLATION_FORM_ID).serializeArray();
				 data_save.push({ name: "holidayId", value: holidayId });
  		 $.ajax({
				type : $(CANCELLATION_FORM_ID).attr('method'),
				url : $(CANCELLATION_FORM_ID).attr('action'),
				data :data_save,
			success : function(data) {
		               if(data.status==='success'){

		            	   new PNotify({
		                       title: 'Success',
		                       text: data.message,
		                       type: 'success',
		                       styling: 'bootstrap3'
		                   });
    		    	 $('.btn-success').loading('done');
    		    
		               }else if(data.status==='fail'){
		            	   if(data.status_code==="401"){
		            		   swal( 'Denied', data.message, 'error');
		                	 location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
		            	   }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: data.message,
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		            	   
		            	   }
		               }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: "Opps somethig went wrong",
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		               }
				},
				error: function() {
					console.log('some this went worng');

			    }
			});  
	}
 	function saveUploads() {
		$('#holidayId').val(holidayId);
 		$('.buttonFinish').loading({ text: 'Saving...' })
 		  $(UPLOAD_FORM_ID).ajaxSubmit({ 
		        // dataType identifies the expected content type of the server response 
		        dataType:  'json', 
		 
		        // success identifies the function to invoke when the server response 
		        // has been received 
		        success:   function(data) {
		              if(data.status==='success'){

		            	   new PNotify({
		                       title: 'Success',
		                       text: data.message,
		                       type: 'success',
		                       styling: 'bootstrap3'
		                   });
				    	 $('.buttonFinish').loading('done');
				    	 
  		             location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL+'/addPackage?holidayId='+holidayId

			               }else if(data.status==='fail'){
    				    	 $('.buttonFinish').loading('done');

		            	   if(data.status_code==="401"){
		            		 swal( 'Denied', data.message, 'error');
		                	 location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
		            	   }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: data.message,
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		            	   
		            	   }
		               }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: "Opps somethig went wrong",
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		               }
				},
				error: function() {
					console.log('some this went worng');

			    }
		    }); 
	}
 	
 	function updateUploads() {
		$('#holidayId').val(holidayId);
 		$('.buttonFinish').loading({ text: 'Saving...' })
 		  $(UPLOAD_FORM_ID).ajaxSubmit({ 
		        // dataType identifies the expected content type of the server response 
		        dataType:  'json', 
		 
		        // success identifies the function to invoke when the server response 
		        // has been received 
		        success:   function(data) {
		              if(data.status==='success'){

		            	   new PNotify({
		                       title: 'Success',
		                       text: data.message,
		                       type: 'success',
		                       styling: 'bootstrap3'
		                   });
				    	 $('.buttonFinish').loading('done');
				    	 
 
			               }else if(data.status==='fail'){
    				    	 $('.buttonFinish').loading('done');

		            	   if(data.status_code==="401"){
		            		 swal( 'Denied', data.message, 'error');
		                	 location.href = Appconstants.SUPPLIER_DASHBOARD_BASEURL
		            	   }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: data.message,
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		            	   
		            	   }
		               }else{
		            	   new PNotify({
		                       title: 'Error',
		                       text: "Opps somethig went wrong",
		                       type: 'error',
		                       styling: 'bootstrap3'
		                   });
		               }
				},
				error: function() {
					console.log('some this went worng');

			    }
		    }); 
	}
 	function init(){
		return {
			initformvalidation : initformvalidation,
			saveholiday:saveholiday,
			saveDestination:saveDestination,
			saveItinerary:saveItinerary,
			saveInclusion:saveInclusion,
			saveCancellation:saveCancellation,
			saveUploads:saveUploads,
			updateUploads:updateUploads
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
		HOLIDAY_FORM_ID:HOLIDAY_FORM_ID,
		DESCTINATION_FORM_ID:DESCTINATION_FORM_ID,
		ITINENARY_FORM_ID:ITINENARY_FORM_ID,
		INCLUSSION_FORM_ID:INCLUSSION_FORM_ID,
		CANCELLATION_FORM_ID:CANCELLATION_FORM_ID,
		UPLOAD_FORM_ID:UPLOAD_FORM_ID,
		initformvalidation:initformvalidation
		//loadDependents: loadDependents
	};
  	
})();