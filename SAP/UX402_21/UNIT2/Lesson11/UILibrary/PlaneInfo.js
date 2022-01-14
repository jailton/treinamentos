sap.ui.define([
    "sap/ui/core/Control",
    "student00/com/sap/training/ux402/controls/PlaneInfoRenderer"
], function(Control, PlaneInfoRenderer) {
	"use strict";

	return Control.extend("student00.com.sap.training.ux402.controls.PlaneInfo", {
		metadata: {
            properties: {
				"seatsMax": {
					type: "string"
				},
				"seatsOcc": {
					type: "string"
				},
				"planeType": {
					type: "string"
				}
			}
        },
        renderer: PlaneInfoRenderer
	});
});
