const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

var url = "mongodb+srv://surendra:password@cluster0-m7gbl.mongodb.net/data?retryWrites=true"

mongoose.connect(url, {
    useNewUrlParser: true
}).catch((error) => {
    console.log(error);
});

const schema = new mongoose.Schema({
    admin: String,
    book: String,
    password: String,
    id: Number,
    myslams: [{
        a: String,
        b: String,
        c: String,
        d: String,
        e: String,
        f: String,
        g: String,
        h: String,
        i: String,
        j: String
    }]
});

const postschema = new mongoose.Schema({
    name: String,
    date: String,
    post: String,
    likes: Number,
    like:String
});

exports.data = mongoose.model("slam", schema);

exports.posts = mongoose.model("posts", postschema);
