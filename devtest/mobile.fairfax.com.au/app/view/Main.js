/* This class is deprecated and was used initially from the generated
** Sencha Touch Stub.  Loading the List into the TabPanel was proving
** problematic so it was left in favour of the Headlines View
**
 */

Ext.define("DevTest.view.Main", {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    requires: [
        'Ext.TitleBar',
        'DevTest.view.Headlines'
    ],

    config: {

        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Welcome',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: [{
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Fairfax JavaScript Developer Test'
                }, {
                    xclass: 'DevTest.view.Headlines'
                }]
            }
        ]
    }
});
