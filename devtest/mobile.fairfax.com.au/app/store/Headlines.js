Ext.define('DevTest.store.Headlines', {

    extend: 'Ext.data.Store',

    requires: ['Ext.data.proxy.JsonP'],

    config: {

        model: 'DevTest.model.Headline',

        autoLoad: true,

        proxy: {

            type: 'jsonp',

            url: 'http://api.fairfax.com.au:4000/1.0/articles',

            listeners: {

                exception: function(proxy, resp, op, opts)
                {
                    console.log('Exception while trying to access http://api.fairfax.com.au:4000/1.0/articles');
                }
            }
        }
    }
});