sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"customer/porky/zshipsumcomposition/test/integration/pages/ZC_ShipmentBlotter_HeaderList.gen",
	"customer/porky/zshipsumcomposition/test/integration/pages/ZC_ShipmentBlotter_HeaderObjectPage.gen"
], function (JourneyRunner, ZC_ShipmentBlotter_HeaderListGenerated, ZC_ShipmentBlotter_HeaderObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('customer/porky/zshipsumcomposition') + '/test/flp.html#app-preview',
        pages: {
			onTheZC_ShipmentBlotter_HeaderListGenerated: ZC_ShipmentBlotter_HeaderListGenerated,
			onTheZC_ShipmentBlotter_HeaderObjectPageGenerated: ZC_ShipmentBlotter_HeaderObjectPageGenerated
        },
        async: true
    });

    return runner;
});

