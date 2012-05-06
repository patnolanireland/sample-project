Ext.define('DevTest.view.Headlines', {

    extend: 'Ext.NavigationView',

    xtype: 'headlines',

    requires: 'DevTest.view.ArticleList',

    config: {

        fullscreen: true,

        items: [{
            id: 'articlelist',

            title: 'Fairfax Developer Test',

            xtype: 'articlelist'
        }]
    }
});