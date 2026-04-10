sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'customer.porky.zknmtv4',
            componentId: 'YCSD_CUSTOMERMATERIALObjectPage',
            contextPath: '/YCSD_CUSTOMERMATERIAL'
        },
        CustomPageDefinitions
    );
});