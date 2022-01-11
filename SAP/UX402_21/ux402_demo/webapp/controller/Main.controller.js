sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel, JSONModel) {
        "use strict";

        return Controller.extend("student00.sap.training.ux402demo.controller.Main", {
            onInit: function () {
                var json = {
                    "name": "Maria",
                    "age": "20"
                }
                
                var jsonModel = new JSONModel();
                jsonModel.setDefaultBindingMode(sap.ui.model.BindingMode.OneWay);
                jsonModel.setData(json);
                this.getView().setModel(jsonModel, "JSON_MODEL");   

                var vServiceUrl = "/sap/opu/odata/IWBEP/GWSAMPLE_BASIC/";
                var model = new ODataModel(vServiceUrl, {useBatch: false});
                this.getView().setModel(model, "GWSAMPLE_BASIC");   

                var vServiceUrlFlight = "/sap/opu/odata/sap/UX402_FLIGHT_SRV";
                var modelFlight = new ODataModel(vServiceUrlFlight, {useBatch: false});
                this.getView().setModel(modelFlight, "UX402_FLIGHT_SRV");   
            },
            onRowSelectionChange: function(oEvent) {
                console.log("Cliquei...");
            }
        });
    });
