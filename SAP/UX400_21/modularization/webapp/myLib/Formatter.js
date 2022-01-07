sap.ui.define([], 
    function() {    
        'use strict';
        return {
            capitalizeFirstLetter: function(sValue) {
                return sValue.charAt(0).toUpperCase() + sValue.slice(1);
            }
        }
});