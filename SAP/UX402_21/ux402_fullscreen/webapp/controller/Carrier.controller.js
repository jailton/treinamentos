sap.ui.define([
    'sap/ui/core/mvc/Controller'
], function(Controller) {
    'use strict';
    return Controller.extend("student00.sap.training.ux402fullscreen.controller.Carrier", {
        getRouter: function() {
            return sap.ui.core.UIComponet.getRouterFor(this);
        }
    });
});