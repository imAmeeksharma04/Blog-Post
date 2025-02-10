import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express();
const port = process.env.PORT || 3000;
const posts = []; // to store the posts

app.use(bodyParser.urlencoded({ extended: true }));
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "public")));


app.set("view engine", "ejs"); // setting the view engine to ejs

//Home route
app.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

//About route
app.get("/About", (req, res) => {
    res.render("About");
});

//Contact route
app.get("/Contact", (req, res) => {
    res.render("Contact");
});

//Contact Info parsed
app.post("/Contact", (req, res) => {
    const { name, email, message } = req.body;
    console.log(`📩 New Contact Message from ${name} (${email}): ${message}`);
    res.send("Thank you for reaching out! We will get back to you soon.");
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

//Delete Blog Post
app.post("/delete/:id", (req, res) => {
    const postIndex = req.params.id;

    if (postIndex >= 0 && postIndex < posts.length) {
        posts.splice(postIndex, 1); // remove the post from the posts array
    }

    res.redirect("/");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}`);

});
