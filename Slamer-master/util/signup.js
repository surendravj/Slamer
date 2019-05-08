const x = require(__dirname + "/Storage");
const y = require(__dirname + "/variables");
warn = ''
exports.signup = (req, res) => {
    y.array=[]
    y.array.length=0;
    res.render("signup", {
        warning: warn
    });
    warn = ""
}
exports.signup_post = (req, res) => {
    y.array=[]
    y.array.length=0;
    x.data.findOne({
        id: req.body.id
    }, (err, data) => {
        if (!err) {
            if (!data) {
                var register = new x.data({
                    admin: req.body.admin,
                    book: req.body.bookname,
                    password: req.body.password,
                    id: req.body.id
                })
                register.save().then((data) => {
                    if (data) {
                        y.username = data.admin
                        y.id = data.id
                        y.un_id = data._id
                        res.redirect("signin/signin_success");
                    }
                })
            } else {
                warn = "Id Already Exits"
                res.redirect("/signup")
            }
        }
    })
}