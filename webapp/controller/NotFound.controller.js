sap.ui.define([
		"coas/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("coas.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);