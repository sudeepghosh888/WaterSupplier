/**
 * 
 * 
 */

// Author : Deepak
// Description : Algo Holiday v1.0
 

var AddPackage = (function() {
	// Instance stores a reference to the Singleton
	var instance;
	var REL = "AddPackage";
	
 	 function Sample() {
 		 
	 }
  
 	 
 	 
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