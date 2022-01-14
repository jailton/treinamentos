/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00/com/sap/training/ux402/fullscreen/ux402_fullscreen/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
