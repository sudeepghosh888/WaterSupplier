/**
 * 
 * 
 */

// Author : Deepak
// Description : Algo Holiday v1.0
 

      $(document).ready(function() {
    	  $('#wizard').smartWizard({
    	        enableFinishButton: false,
    	        labelNext:'Save And Continue',
    	        onLeaveStep:AddHoliday.leaveAStepCallback,
    	        onFinish:AddHoliday.onFinishCallback
    	        	
    	        });
    	  
    	  $('.buttonNext').addClass('btn btn-success');
          $('.buttonPrevious').addClass('btn btn-primary');
          $('.buttonFinish').addClass('btn btn-default');
        	
          Holiday.initformvalidation();
    	        
      });
      



var AddHoliday = (function() {
	// Instance stores a reference to the Singleton
	var instance;
	var REL = "AddHoliday";
    var isStepValid = false;

 	 function myfuntion() {
 		 
	 }
 	var holiday_obj =Holiday.getInstance();


 
     function leaveAStepCallback(obj, context){
        // alert("Leaving step " + context.fromStep + " to go to step " + context.toStep);
         return validateSteps(context.fromStep); // return false to stay on step and true to continue navigation 
     }

     function onFinishCallback(objs, context){
         if(validateFinishSteps()){
          		
         		isStepValid = false;
             	if($(Holiday.UPLOAD_FORM_ID).validate().form()){
              		 isStepValid = true;
               		holiday_obj.saveUploads();

      				return isStepValid;
             	}
          }
     }

      function validateSteps(stepnumber){
         // validate step 1
         if(stepnumber == 1){
         	isStepValid = false;
         	if($(Holiday.HOLIDAY_FORM_ID).validate().form()){
         		 isStepValid = true;
          		holiday_obj.saveholiday();
 				return isStepValid;
         	}
          }
         
         if(stepnumber==2){
         	isStepValid = false;
         	if($(Holiday.HOLIDAY_FORM_ID).validate().form()){
         		 isStepValid = true;
           		holiday_obj.saveDestination();

  				return isStepValid;
         	}
         }
         if(stepnumber==3){
         	isStepValid = false;
         	if($(Holiday.HOLIDAY_FORM_ID).validate().form()){
         		 isStepValid = true;
          		holiday_obj.saveItinerary();
   				return isStepValid;
         	}
         }
         if(stepnumber==4){
         	isStepValid = false;
         	if($(Holiday.HOLIDAY_FORM_ID).validate().form()){
         		 isStepValid = true;
          		holiday_obj.saveInclusion();

  				return isStepValid;
         	}
         }
         if(stepnumber==5){
         	isStepValid = false;
         	if($(Holiday.HOLIDAY_FORM_ID).validate().form()){
         		 isStepValid = true;
          		holiday_obj.saveCancellation();

  				return isStepValid;
         	}
         }
      }
     
     
     function validateFinishSteps(){
          isStepValid = true;
         // all step validation logic     
         return isStepValid;
     }        
     
     
	function init(){
		return {
			leaveAStepCallback : leaveAStepCallback,
			onFinishCallback:onFinishCallback,
			validateSteps:validateSteps
 			
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
		leaveAStepCallback : leaveAStepCallback,
		onFinishCallback:onFinishCallback,
		validateSteps:validateSteps
		//loadDependents: loadDependents
	};
	
	
})();