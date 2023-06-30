const express = require("express");
const axios = require("axios");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/getapidocuments", (request, response) => {
  const requestQuery = {
    query: {
      query_string: {
        query: request.body.version,
      },
    },
  };
  axios({
    method: "post",
    url: `http://localhost:9200/replace the api index here/_search`,
    data: requestQuery,
    headers: { "content-type": "application/json" },
  })
    .then((res) => {
      response.send(res.data.hits.hits);
    })
    .catch((e) => {
      throw e;
    });
});

app.post("/getampdocuments", (request, response) => {
    const requestQuery = {
      query: {
        query_string: {
          query: request.body.version,
        },
      },
    };
    axios({
      method: "post",
      url: `http://localhost:9200/replace the amp index here/_search`,
      data: requestQuery,
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        response.send(res.data.hits.hits);
      })
      .catch((e) => {
        throw e;
      });
  });

app.listen("8080", () => {
  console.log("server listening on 8080");
});
