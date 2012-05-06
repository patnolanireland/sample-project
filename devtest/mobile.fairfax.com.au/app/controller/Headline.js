Ext.define('DevTest.controller.Headline', {
    extend: 'Ext.app.Controller',

    config: {

        refs: {
            headlines: 'headlines',

            articleList: '#articlelist'
        },

        control: {

            articleList: {

                select: 'loadArticle'
            }
        }
    },

    loadArticle: function(list, record) {

        var proxyUrl = 'http://api.fairfax.com.au:4000/1.0/article/' + record.get('id');

        var store = Ext.create('Ext.data.Store', {
            model: 'DevTest.model.Article',
            proxy: {
                type: 'jsonp',
                url: proxyUrl
            }
        });

        store.on('load', function(store, records, success, opts)
        {
            this.getHeadlines().push({

                xtype: 'panel',

                title: record.get('header'),

                html: records[0].get('body')
            });
        }, this)

        store.load();
    }

});