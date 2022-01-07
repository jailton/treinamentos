sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "student00/sap/training/modularization/myLib/MessageManager"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, MessageManager) {
        "use strict";

        return Controller.extend("student00.sap.training.modularization.controller.View1", {
            onInit: function () {

            },
            onPressMe: function() {
                MessageManager.reportSuccess("button was pressed", "success");
            }
        });
    });
