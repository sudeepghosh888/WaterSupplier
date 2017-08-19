/**
 * 
 * 
 */

// Author : Deepak
// Description : Algo Holiday v1.0
 

var Country = (function() {
	// Instance stores a reference to the Singleton
	var instance;
	var REL = "Country";
	
 	 function getCityselectoptions(countryId) {
 		 $.ajax({
				type : 'GET',
				url : "/algocommon/getcity?country.countryId="+countryId,
				contentType: "text/plain",
				dataType: "json",
				processData: false, //
				success : function(data) {
					console.log(data);
					if(data.status==='success'){
						var html="<option value=''>select city</option>";
						$.each( data.cities, function( index, value ){
							html+="<option value="+value.cityId+">"+value.city+"</option>"
						});
						$("#city").html(html);
					}
				},
				error: function() {
					console.log('some this went worng');

			    }
			});
	 }
  
	 
	function init(){
		return {
			getCityselectoptions : getCityselectoptions,
 			
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