sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'customer/porky/zcustomermaterial/test/integration/FirstJourney',
		'customer/porky/zcustomermaterial/test/integration/pages/ZCSD_CUSTOMERMATERIALList',
		'customer/porky/zcustomermaterial/test/integration/pages/ZCSD_CUSTOMERMATERIALObjectPage'
    ],
    function(JourneyRunner, opaJourney, ZCSD_CUSTOMERMATERIALList, ZCSD_CUSTOMERMATERIALObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('customer/porky/zcustomermaterial') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheZCSD_CUSTOMERMATERIALList: ZCSD_CUSTOMERMATERIALList,
					onTheZCSD_CUSTOMERMATERIALObjectPage: ZCSD_CUSTOMERMATERIALObjectPage
                }
            },
            opaJourney.run
        );
    }
);