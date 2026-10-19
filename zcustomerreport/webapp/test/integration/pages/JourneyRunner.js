sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"customer/porky/zcustomerreport/test/integration/pages/ZI_CustomerReportDetailList.gen",
	"customer/porky/zcustomerreport/test/integration/pages/ZI_CustomerReportDetailObjectPage.gen"
], function (JourneyRunner, ZI_CustomerReportDetailListGenerated, ZI_CustomerReportDetailObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('customer/porky/zcustomerreport') + '/test/flp.html#app-preview',
        pages: {
			onTheZI_CustomerReportDetailListGenerated: ZI_CustomerReportDetailListGenerated,
			onTheZI_CustomerReportDetailObjectPageGenerated: ZI_CustomerReportDetailObjectPageGenerated
        },
        async: true
    });

    return runner;
});

