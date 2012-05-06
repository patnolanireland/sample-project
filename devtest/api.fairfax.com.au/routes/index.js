
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};


/*
 * GET an Article.
 */

exports.article = function(req, res){
    console.log('Your requested article' + req.params.id);

    var article = ArticleContent[parseInt(req.params.id) - 1];

    //Assume a JSONP Proxy Request
    if(req.query)
    {
        for(var param in req.query)
        {
            console.log(param + '=' + req.query[param]);

            if(param.indexOf('callback') != -1)
            {
                var cb = req.query[param];

                res.writeHead(200, {
                    'Content-Type' : 'application/javascript'
                });

                res.write(cb + "(" + JSON.stringify(article) + ")");

                return res.end();
            }
        }
    }
    else
    {
        return res.json(JSON.stringify(article));
    }
};

/*
 * GET a list of Articles.
 */
exports.articles = function(req, res){
    console.log('Your requested a list of articles');

    //Assume a JSONP Proxy Request
    if(req.query)
    {
        for(var param in req.query)
        {
            console.log(param + '=' + req.query[param]);

            if(param.indexOf('callback') != -1)
            {
                var cb = req.query[param];

                res.writeHead(200, {
                    'Content-Type' : 'application/javascript'
                });

                res.write(cb + "(" + JSON.stringify(Articles) + ")");

                return res.end();
            }
        }
    }
    else
    {
        res.json(JSON.stringify(Articles));
    }
};

exports.user = function(req, res) {
    console.log('You requested ' + req.params.id);
    res.send('Hello ' + req.params.id);
};