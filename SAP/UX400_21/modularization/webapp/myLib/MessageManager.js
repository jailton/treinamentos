sap.ui.define([
    'sap/m/MessageBox',
    'student00/sap/training/modularization/myLib/Formatter'
], function(MessageBox, Formatter) {
    'use strict';
    return {
        reportSuccess: function(sMgs, sTitle) {
            MessageBox.show(
                Formatter.capitalizeFirstLetter(sMgs), {
                    tilte: Formatter.capitalizeFirstLetter(sTitle)
                }
            );
        }
    } 
});