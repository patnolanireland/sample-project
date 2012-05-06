Ext.define('DevTest.store.Articles', {

    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.JsonP'],

    config: {

        model: 'DevTest.model.Article',

        autoLoad: false,

        proxy: {

            type: 'jsonp',

            url: 'http://api.fairfax.com.au:4000/1.0/article/{id}',

            listeners: {

                exception: function(proxy, resp, op, opts)
                {
                    console.log('Exception while trying to access' + proxy.url);
                }
            }
        }
    }
});