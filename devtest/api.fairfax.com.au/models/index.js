/**
 * Created with JetBrains PhpStorm.
 * User: patnolanireland
 * Date: 5/05/12
 * Time: 9:36 AM
 * To change this template use File | Settings | File Templates.
 */
/* Model class that defines an article.  This
** Article represents an Article header, the
** body content of which is stored separately
* in the ArticleBody Object Hash.
**
 */
Article = function(config)
{
    for(var p in config)
    {
        this[p] = config[p];
    }
};

Article.prototype = {
    id: 0,
    header: 'article {id}',
    description: 'description of article {id}',
    thumbnailHref: 'http://static.ffx.com.au/article{id}_thumbnail_97x66.jpg'
};

/* This array simulates a collection of Articles as served by the route
** /articles
**
 */
Articles = [
    new Article({
        id: 1,
        header: Article.prototype.header.replace("{id}", 1),
        description: Article.prototype.description.replace("{id}", 1),
        thumbnailHref: Article.prototype.thumbnailHref.replace("{id}", 1)
    }),
    new Article({
        id: 2,
        header: Article.prototype.header.replace("{id}", 2),
        description: Article.prototype.description.replace("{id}", 2),
        thumbnailHref: Article.prototype.thumbnailHref.replace("{id}", 2)
    }),
    new Article({
        id: 3,
        header: Article.prototype.header.replace("{id}", 3),
        description: Article.prototype.description.replace("{id}", 3),
        thumbnailHref: Article.prototype.thumbnailHref.replace("{id}", 3)
    }),
    new Article({
        id: 4,
        header: Article.prototype.header.replace("{id}", 4),
        description: Article.prototype.description.replace("{id}", 4),
        thumbnailHref: Article.prototype.thumbnailHref.replace("{id}", 4)
    }),
    new Article({
        id: 5,
        header: Article.prototype.header.replace("{id}", 5),
        description: Article.prototype.description.replace("{id}", 5),
        thumbnailHref: Article.prototype.thumbnailHref.replace("{id}", 5)
    })
];

/* The ArticleContent Object contains body content for the Article keyed by
** an integer value representing the article id.
**
 */
ArticleContent = [
    {
        id: 1,
        body: '<p>Lorem ipsum dolor content contains <em>HTML</em> <ul><li>Banana</li><li>Apple</li></ul> sit amet, consectetuer adipiscing elit.</p><p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p> ',
        heroImg: 'http://static.ffx.com.au/article1_hero_292x180.jpg'
    },
    {
        id: 2,
        body: '<p>Lorem ipsum dolor content contains <em>HTML</em> <ul><li>Grapefruit</li><li>Orange</li></ul>sit amet, consectetuer adipiscing elit.</p><p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p> ',
        heroImg: 'http://static.ffx.com.au/article2_villan_292x180.jpg'
    },
    {
        id: 3,
        body: '<p>Lorem ipsum dolor content contains <em>HTML</em> <ul><li>Strawberry</li><li>Pear</li></ul> sit amet, consectetuer adipiscing elit.</p><p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p> ',
        heroImg: 'http://static.ffx.com.au/article3_boat_292x180.jpg'
    },
    {
        id: 4,
        body: '<p>Lorem ipsum dolor content contains <em>HTML</em> <ul><li>Rum</li><li>Gin</li></ul>sit amet, consectetuer adipiscing elit.</p><p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p> ',
        heroImg: 'http://static.ffx.com.au/article4_hero_292x180.jpg'
    },
    {
        id: 5,
        body: '<p>Lorem ipsum dolor content contains <em>HTML</em>sit amet, consectetuer adipiscing elit.</p><p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p> ',
        heroImg: 'http://static.ffx.com.au/article5_hero_292x180.jpg'
    }
]