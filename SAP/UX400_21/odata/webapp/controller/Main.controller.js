sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v2/ODataModel", 
    "sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, ODataModel, MessageBox) {
        "use strict";

        return Controller.extend("student00.sap.training.odata.controller.Main", {
            onInit: function () {
                var sURL = "/sap/opu/odata/sap/UX_TRAVEL_SRV/";
                var oModel = new ODataModel(sURL, {useBatch: false});
                this.getView().setModel(oModel);
            },
            onFlightChange: function(oEvent) {
                var selectedRowContext = oEvent.getParameter("rowContext");
                var sPath = selectedRowContext.getPath();
                
                var oBookingTable = this.byId("idBookingTable");
                oBookingTable.bindElement(sPath);
            },
            onCreateBooking: function(oEvent) {
                var carrId = oEvent.getSource().data("Carrid");
                var connId = oEvent.getSource().data("Connid");
                var fldate = oEvent.getSource().data("Fldate");

                var oBookingData = {
                    "Carrid": carrId,
                    "Connid": connId,
                    "Fldate": fldate,
                    "Customid": "154",
                    "Passname": "Anita Acht",
                    "Counter": "1"
                };

                var oBookingTable = this.byId("idBookingTable");
                var oModel = this.getView().getModel();

                oModel.create("/UX_C_Booking_TP", oBookingData, {
                    success: function(oData) {
                        MessageBox.success("Booking created with booking number " + oData.Bookid);
                        var oSorter = new sap.ui.model.Sorter("OrderDate", true);
                        oBookingTable.getBinding("rows").sort([oSorter]);
                    },
                    error: function(oError) {
                        var oMsg = JSON.parse(oError.responseText);
                        MessageBox.error(oMsg.error.innererror.errordetails[0].message, {
                            details: oMsg
                        });
                    }
                });

            },
            onCancelBooking: function(oEvent) {
                var carrId = oEvent.getSource().data("Carrid");
                var bookId = oEvent.getSource().data("Bookid");

                var oModel = this.getView().getModel();

                oModel.callFunction("/CancelBooking", {
                    method: "POST",
                    urlParameters: {
                        Carrid: carrId,
                        Bookid: bookId
                    },
                    error: function(oError) {
                        var oMsg = JSON.parse(oError.responseText);
                        MessageBox.error(oMsg.error.innererror.errordetails[0].message, {
                            details: oMsg
                        });
                    }
                });
            }
        });
    });
