const x = require(__dirname + "/Storage");
const y = require(__dirname + "/variables");
const wish = require(__dirname + "/features")
var warn = ""
exports.signin = (req, res) => {
    res.render("signin", {
        warning: warn
    });
    warn = ""
    lengtharray = []
    y.array.length = 0;
    y.array = []
}
exports.signin_post = (req, res) => {
    k = "/signin/"
    m = "signin_success"
    url = k + m
    x.data.findOne({
        id: req.body.id,
        password: req.body.password
    }, (err, data) => {
        if (!err) {
            if (data) {
                y.array = [];
                y.array.length = 0;
                y.username = data.admin;
                y.book = data.book;
                y.id = data.id
                y.un_id = data._id
                res.redirect(url);
            } else {
                warn = "Invalid Id Or Password"
                res.redirect("/signin");
            }
        }
    })
}

exports.signin_success = (req, res) => {
    res.render("signin_success", {
        name: y.username,
        wishes: wish.wisht(),
        id: y.id,
        unid: y.un_id,
        bookname: y.book,
        len: y.length,
        sec: y.sec
    });
}