const data = require(__dirname + "/Storage.js");
const y = require(__dirname + "/variables.js");
exports.addpost = (req, res) => {
    var today = new Date();
    var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date + ' ' + time;
    currentdate = dateTime.toString()
    const object = new data.posts({
        name: req.body.post_name,
        date: currentdate,
        post: req.body.post_content,
        likes: 0,
        like: false
    })
    if (req.body.post_name !== "") {
        object.save().then((data) => {
            y.postarray = []
            y.postarray.length = 0;
            res.redirect("/posts");
        })
    } else {
        res.redirect("/");
    }
}


exports.posts = (req, res) => {
    data.posts.find({}, {
        name: 1,
        date: 1,
        post: 1,
        likes: 1
    }, {
        new: true
    }, (err, data) => {
        if (!err) {
            if (y.postarray.length == 0) {
                for (var i = 0; i < data.length; i++) {
                    y.postarray.push(data[i]);
                }
            }
            y.postarray.reverse();
        }
        if (y.username != "") {
            res.render("posts", {
                name: y.username,
                unid: y.un_id,
                len: y.length,
                id: y.id,
                bookname: y.book,
                post_data: y.postarray,
                sec: y.sec
            }); // console.log(postarray);
        } else {
            res.redirect("/");
        }
    })
}

exports.likes = (req, res) => {
    data.posts.findOneAndUpdate({
        _id: req.params.id
    }, {
        $inc: {
            likes: 1
        }
    }, {
        new: true
    }, () => {
        y.postarray = []
        y.postarray.length = 0;
        res.redirect("/posts");
    })
}

exports.contact = (req, res) => {
    res.render("contact", {
        name: y.username,
        unid: y.un_id,
        len: y.length,
        id: y.id,
        bookname: y.book,
        post_data: y.postarray,
        sec: y.sec
    });
}