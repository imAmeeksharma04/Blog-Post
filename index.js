import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = []; // to store the posts

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs"); // setting the view engine to ejs

//Home route
app.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

//Create Blog post
app.get("/Create_Blog", (req, res) => {
    res.render("Create_Blog");
});

//submit new blog post
app.post("/submit", (req, res) => {
    // console.log(req.body);
    // const heading = req.body["heading"];
    // const content = req.body["content"];
    const { heading, content } = req.body;  // destructuring the heading and content from the request body
    posts.push({ heading, content }); // adding the post to the posts array

    res.redirect("/");
});

//Edit Blog Page
app.get("/edit/:id", (req, res) => {
    const postIndex = req.params.id;
    const post = posts[postIndex];

    if (!post) {
        return res.status(404).send("Post not found"); // if post not found return 404
    }
    res.render("Edit_Blog.ejs", { post, postIndex });
})

// Update Blog Post
app.post("/update/:id", (req, res) => {
    const postIndex = req.params.id;
    const { heading, content } = req.body;

    if (posts[postIndex]) {
        posts[postIndex] = { heading, content };
    }

    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);

});
