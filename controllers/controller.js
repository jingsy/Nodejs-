var mongoose = require('mongoose');
var Post = mongoose.model('userposts');
var User = require('../models/user');


//show homepage after logged in
var LoggedinHomePage = function(req,res){
    var postInx = req.params.id;
    User.findById(postInx,function(err,users){
        Post.find((err, users) => {
            if (err) {
                res.sendStatus(500);
            } else {
                // res.send(users);
                res.render('indexloggedin', {
                    addedpost: users,
                    userlist : users,
                });
            }
        });
    });
}

// show home page
var homePage = function(req,res){
    Post.find((err, users) => {
        if (err) {
            res.sendStatus(500);
        } else {
            // res.send(users);
            res.render('index', {
                addedpost: users,
            });
        }
    });
}


// show home page
var showIndex = function (req,res) {
        Post.find((err, users) => {
            if (err) {
                res.sendStatus(500);
            } else {
                res.render('index', {
                    addedpost: users,
                });
            }
        });
}

// find all user posts
var findAllPosts = function(req,res){
    Post.find(function(err,posts){
        if(!err){
            res.send(posts);
        }else{
            res.sendStatus(404);
        }
    });
};

//render askexpert page
var askExpert = function (req,res) {
    res.render('askexpert');

}

//render search result page
var search= function (req,res) {
    res.render('searchpage');
}

//render postfeedback page
var postFeedback= function (req,res) {
    res.render('postfeedback');
}


module.exports.postFeedback = postFeedback;
module.exports.LoggedinHomePage = LoggedinHomePage;
module.exports.homePage = homePage;
module.exports.findAllPosts = findAllPosts;
module.exports.showIndex = showIndex;
module.exports.askExpert = askExpert;
module.exports.search = search;
