// imports of modules from external files
const express = require("express");
const bodyparser = require("body-parser");
const signup = require(__dirname + "/util/signup");
const signin = require(__dirname + "/util/signin");
const add = require(__dirname + "/util/addslam");
const post = require(__dirname + "/util/posts");
const y = require(__dirname + "/util/variables");
const app = express();


// App routing systems 
app.use(bodyparser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + "/public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    y.username = ""
    y.id = ""
    y.warn = ""
    y.un_id = ""
    y.secreat = ""
    y.length = ""
    y.book = ""
    y.postarray = []
    res.render("home");
})
app.get("/signup", signup.signup);

app.get("/signin", signin.signin);

app.get("/add_slam", add.addslam);

app.post("/add_slam", add.addslam_post);

app.get("/add_slam/success", add.success);

app.get("/myslams/:title", add.myslams);

app.get("/myslams-view/:id", add.invidualslams);

app.get("/posts", post.posts);

app.post("/signup", signup.signup_post);

app.post("/signin", signin.signin_post);

app.post("/add_slam_insert", add.insertslam);

app.get("/signin/signin_success", signin.signin_success)

app.post("/add_post", post.addpost);

app.get("/likes/:id", post.likes)

app.get("/contact_developer", post.contact);

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => {
    console.log("connected!");
})