sap.ui.define([
		"sap/ui/test/Opa5",
		"coas/test/integration/pages/Common"
	], function(Opa5, Common) {
		"use strict";

		Opa5.createPageObjects({
			onTheBrowser : {
				baseClass : Common,

				actions : {

					iPressOnTheBackwardsButton : function () {
						return this.waitFor({
							success : function () {
								// manipulate history directly for testing purposes
								Opa5.getWindow().history.back();
							}
						});
					},

					iPressOnTheForwardsButton : function () {
						return this.waitFor({
							success : function () {
								// manipulate history directly for testing purposes
								Opa5.getWindow().history.forward();
							}
						});
					},

					iChangeTheHashToSomethingInvalid : function () {
						return this.waitFor({
							success : function () {
								Opa5.getHashChanger().setHash("/somethingInvalid");
							}
						});
					},

					iChangeTheHashToTheRememberedItem : function () {
						return this.waitFor({
							success : function () {
								var sObjectId = this.getContext().currentItem.id;
								Opa5.getHashChanger().setHash("/requestSet/" + sObjectId);
							}
						});
					},

					iRestartTheAppWithTheRememberedItem : function (oOptions) {
						var sObjectId;
						this.waitFor({
							success : function () {
								sObjectId = this.getContext().currentItem.id;
								this.iTeardownMyAppFrame();
							}
						});

						return this.waitFor({
							success : function() {
								oOptions.hash = "/requestSet/" + encodeURIComponent(sObjectId);
								this.iStartMyApp(oOptions);
							}
						});
					}
				},

				assertions: {}
			}

		});
	}
);