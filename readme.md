Request Payload for this server

{
    "version": "v1-0",
    "service": "some-service",
    "server": "dev"
}

Schema for Elastic search API Endpoints index

POST localhost:9200/replace with index name/_doc

{
    "settings":{
        "number_of_shards": 2
    },
    "mappings":{
        "_doc":{
       "properties": {
           "title": {"type": "text"},
           "route": {"type": "text"},
           "description": {"type": "text"},
           "httpmethod": {"type": "text", "enabled": false},
           "authstrategy": {"type":"text", "enabled": false},
           "errors": {"type": "object"},
           "requestschema": {"type":"object", "enabled": false},
           "version": {"type": "text"}
       }
    }
}
}

Schema for Elastic search AMP index

POST localhost:9200/replace with index name/_doc

{
    "settings":{
        "number_of_shards": 2
    },
    "mappings":{
        "_doc":{
       "properties": {
           "title": {"type": "text"},
           "description": {"type": "text"},
           "queue": {"type": "text"},
           "exchange": {"type":"text"},
           "message": {"type":"text"},
           "version": {"type": "text"}
       }
    }
}
}

POST localhost:9200/replace with index name/_search

{
  "query": {
    "query_string": {
      "query": "provide tag version here"
    }
  }
}