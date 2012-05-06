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
                    xtype: 'panel',
                    html: 'hello'

                }, {
                    xclass: 'DevTest.view.Headlines'
                }]
            }
        ]
    }
});
