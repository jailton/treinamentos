/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00sap.training./property_binding/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
