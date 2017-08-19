////////////////////////////////////////////////////////////////////////////

// FileName Award_script.js: Award Javascript file

// Author : Joydeep Roy Choudhury
// Description : Genius ERP v2.0


////////////////////////////////////////////////////////////////////////////


var AwardScript = (function(){
	// Stores the field of the parent form
	var formField;

	// Is true if the form is launched from another form, as child form
	var isChildForm = false;

	// Instance stores a reference to the Singleton
	var instance;

	//Url
	var URL="/AwardDataHandler";

	//table relation attributes
	var REL = "AwardDetails";
	var FORM_ID = "edit_award_form";

	//Data Store : declare local data store objects.
	var LOCAL_DATA={};
	//Data table instance
	var DATA_TABLE;

	//Add/Edit Form Dimension
	var ADDFORM_HEIGHT = 'auto';
	var ADDFORM_WIDTH = 'auto';
	//--------------Table row index:-----------------

	var value = 0;

	var INDEX = {
		CHECKBOX : value++,

		AWARD_ID : value++,
		GI_ENTITY_ID : value++,
		AWARD_DATE : value++,
		AWARD : value++
	};

	//-------------Table Header Label----------------------

	var LABEL = {

		AWARD_ID : "Award Id",
		GI_ENTITY_ID : "Gi Entity Id",
		AWARD_DATE : "Award Date",
		AWARD : "Award"
	};

	//-----------------------------Default values------------------------------------
	var DEFAULT = {

		AWARD_ID : 0,
		GI_ENTITY_ID : 0,
		AWARD_DATE : "",
		AWARD : ""
	};

	//-----------------------------Form Elements------------------------------------
	var FORM_FIELD = {

		AWARD_ID : "#"+FORM_ID+" input[name=award_id]",
		GI_ENTITY_ID : "#"+FORM_ID+" select[name=gi_entity_id]",
		AWARD_DATE : "#"+FORM_ID+" input[name=award_date]",
		AWARD : "#"+FORM_ID+" textarea[name=award]"
	};
	/*------------------------- Load Dependents---------------------------------------*/
	function loadDependents(option) {
		//updateCityData({callback : function(){
			if(undefined !== option)
				option.callback();
		//}});
	}

	//get Award data
	function getStorageData(){
		//get data from global storage
		if(typeof(Storage)!=="undefined"){
			// Code for localStorage/sessionStorage.
			if (sessionStorage.getItem(REL+'_data')){
				var jsonString = sessionStorage.getItem(REL+'_data');
				//return jQuery.parseJSON(jsonString);
				return  JSON.parse(jsonString);
			}else {
				return null;
			}
		}else {
			// Sorry! No Web Storage support..
			if(LOCAL_DATA.json){
				return LOCAL_DATA.json;
			}
			return null;
		}
	}
	//set Award data
	function setStorageData(json){
		//set data from global storage
		if(typeof(Storage)!=="undefined"){
			// Code for localStorage/sessionStorage.
			if (sessionStorage.getItem(REL+'_data')){
				sessionStorage.removeItem(REL+'_data');
				sessionStorage.setItem(REL+'_data', JSON.stringify(json)); 
			}
			else{
				sessionStorage.setItem(REL+'_data', JSON.stringify(json));
			}
		}
		else{
			// Sorry! No Web Storage support..
			LOCAL_DATA.json = json;
		}
	}
	function loadTabContent(){
		var gi_entity = Gi_entityScript.getInstance();
		gi_entity.getData();


		updateData({
			callback : function(status, response){

				if( status && response.status_code >= 0 ){

					loadDependents({ callback: function(){
						/* create table*/
						createTable(response, 0);

						showCurrentTabContent();
					}});

				}else if(response.status_code==G_ERROR.CODE.EMPTYLIST){//data not available
					//draw empty table
					$.getJSON( ROOT_URL + URL + URL_THEADER, function(json){
						createTable(json, 0);
						showCurrentTabContent();
					});
					loadDependents();
				}
			}
		});
	}
	/*------------ create and Customize data table----------------*/
	function createTable(json, _row_index){
		var container_id = 'tab_content'; //dont change

		//Remove data table if already exists
		if( undefined !== DATA_TABLE && isDataTable(DATA_TABLE))
			DATA_TABLE.fnDestroy();

		//Remove tab container if already exist
		if($('#'+REL+'_content').length != 0){
			$('#'+REL+'_content').remove();
		}
		//check if data received
		if(!json){
			console.log('Data not available for table');
			return;
		}

		/*
		 * Create Container for datagrid
		 */
		var grid = $('<div></div>')
					.addClass('tblContainer')
						.attr('id', json.rel + "_content")
							.appendTo($("#"+container_id));

		var table_id = json.rel+'_table';

		/*
		 * Create TABLE
		 */
		var table_obj = $('<table id="'+table_id+'" class="_editable_table" width="100%"></table>').appendTo(grid);

		//store a copy for later use
		setStorageData(json);
		//attach data
		table_obj.data('table_data', JSON.stringify(json)); //to be use for retrieving rows

		//get a copy of data for rows
		var tableData = [];
		//create a copy
		if(json.values){

			tableData = json.values.slice(0);	
		}		

		//prepare data for rows
		$.each( tableData, function(i, v) {
			var inp = '<input type="checkbox" name="'+json.rel+"_"+(i+1)+'" class="'+v[0]+'" data_row_index="'+i+'"/>';
			v.splice(0,0,inp); //add input elemet to begining of array
		});

		//set display row start
		if(!(_row_index))
			_row_index = 0;

		var _num_row_per_page = 15; //number of records per page
		if( _row_index >= _num_row_per_page){
			_row_index -= (_row_index % _num_row_per_page);
		}else{
			_row_index = 0;
		}
		//render column
		var aoColumnDefs_render = [

					{
						"fnRender":	function ( o, val ) {
									return myFunction( o.aData[ INDEX.AWARD_ID ] ); },
								"aTargets": [ INDEX.AWARD_ID ]
					},
					{"fnRender": function ( o, val ) {
						var gi_entity = Gi_entityScript.getInstance();
						var gi_entity_name = getValueById( o.aData[ INDEX.GI_ENTITY_ID ], gi_entity );
						return gi_entity_name;
						},
						"aTargets": [ INDEX.GI_ENTITY_ID ]
					},
					{
						"fnRender":	function ( o, val ) {
									return myFunction( o.aData[ INDEX.AWARD_DATE ] ); },
								"aTargets": [ INDEX.AWARD_DATE ]
					},
					{
						"fnRender":	function ( o, val ) {
									return myFunction( o.aData[ INDEX.AWARD ] ); },
								"aTargets": [ INDEX.AWARD ]
					}
					];
		//Define Column Headings
		var aoColumns_headings = [

						{	"sTitle": '<input type="checkbox" name="select_all_rows" title="Select All/None">', "sClass": "center", "bSortable": false, "sWidth": "5%"  }

						,{	"sTitle": json.headings[INDEX.AWARD_ID-1] , "sClass": "center", "sType": "string", "bSearchable": true, "bVisible": true }
						,{	"sTitle": json.headings[INDEX.GI_ENTITY_ID-1] , "sClass": "center", "sType": "string", "bSearchable": true, "bVisible": true }
						,{	"sTitle": json.headings[INDEX.AWARD_DATE-1] , "sClass": "center", "sType": "string", "bSearchable": true, "bVisible": true }
						,{	"sTitle": json.headings[INDEX.AWARD-1] , "sClass": "center", "sType": "string", "bSearchable": true, "bVisible": true }
					];
		//Create data table
		var oTable = $("#"+table_id).dataTable({
							"aaData": tableData,
							"aoColumns":aoColumns_headings,
							"bJQueryUI": true,
							"sPaginationType": "full_numbers",
							"iDisplayLength":_num_row_per_page,
							"iDisplayStart": _row_index,
							"aLengthMenu": [[10, 15, 20, 25, 50, 100, -1], [10, 15, 20, 25, 50, 100, "All"]],
							"aoColumnDefs": aoColumnDefs_render 
							});

		DATA_TABLE=oTable;

		//show add/edit/delete buttons/and other events
		addButtonPanel(table_id);
		addTableEvents(table_id);
	}

	//Function for table events onClick, ondblClick
	function addTableEvents(table_id){
		//single click event
		addTableRowClickEnent(table_id);

		//dbl click event
		var userRole = getUserRoleFromCookie();
		if(userRole){
			if( checkRolePermission(userRole, SOFTWARE_FEATURE_CONST.EDIT_AWARD) == true ){ //edit enabled : permissions
				addTableRowDblClickEvent(table_id, function(index){
					var data = JSON.parse($('#'+table_id).data('table_data'));

					var value_array = data.values;

					popUpEditForm(value_array[index], index);
				});
			}
		}

		//select all/none check box
		addTableSelectAllRowChkBoxEvent(table_id);
	}
	//add button panel
	function addButtonPanel(table_id){
		//remove if exists
		removeButtonPanel();

		var tab_tool_id = '#tab_tool';

		var this_tool_id = REL+'_toolBtns';

		var panel = 	'<ul class="toolBtns" id="'+this_tool_id+'">'
				+'<li><button class="add_button tool_button_css t_button" type="button">Add</button></li>'
				+'<li><button class="edit_button tool_button_css t_button" type="button">Edit</button></li>'
				+'<li><button class="remove_button tool_button_css t_button" type="button">Delete</button></li>'
				+'<li><button class="refresh_button tool_button_css t_button" type="button">Refresh</button></li>'
				+'<li><button class="select_action tool_button_css_a t_button" type="button">Action</button>'
				+'<div class="select_action_list dropdown_menu hide_elem" style="min-width: 145px; min-height: auto;">'
				+'<ul>'
				+'</ul>'
				+'</div>'
				+'</li>'
				+'</ul>';
		$(tab_tool_id+'').append(panel);

		$('#'+this_tool_id+' .select_action').button({
			icons: {
				secondary: "ui-icon-triangle-1-s"
			}
		});

		$('#'+this_tool_id+' .t_button' ).button();

		$(tab_tool_id).show();
		$(tab_tool_id+' .toolBtns').hide();

		//attach click events
		attachToolButtonEvents(table_id, this_tool_id);
		//show buttons
		$('#'+this_tool_id ).show(); 				
	}

	//attach click events to the tool buttons
	function attachToolButtonEvents(table_id, button_panel_id){
		var userRole = getUserRoleFromCookie();
		if(userRole){

		//Add button
		var add_button_id = "#"+button_panel_id+' button.add_button';
			if( checkRolePermission(userRole, SOFTWARE_FEATURE_CONST.ADD_AWARD) == true ){
				$(add_button_id).on('click',function(){
					popUpAddForm();
				});
			}
			else{
				$(add_button_id).button({disabled: true});
			}

		//Edit button
		var edit_button_id = "#"+button_panel_id+' button.edit_button';
			if( checkRolePermission(userRole, SOFTWARE_FEATURE_CONST.EDIT_AWARD) == true ){
				$(edit_button_id).on('click',function(){
					if(checkIfSingleRowSelected(table_id)== true){
						var index_arr = getSelectedRowDataIndex(table_id);
						if( index_arr.length == 1){
							var data = JSON.parse($('#'+table_id).data('table_data'));
							var value_array = data.values;

							popUpEditForm(value_array[index_arr[0]], index_arr[0]);
						}
					}
				});
			}
			else{
				$(edit_button_id).button({ disabled: true });
			}

		//Delete/remove_button
		var remove_button_id = "#"+button_panel_id+' button.remove_button';
			if( checkRolePermission(userRole, SOFTWARE_FEATURE_CONST.DELETE_AWARD) == true ){
				$(remove_button_id).on('click',function(){

					if(checkIfRowSelected(table_id)== true){

						var index_arr = getSelectedRowDataIndex(table_id);
						var num_row = index_arr.length;

						if( num_row >= 1){
							var data = JSON.parse($('#'+table_id).data('table_data'));
							var value_array = data.values;
							var del_data_arr = [];

							$.each(index_arr, function(inx,val){
								del_data_arr.push(value_array[val]);
							});

							var table_name = "Award";

							dialogMessageDeleteRow( table_name, num_row, function(){
								deleteRows(del_data_arr);
							});
						}
					}
				});
			}else{//disable
				$(remove_button_id).button({ disabled: true });
			}
		}
		//refresh
		var refresh_button_id = "#"+button_panel_id+' button.refresh_button'; //
		$(refresh_button_id).on('click',function(e){
			$(e.currentTarget).button('disable');
			showTabContent(REL);
			window.setTimeout(function(){
				$(e.currentTarget).button('enable');
			}, 2000);
		});

		//actions : TODO check which actions to be enabled for which user
		var action_button_id = "#"+button_panel_id+' button.select_action'; //button id
		var action_menu_id = "#"+button_panel_id+' div.select_action_list'; //menu id
		var action_list = $(action_menu_id+' ul');

		populateActionMenu(action_list);

		addActionMenuEvent({
			button_id: action_button_id,
			menu_id: action_menu_id,
			callback: function(id){
				execMenuAction(id);
			}
		});
	}

	//remove botton panel
	function removeButtonPanel(){
		var tool_panel_id = REL+'_toolBtns';
		$('#'+tool_panel_id).remove();
	}

	//function to display popUp form: 'titleString' is title of popUp window, 'mode' is Add or Edit.
	function displayForm(titleString, mode, row_index) {

		//$("#"+FORM_ID+"").dialog("destroy");
		$("input, textarea", $("#"+FORM_ID+"")).removeClass( "ui-state-error" );

		addCommonFormEvents(FORM_ID);

		$("#"+FORM_ID+"").dialog({
			autoOpen : false,
			height : ADDFORM_HEIGHT,
			width : ADDFORM_WIDTH,
			modal : true,
			title : titleString,
			buttons : {
				" Save " : function(e) {

					$(e.currentTarget).button('disable');

					var bValid = true;

					$("#"+FORM_ID+"").replaceSymbolUtils();
					$("#"+FORM_ID+"").trimInputFields();

					$("form .name","#"+FORM_ID+"").capsFirstLetter();

					bValid = validateForm();

					if(true == bValid){
						saveFormData(mode, row_index);

						window.setTimeout(function(){
							$(e.currentTarget).button('enable');
						}, 1000);

					}else{
						$(e.currentTarget).button('enable');
					}
				},
				" Cancel " : function() {
					if(isChildForm ==  true){

						isChildForm == false;

					}

					$(this).dialog("close");
				}
			},
			close : function() {
				$.timepicker._hideTimepicker();
				$.datepicker._hideDatepicker();
				$("#"+FORM_ID+"").dialog("destroy");					
			}
		});
		$("#"+FORM_ID+"").dialog('open');
	}
	function validateForm(){
		var bValid = true;
		var country_code = "+91";
		var fv = FormValidation;
		bValid = bValid && fv.checkEmpty($(FORM_FIELD.AWARD_ID), G_ERROR.MSG.empty_error+LABEL.AWARD_ID);
		bValid = bValid && fv.checkEmptySelect($(FORM_FIELD.GI_ENTITY_ID), G_ERROR.MSG.empty_error_selectbox+LABEL.GI_ENTITY_ID);
		bValid = bValid && fv.checkEmpty($(FORM_FIELD.AWARD_DATE), G_ERROR.MSG.empty_error+LABEL.AWARD_DATE);
		bValid = bValid && fv.checkEmpty($(FORM_FIELD.AWARD), G_ERROR.MSG.empty_error+LABEL.AWARD);

		return bValid;
	}
	function setFormDefaults() {
		DEFAULT.AWARD_ID = getNewId(getStorageData(), (INDEX.AWARD_ID));
		$(FORM_FIELD.AWARD_ID).val(DEFAULT.AWARD_ID);
		var gi_entity =  Gi_entityScript.getInstance();
		gi_entity.populateInfo( $(FORM_FIELD.GI_ENTITY_ID), DEFAULT.GI_ENTITY_ID );
		$(FORM_FIELD.AWARD_DATE).val(DEFAULT.AWARD_DATE);
		$(FORM_FIELD.AWARD).val(DEFAULT.AWARD);
	}
	function popUpAddForm(field) {

		if(field){

			formField = field;

			isChildForm = true;

		}

		setFormDefaults();

		displayForm("Add New Award", INSERT_DATA, 0);
	}

	function popUpEditForm(data, row_index) {

		var i = 0;
		$(FORM_FIELD.AWARD_ID).val(data[i++]);
		var gi_entity =  Gi_entityScript.getInstance();
		gi_entity.populateInfo( $(FORM_FIELD.GI_ENTITY_ID), data[i++] );
		$(FORM_FIELD.AWARD_DATE).val(timeToDisplayDate(data[i++]));
		$(FORM_FIELD.AWARD).val(data[i++]);
		displayForm("Edit Award", UPDATE_DATA, row_index);
	}

	function getFormDataAsJson(){
		var jsonData = {
			award_id : ($(FORM_FIELD.AWARD_ID).val()),
			gi_entity_id : ($(FORM_FIELD.GI_ENTITY_ID).val()),
			award_date : DateToSaveTime($(FORM_FIELD.AWARD_DATE).val()),
			award : ($(FORM_FIELD.AWARD).val())
		};
		return jsonData;
	}

	function saveFormData(mode, row_index) {

		var jsonData = getFormDataAsJson();

		var inData = JSON.stringify(jsonData);

		var _url = ROOT_URL + URL, TYPE = '';

		switch (mode) {
		case INSERT_DATA:
			TYPE = "POST";
			break;
		case UPDATE_DATA:
			TYPE = "PUT";
			break;
		default:
			return false;
		}

		var com = new AjaxRequest();
		com.init({url:_url, type: TYPE, data: inData});
		com.send({ callback: function(status, response){

			var dialogMessage=" ERROR ";
			if( status && response.data.status_code >= 0 && mode==INSERT_DATA)
				dialogMessage="Award has been successfully added ("+jsonData.name+" Id:"+response.data.id+")";
			else if( status && response.data.status_code >= 0 && mode==UPDATE_DATA)
				dialogMessage="Award has been successfully updated("+jsonData.name+" Id:"+response.data.id+")";
			else
				dialogMessage+=" : "+response.message+" ";

			if ( status && response.data.status_code >= 0 ){

				updateData({callback : function(status, response){
					if(status && response.status_code >=0){

						if(mode==INSERT_DATA){
							row_index = response.values.length;
						}
						createTable(response, row_index );
					}
					else
						alert("   Please reload This Page.!   ");
				}});

				dialogMessageSuccess(dialogMessage, "Status");
				$("#"+FORM_ID).dialog("close");
			}
			else{
				dialogMessageFailed(dialogMessage, "Status");
			}
		}
		});
	}

	function deleteRows(row_data_arr){
		var row_id_arr = [];
		var key_column_index = [ INDEX.AWARD_ID ];
		row_id_arr = getArrayFromArray({ index : key_column_index, data_arr : row_data_arr});

		var jsonData = {
				del_row_id_arr : row_id_arr
//			,award_id : getAwardId()	// ADD ANY OTHER CONDITION (IF ANY)
		};
		var inData = JSON.stringify(jsonData);

		var _url = ROOT_URL + URL, TYPE = "DELETE";

		var com = new AjaxRequest();
		com.init({url:_url, type: TYPE, data: inData});
		com.send({callback:function(status, response){
			var dialogMessage=" ERROR";

			if( true == status && response.data.status_code > 0 ){
				updateData({
					callback : function(status, data){
						if(status && data.status_code >=0){
							setStorageData(response);
						}
					}
				});

				dialogMessage="Award has been successfully deleted :"+response.data.status_code+" row(s)";


				var table_id = REL+'_table';
				var data = JSON.parse($('#'+table_id).data('table_data'));
				var value_array = data.values;
				var index = getSelectedRowDataIndex(table_id);
				//on call back remove rows from table:put inside callback
				DATA_TABLE = $('#'+REL+"_table").dataTable();
				var aReturn = new Array();

				var aTrs = DATA_TABLE.fnGetNodes();

				for(var i=0; i<aTrs.length;i++) {
					if ( $(aTrs[i]).hasClass('selected_row') ) {
						aReturn.push( aTrs[i] );
					}
				}
				for(var i=0; i<aReturn.length;i++){
					DATA_TABLE.fnDeleteRow( aReturn[i] );
				}
				//update table data- remove deleted row
				index.sort();
				for(var j = (index.length - 1); j>=0; j--){
					value_array.splice(index[j], 1);
				}
				data.values = value_array;
				data.rows = value_array.length;
				$('#'+table_id).data('table_data', JSON.stringify(data));

				dialogMessageSuccess(dialogMessage, "Status");
			}
			else if( true == status &&  response.data.status_code == G_ERROR.CODE.DELETE_OPERATION_DEPENDENT_EXISTS){
				if( row_data_arr.length > 1)
					dialogMessage = "Cannot delete Award. There are some dependencies for this Award.";
				else
					dialogMessage = "Cannot delete Award. There are some dependencies for this Award.";

				dialogMessageWarning(dialogMessage, "Status");
			}
			else {
				dialogMessage += ":"+response.message +" ";
				dialogMessageFailed(dialogMessage, "Status");
			}
		}
		});
	}
	function updateData(option){

		var _url = ROOT_URL + URL +"?organization_id="+ getOrganizationId();	//sys_user_id="+ getCurLogUserId();

		if(option && option.award_id){
			$.each(option.award_id, function(inx, val){
				_url += '&award_id='+val;
			});
		}

		var com = new AjaxRequest();
		com.init({url:_url});
		com.send({callback: function(status, response){
			if( status && response.data.status_code >= 0 ){
				if(option && option.callback)
					option.callback(status, response.data);
			}
			else {
				if(option && option.callback)
					option.callback(false, response);
			}
		}});
	}
	/* populate combobox*/
	function populateInfo(elem, select_id, callback) {
		var  id_index = INDEX.AWARD_ID, name_index = getNameIdx();
		var values = [];

		if(null == getStorageData()){
			$("option:first",elem).nextAll().remove();
		}
		if(null !== getStorageData()){
			var _data = getStorageData();
			values =  _data.values;
			populateCombobox(elem, values, id_index, name_index);
			elem.val(select_id);
			if(callback)
				callback();
		}
		else {
			updateData({
				callback: function(status, data){
					if( status && data.values){
						values =  data.values;

						populateCombobox(elem, values, id_index, name_index);
						elem.val(select_id);
					}
					else{
						console.log('AWARD_DATA is empty');
					}
					if(callback)
						callback();
				}
			});
		}
	}

	/**
	 *  Populate Action menu
	 */
	function populateActionMenu(list) {
		//empty list
		list.html('');
		//add items
		list.append( $('<li value="1">Send SMS</li>'));
		list.append( $('<li value="2">Send Email</li>'));
	}

	/**
	 *execute click function
	 * @param id{int}: li value in populateActionMenu()
	 */
	function execMenuAction(id){
		switch(id){
		case 1:
			AwardSendSms();
			break;
		case 2:
			AwardSendEmail();
			break;	
		default:
			log('Award Action', 'unknown parameter');
		}
	}
	function getData(){

		var data = getStorageData();
		if( data != null && data.values != null )
			return;

		updateData({
			callback : function(status, response){

				if( status && response.status_code >= 0 ){

					setStorageData(response);
				}
			}
		});
	}

	function myFunction( value ) {
		return value;
	}

	function getIdIdx() {
		return INDEX.AWARD_ID;
	}

	function getNameIdx() {
		return INDEX.CHOOSE_NAME;
	}

	function init(){
		return {
			//expose all public instance methods
			createTable : createTable,
			loadTabContent: loadTabContent,
			populateInfo: populateInfo,
			setStorageData: setStorageData,
			getStorageData: getStorageData,
			updateData: updateData,
			popUpAddForm: popUpAddForm,
			getIdIdx: getIdIdx,
			getNameIdx: getNameIdx,
			getData : getData
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
		INDEX : INDEX,
		LABEL : LABEL,
		FORM_FIELD : FORM_FIELD,
		URL : URL,
		REL : REL //,
		//loadDependents: loadDependents
	};
})();