sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("student00.sap.training.propertybinding.controller.Main", {
            onInit: function () {
                var oJSON = {
                    "name":"Peter",
                    "enabled":true
                };

                var oModel = new JSONModel();
                oModel.setData(oJSON);
                this.getView().setModel(oModel);
            }
        });
    });
