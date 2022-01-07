sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("student00.sap.training.helloworld.controller.Main", {
            onInit: function () {

            },
            clicou: function(e) {
                //alert("Aoooo");
                sap.m.MessageBox.show(
                    "This message should appear in the message box.", {
                        icon: sap.m.MessageBox.Icon.INFORMATION,
                        title: "My message box title"});
            }
        });
    });
