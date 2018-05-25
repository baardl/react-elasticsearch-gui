var express = require('express');
var elasticsearch = require('elasticsearch');
var app = express();
var fs = require("fs"), json;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

client = new elasticsearch.Client({
                                    host: 'localhost:9200',
                                    log: 'trace',
                                  });

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('/query', function (req, res) {
  var query = req.query.q;
  client.search({
                  index: 'programdatatv',
                  // type: 'tv',
                  body: {
                    query: {
                      match: {
                        title: query
                      }
                    }
                  }
                }).then(function (body) {
    var hits = body.hits.hits;
    res.json(hits);
  }, function (error) {
    console.trace(error.message);
    res.json(error);
  });
});

app.get('/query/boost', function (req, res) {
  var query = req.query.q;
  var category = req.query.category;
  client.search({
                  index: 'programdatatv',
                  // type: 'tv',
                  body: {
                    "query": {
                      "bool": {
                        "should": [{
                          "match": {
                            "categories": {
                              "query": category,
                              "boost": "2"
                            }
                          }
                        }, {
                          "match": {
                            "title": {
                              "query": query
                            }
                          }
                        }]
                      }
                    }
                  }
                }).then(function (body) {
    var hits = body.hits.hits;
    res.json(hits);
  }, function (error) {
    console.trace(error.message);
    res.json(error);
  });
});

app.get('/query/personalized', function (req, res) {
  var query = req.query.q;
  var user_id = req.query.user_id;
  client.search({index: 'programdatatv',
                  // type: 'tv',
                  body: {
                    "query": {
                      "bool": {
                        "must": {
                          "terms": {
                            "categories": {
                              "index": "bruksdata",
                              "type": "_doc",
                              "id": user_id,
                              "path": "interests.category",
                              "boost":2
                            }
                          }
                        },
                        "should": [{
                          "match": {
                            "title": {
                              "query": query,
                              "boost": 1
                            }
                          }
                        },
                          {
                            "match": {
                              "titledescription": {
                                "query": query,
                                "boost": 1
                              }
                            }
                          }]
                      }
                    }
                  }}).then(function (body) {
    var hits = body.hits.hits;
    res.json(hits);
  }, function (error) {
    console.trace(error.message);
    res.json(error);
  });
});

const port = process.env.PORT || 9201;
app.listen(port, () => console.log(`Listening on port ${port}`));
