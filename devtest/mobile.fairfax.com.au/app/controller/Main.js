Ext.define('DevTest.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'headlines'
        },
        control: {
            'articlelist': {
                disclose: 'loadArticle'
            }
        }
    },

    loadArticle: function(list, record) {
        this.getMain().push({
            xtype: 'panel',
            title: record.fullName(),
            html: 'new article to read'
        })
    }

});