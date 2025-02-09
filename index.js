import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const posts = []; // to store the posts

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs"); // setting the view engine to ejs

app.get("/", (req, res) => {
    res.render("index", { posts: posts });
});

app.get("/Create_Blog", (req, res) => {
    res.render("Create_Blog.ejs");
});

app.post("/submit", (req, res) => {
    // console.log(req.body);
    // const heading = req.body["heading"];
    // const content = req.body["content"];
    const { heading, content } = req.body;  // destructuring the heading and content from the request body
    posts.push({ heading, content }); // adding the post to the posts array

    res.redirect("/");
});


app.listen(port, () => {
    console.log(`Server is running at port ${port}`);

});
