/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00/sap/training/ux402usingtemplate/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});