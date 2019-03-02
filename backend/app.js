const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})

app.use("/api/posts", (req, res, next) => {
  const posts = [
    {
      id: "sdohdifugsd",
      title: "First post",
      content: "This is a content of a post"
    },
    {
      id: "fdsgfhhtey",
      title: "Second post",
      content: "This is a content of a post"
    }
  ]
  res.status(200).json({
    message:"Posts were fetched succesfully",
    posts: posts
  })
})
module.exports = app;
