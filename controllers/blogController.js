const fs = require('fs');
const data = fs.readFileSync('model/blog.json');

let post = [];

if (data.length > 0) {
  post = JSON.parse(data);
}

function handleFiles(fileinput) {
  let file = fileinput;
  file.mv('public/uploads/' + file.name);
  return 'uploads/' + file.name;
}

const getAllPosts = (req, res) => {
  res.status(200).json({"success": true, "data": post});
  //res.render('blog', { title: 'Mein Blog', blog: post});
  //res.send(blog);
}

const createPost = (req, res) => {
  let filename = '';

  if (req.files) {
    filename = handleFiles(req.files.file);
  }

  const { title, benutzername, date, text } = req.body;
  const newPost = {
    id: post.length + 1,
    title,
    benutzername,
    date,
    text,
    file: filename
  };
  post.push(newPost);
  fs.writeFileSync('model/blog.json', JSON.stringify(post, null, 2));
  res.status(201).json({"success": true, "data": post}); 
  //res.send('Neuer Blogpost erstellt');
}

const getPost = (req, res) => {
  const postId = req.params.id;
  if (postId < post.length) {
    res.render ('viewpost', { title: post.title, post})
    //res.send(post[postId]);
  } else {
    res.send("Post existiert nicht");
  }
}

module.exports = {
  getAllPosts,
  createPost,
  getPost
};
