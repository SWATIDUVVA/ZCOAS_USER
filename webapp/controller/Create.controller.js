sap.ui.define([
	"coas/controller/BaseController",
	"sap/ui/model/json/JSONModel",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast"
], function(BaseController, JSONModel, History, MessageToast) {
	"use strict";

	return BaseController.extend("coas.controller.Create", {
		/*eslint linebreak-style: ["error", "windows"]*/
		onInit: function() {

			this._oTableSearchState = [];
			this.getRouter().getRoute("create").attachPatternMatched(this._onRouteMatched, this);

			var refThs = this;
			var oCun = this.getView().byId("countrybox").getSelectedKey();
			var oUrl = "/sap/opu/odata/sap/ZCAOS_REQUEST_SRV";
			var oModel = new sap.ui.model.odata.ODataModel(oUrl, {
				json: true,
				loadMetadataAsync: true
			});

		},

		_onRouteMatched: function() {

		},

		onNext: function() {
			debugger
			var pass = "0";
			var Country = this.getView().byId("countrybox").getSelectedKey();
			if (Country === "") {
				pass = "1"
				this.getView().byId("countrybox").setValueState(sap.ui.core.ValueState.Error);
				alert("Please enter Country");

			};

			if (pass === "0") {
				var sub = this.getView().byId("__bar0").setSelectedKey("application-COASUSERPROFILE-display-component---create--__filter1");

			}; // sub.attachPress(pressHandler);
		},

		onNext2: function() {

			var sub = this.getView().byId("__bar0").setSelectedKey("application-COASUSERPROFILE-display-component---create--__filter2");

		},

		onBack1: function() {

			var sub1 = this.getView().byId("__bar0").setSelectedKey("application-COASUSERPROFILE-display-component---create--__filter0");
			sub1.attachPress(pressHandler);
		},
		onBack2: function() {

			var sub1 = this.getView().byId("__bar0").setSelectedKey("application-COASUSERPROFILE-display-component---create--__filter1");
			sub1.attachPress(pressHandler);
		},

		onCountryChange: function(oEvent) {
			var Country = this.getView().byId("countrybox").getSelectedKey();
			if (Country != "") {

				this.getView().byId("countrybox").setValueState(sap.ui.core.ValueState.None);

			};

			// var refThs = this;
			// var oCun = this.getView().byId("countrybox").getSelectedKey();
			// var oUrl = "/sap/opu/odata/sap/ZCAOS_REQUEST_SRV";
			// var oModel = new sap.ui.model.odata.ODataModel(oUrl, {
			// 	json: true,
			// 	loadMetadataAsync: true
			// });
			// var workflowappSet = [];
			// var map = [];
			// var oServiceUrl = "/workflowappSet?$filter=Bname eq '" + oCun + "'";
			// debugger
			// oModel.read(oServiceUrl, {
			// 		async: false,
			// 		success: function(data) {

			// 			for (var i = 0; i < data.results.length; i++) {
			// 				var Land1 = data.results[i].Land1;
			// 				var WfCd = data.results[i].WfCd;

			// 				workflowappSet.push({
			// 					"Land1": Land1,
			// 					"WfCd": WfCd
			// 				});
			// 				map[Land1] = WfCd;
			// 			}
			// 			// var crtModel = refThs.getOwnerComponent().getModel("Model");
			// 			// crtModel.setData(workflowappSet);
			// 			var jModel = new sap.ui.model.json.JSONModel({
			// 				"map": map,
			// 				"workflowappSet": workflowappSet

			// 			});

			// 			sap.ui.getCore().setModel(jModel, "Model");

			// 		},

			// 	},
			// 	function(error) {}
			// );

			// var wfItemTemplate = new sap.ui.core.Item({
			// 	key: "{/workflowappSet>/Land1}",
			// });
			// var selectedValue = this.getView().byId("countrybox").getSelectedKey();
			// var sServiceUrl = "sap/opu/odata/sap/ZCAOS_REQUEST_SRV/workflowappSet";
			// var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true);
			// var combobox = this.getView().byId("wfbox");
			// combobox.setModel(oModel);
			// var oFilter = new sap.ui.model.Filter("Land1", sap.ui.model.FilterOperator.EQ, selectedValue);
			// combobox.bindAggregation("items", {
			// 	path: "/workflowappSet",
			// 	filters: [oFilter],
			// 	template: wfItemTemplate
			// });

			// bindRows("/workflowappSet", undefined, undefined, [oFilter]);

			// var oFilter = new sap.ui.model.Filter("Land1", "EQ", selectedValue);
			// debugger
			// // this.getView().byId("wfbox").getBinding("items").filter(oFilter);
			// var SecondCB = this.getView().byId("wfbox");
			// SecondCB.bindAggregation("items", {
			// 	path: "/NGZ/sap/opu/odata/sap/ZCAOS_REQUEST_SRV/workflowappSet",
			// 	filters: [oFilter],
			// 	template: wfItemTemplate
			// });

			// var wfModel = this.getView().getModel("/workflowappSet");

			// SecondCB.setModel(wfModel);

			// var wfComboBox = new sap.m.ComboBox({
			// 	items: {
			// 		path: "/workflowappSet",
			// 		filters: new sap.ui.model.Filter({
			// 			path: "Land1",
			// 			operator: sap.ui.model.FilterOperator.EQ,
			// 			value1: selectedValue
			// 		}),
			// 		template: wfItemTemplate
			// 	}
			// });

			// var wfModel = this.getView().getModel("/workflowappSet");

			// SecondCB.setModel(wfModel);
		},

		onSave: function(oEvent) {
			debugger
			var oUrl = "/sap/opu/odata/sap/ZCAOS_REQUEST_SRV";
			var oModel = new sap.ui.model.odata.ODataModel(oUrl, {
				json: true,
				loadMetadataAsync: true
			});
			// var oModel = this.getView().getModel();
			var oEntry = {};
			oEntry.Request = "1";
			oEntry.Initiator = this.getView().byId("requestor").getValue();
			oEntry.WfCd = this.getView().byId("wfbox").getSelectedKey();
			oEntry.WfType = this.getView().byId("wfbox").getValue();
			oEntry.Location = this.getView().byId("location").getValue();
			oEntry.Department = this.getView().byId("department").getValue();
			oEntry.Land1 = this.getView().byId("countrybox").getSelectedKey();
			oEntry.Landx = this.getView().byId("countrybox").getValue();
			oEntry.Status = "Initiated";
			// oEntry.AppDate = this.getView().byId("date1").getValue();
			// oEntry.AppDate = "2018-03-26T00:00:00";
			oEntry.Savedraft = "N";
			oEntry.BriefText = this.getView().byId("brief").getValue();
			oModel.create("/requestSet", oEntry, {
				method: "POST",
				success: function(data) {
					var sMessage = 'Request Successfully Saved';
				},
				error: function(e) {
					var sMessage = 'Error';
					MessageToast.show(sMessage);
				}
			});
		},

		onDraft: function() {},

		onNavBack: function() {

			var oHistory = History.getInstance(),
				sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				history.go(-1);
				debugger

			} else {

				var bReplace = true;
				this.getRouter().navTo("worklist", {}, bReplace);

			}
		}
	});
});