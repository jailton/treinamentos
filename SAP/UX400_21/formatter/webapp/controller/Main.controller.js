sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("student00.sap.training.formatter.controller.Main", {
            onInit: function () {
                var oModel = new JSONModel();
                oModel.loadData("model/data.json");
                this.getView().setModel(oModel);
            },
           carrName: function(sCarrId) {
               switch(sCarrId) {
                case "LH":
                    return "Lufthansa";
                case "JL":
                    return "Japan Airlines";
                case "AZ":
                    return "Alitalia";
                default:
                    return sCarrId;
               }
           } 
        });
    });
