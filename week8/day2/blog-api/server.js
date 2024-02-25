const express = require("express");
const app = express();
app.use(express.json());

let posts = [{ id: 1, title: "whatever" }];
[{id:2, title:Holly}];
app.listen(3001, () => {
  console.log("working!!!!!!!!!!!!!!!!!!!");
});



app.get('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    res.json(post);
});
app.post('/posts', (req, res) => {
    const newPost = { id: posts.length + 1, title: req.body.title, content: req.body.content };
    posts.push(newPost);
    res.status(201).json(newPost);
});

app.put('/posts/:id', (req, res) => {
    const post = posts.find(p => p.id === parseInt(req.params.id));
    if (!post) return res.status(404).send('Post not found');
    post.title = req.body.title;
    post.content = req.body.content;
    res.json(post);
});

app.delete('/posts/:id', (req, res) => {
    const postIndex = posts.findIndex(p => p.id === parseInt(req.params.id));
    if (postIndex === -1) return res.status(404).send )
}

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

