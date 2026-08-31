const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require('uuid');
const methodOverride = require("method-override");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Dummy Data Database
let posts = [
    {   
        id: uuidv4(),
        username: "apnacollege",
        content: "I love coding!",
    },
    {
        id: uuidv4(),
        username: "shradhakhapra",
        content: "Hard work is important to achieve success",
    },
    {   
        id: uuidv4(),
        username: "rahulkumar",
        content: "I got selected for my 1st internship!",
    },
];

// INDEX ROUTE - Get all posts
app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
});

// NEW ROUTE - Serve the form
app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

// CREATE ROUTE - Add new post
app.post("/posts", (req, res) => {
    let { username, content } = req.body;
    let newId = uuidv4(); // 1. Nayi unique ID generate ki
    
    // 2. Variable name correct karke push kiya (id: newId)
    posts.push({ id: newId, username, content }); 
    
    res.redirect("/posts");
});

// SHOW ROUTE - Get details of a specific post
app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs" , {post});
})


app.delete("/posts/:id", (req, res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
   res.redirect("/posts");
})
// Server Listen
app.listen(port, () => {
    console.log("listening to port : 8080");
});