jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
		"sap/ui/test/Opa5",
		"coas/test/integration/pages/Common",
		"sap/ui/test/opaQunit",
		"coas/test/integration/pages/Worklist",
		"coas/test/integration/pages/Object",
		"coas/test/integration/pages/NotFound",
		"coas/test/integration/pages/Browser",
		"coas/test/integration/pages/App"
	], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "coas.view."
	});

	sap.ui.require([
		"coas/test/integration/WorklistJourney",
		"coas/test/integration/ObjectJourney",
		"coas/test/integration/NavigationJourney",
		"coas/test/integration/NotFoundJourney",
		"coas/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});