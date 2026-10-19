sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"customer/porky/zodataent/test/integration/pages/ZR_ODataEntMaintList.gen",
	"customer/porky/zodataent/test/integration/pages/ZR_ODataEntMaintObjectPage.gen"
], function (JourneyRunner, ZR_ODataEntMaintListGenerated, ZR_ODataEntMaintObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('customer/porky/zodataent') + '/test/flp.html#app-preview',
        pages: {
			onTheZR_ODataEntMaintListGenerated: ZR_ODataEntMaintListGenerated,
			onTheZR_ODataEntMaintObjectPageGenerated: ZR_ODataEntMaintObjectPageGenerated
        },
        async: true
    });

    return runner;
});

