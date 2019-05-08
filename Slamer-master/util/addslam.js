const data = require(__dirname + "/Storage.js");
const y = require(__dirname + "/variables.js");


y.warn = ""
var final = []
var demo = []
exports.addslam = (req, res) => {
    res.render("add.ejs", {
        warning: y.warn
    })
    y.warn = ""
}

exports.addslam_post = (req, res) => {
    data.data.findOne({
        id: req.body.id
    }, ((err, data) => {
        if (!err) {
            if (data) {
                y.username = data.admin
                y.id = data.id,
                y.un_id = data._id
                res.redirect("/add_slam/success");
            } else {
                y.warn = "No Book Found With This Id"
                res.redirect("/add_slam");
            }
        }
    }))
}

exports.success = (req, res) => {
    res.render("addslam_success", {
        name: y.username,
        id: y.id,
        unid: y.un_id,
        len: y.length,
        sec: y.sec
    });
}

exports.myslams = (req, res) => {
    final = []
    final.length = 0;
    data.data.findOne({
        id: y.id
    }, (err, data) => {

        if (err) console.log(err);
        else {
            if (data) {
                if (y.array.length == 0) {
                    final.push(data)
                    final.forEach(element => {
                        element.myslams.map((child) => {
                            y.array.push(child)
                        })
                    });
                }
                y.length = y.array.length
                res.render("myslams", {
                    id: y.id,
                    arraydata: y.array,
                    name: y.username,
                    unid: y.un_id,
                    len: y.length,
                    sec: y.sec
                });

            }
        }
    });

}
exports.invidualslams = (req, res) => {
    demo = []
    demo.length = 0;
    for (var i = 0; i < y.array.length; i++) {
        if (y.array[i]._id == req.params.id) {
            demo.push(y.array[i]);
        }
    }
    res.render("slam_view", {
        id: y.id,
        arraydata: y.array,
        name: y.username,
        unid: y.un_id,
        data: demo,
        len: y.length,
        sec: y.sec
    })
}

exports.insertslam = (req, res) => {
    slamdata = {
        a: req.body.question1,
        b: req.body.question2,
        c: req.body.question3,
        d: req.body.question4,
        e: req.body.question5,
        f: req.body.question6,
        g: req.body.question7,
        h: req.body.question8,
        i: req.body.question9,
        j: req.body.question10
    }
    data.data.findOneAndUpdate({
        id: y.id
    }, {
        $push: {
            myslams: slamdata
        }
    }, {
        new: true
    }, (err, data) => {
        if (!err) {
            res.redirect("/");
        }
    })
}