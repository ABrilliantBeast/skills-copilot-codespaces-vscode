// Create web server
// Create a new express app
const express = require('express');
const app = express();
// Create a new Router
const commentsRouter = express.Router();
// Create a new array to store comments
const comments = [];
// Add a new route to the router
commentsRouter.get('/', (req, res) => {
  res.json(comments);
});
// Add a new route to the router
commentsRouter.post('/', (req, res) => {
  comments.push(req.body);
  res.json(req.body);
});
// Add the router to the app
app.use('/comments', commentsRouter);
// Start the server
app.listen(3000, () => {
  console.log('Server running');
});
