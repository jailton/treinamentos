sap.ui.define(["jquery.sap.global","sap/ui/core/library"],
	function(jQuery,library) {
		"use strict";
		
		sap.ui.getCore().initLibrary({
			name:"student00.com.sap.training.ux402.controls",
			version:"1.0.0",
			dependencies: ["sap.ui.core"],
			types:[],
			interfaces: [],
			controls: [
			 "student00.com.sap.training.ux402.controls.PlaneInfo",
			 "student00.com.sap.training.ux402.controls.HoverButton"
			],
			elements: [
				
			],
			noLibraryCSS: true
		});
	
		return student00.com.sap.training.ux402.controls;	
	},/*bExport*/ false);
    