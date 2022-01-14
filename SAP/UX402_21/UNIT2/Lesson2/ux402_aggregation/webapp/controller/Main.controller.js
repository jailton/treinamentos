sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("student00.sap.training.ux402aggregation.controller.Main", {
            onInit: function () {
                var model = new JSONModel("model/data.json");
                this.getView().setModel(model);
            },
            onSelectionChange: function(oEvent) {
                var item = oEvent.getParameter("selectedItem");
                //Sempre informar o nome do model. Só "deixar" em branco para o model default
                var context = item.getBindingContext("JSON");
                var posicaoNoModel = context.getPath();
                //Sempre informar o nome do model. Só "deixar" em branco para o model default
                this.getView().byId("simpleform").bindElement({path: posicaoNoModel, model: "JSON"});
            }
        });
    });
