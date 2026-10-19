sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"customer/porky/zshipsumv4/test/integration/pages/ZC_ShipmentBlotterList.gen",
	"customer/porky/zshipsumv4/test/integration/pages/ZC_ShipmentBlotterObjectPage.gen"
], function (JourneyRunner, ZC_ShipmentBlotterListGenerated, ZC_ShipmentBlotterObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('customer/porky/zshipsumv4') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_ShipmentBlotterListGenerated: ZC_ShipmentBlotterListGenerated,
			onTheZC_ShipmentBlotterObjectPageGenerated: ZC_ShipmentBlotterObjectPageGenerated
        },
        async: true
    });

    return runner;
});

