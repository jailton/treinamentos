sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel) {
        "use strict";

        return Controller.extend("student00.sap.training.ux402binding.controller.Main", {
            onInit: function () {
                var uri = "/sap/opu/odata/IWBEP/RMTSAMPLEFLIGHT_2";
                var model = new ODataModel(uri, {useBatch: false});
                this.getView().setModel(model, "RMTSAMPLEFLIGHT_2");
            }
        });
    });
