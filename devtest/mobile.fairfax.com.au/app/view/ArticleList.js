Ext.define('DevTest.view.ArticleList', {

    extend: 'Ext.List',

    xtype: 'articlelist',

    requires: 'DevTest.store.Headlines',

    config: {

        itemTpl: '<img src="{thumbnailHref}" alt="{header}" width="97" height="66" class="headline-img"/> <h2>{header}</h2><p>{description}</p>',

        itemCls: 'headline-item',

        store: 'Headlines'
    }
});