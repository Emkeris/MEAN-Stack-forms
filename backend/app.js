const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers',
  'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
})


app.post((req, res, next) => {
  const post = req.body;
  console.log(post);
  res.status(201).json({
    message: "Post added successfully"
  });
});


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
    message:"Posts were fetched successfully",
    posts: posts
  })
})
module.exports = app;
