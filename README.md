sample-project
==============

Instructions:

In order to simulate cross domain requests I opted to place the entries in /etc/hosts

127.0.0.1       api.fairfax.com.au
127.0.0.1       mobile.fairfax.com.au

The api.fairfax.com.au project is a self contained NodeJS mockup that when run via node as follows:

node app.js

will run on port 4000

and has specific routes to handle

http://api.fairfax.com.au:4000/1.0/articles?callback=callbackname
http://api.fairfax.com.au:4000/1.0/article/{id}?callback=callbackname

where {id} is an integer corresponding to the article e.g. 1, 2, 3 etc

The mobile.fairfax.com.au project is a Sencha Touch Application that consumes the REST JSONP Service outlined above.

It uses a staic file server (simple NodeJS file server) and can be run by

node static_server.js

by default this will run on port 8888

The mobile app uses an MVC pattern with Models used to represent Headlines and Articles and a controller class that handles
the creating of an Article upon the seletion of an article headline.

Unfortunately time didn't permit Facebook or Google+ or Twitter sharing.


This test has been written to satisify the brief below:

Fairfax Digital
Coding Test for Mobile Web Developer (JavaScript)
There is a specification of a server side API:
REQUEST - HTTP GET:
http://api.fairfax.com.au/1.0/articles/
RESPONSE - JSON/JSONP:
[
{ "id": 1,
"header": "article 1",
"description": "description of article 1",
"thumbnailHref": "http://static.ffx.com.au/article1_thumbnail_97x66.jpg" }
{ "id": 2,
"header": "article 2",
"description": "description of article 2",
"thumbnailHref": "http://static.ffx.com.au/article2_thumbnail_97x66.jpg" }
... ]
REQUEST - HTTP GET:
http://api.fairfax.com.au/1.0/article/1/
RESPONSE - JSON/JSONP:
{
"id": "1",
"header": "article 1",
"description": "description for article 1",
"heroImage": "http://static.ffx.com.au/article1_hero_292x180.jpg"
"body": "<p>content of article</p><p>can contain <em>HTML</em> tags...</p>"
}
The API hasn't been implemented yet so first of all you need to mock it up. You can use any way that feels right for you. For example, it might be a simple Node.js application or just a set of static files in a web server's directory.
Next, build a one page web application that:
presents a list of articles to the user on its home view;
when the user click/tap on an article, presents the article's content on the article view; allows the user navigate back from the article view to the home view;
