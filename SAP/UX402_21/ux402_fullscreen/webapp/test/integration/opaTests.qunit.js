/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["student00/sap/training/ux402fullscreen/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});