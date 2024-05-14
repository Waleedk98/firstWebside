const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');

router.route('/')
  .get(blogController.getAllPosts)
  .post(blogController.createPost);

// Route: GET /blog/newPost
router.get('/newPost', (req, res) => {
  let formSubmits = { action: "/blog", method: "post", enctype: "multipart/form-data", submitValue: "send" };
  let formInputs = [
    { label: "Titel", type: "text", name: "title", required: true },
    { label: "Name", type: "text", name: "name", required: true },
    { label: "Date", type: "date", name: "date", required: true },
    { label: "Text", type: "textarea", name: "text", required: true, rows: "4", cols: "50" },
    { label: "Datei", type: "file", name: "file", required: false },
  ];
  res.render('blogpost', { title: 'Mein neuer Post', formSubmits: formSubmits, formInputs: formInputs });


});

// Route: GET /blog/:id
router.get('/:id', blogController.getPost);

module.exports = router;
