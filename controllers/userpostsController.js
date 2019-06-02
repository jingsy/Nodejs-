var mongoose = require('mongoose');
var Post = mongoose.model('userposts');
var User = require('../models/user');


//this is a function to create post by logged in user
var createPost = function(req,res){
    User.findById(req.session.userId)
        .exec(function (error, user) {
    var post = new Post({
        "title":req.body.title,
        "name":user.username,
        "postcontent":req.body.postcontent,
    });

        post.save(function(err,users){
            if(!err){
                Post.find((err, users) => {
                    if (err) {
                        res.sendStatus(500);
                    } else {
                        res.redirect('/loggedin')
                    }
                });
            }else{
                res.sendStatus(400);
            }
        });
        });
};

// enter create post page
var showCreatePostPage =function(req, res)  {
    res.render('newpost');
}

module.exports.createPost = createPost;
module.exports.showCreatePostPage = showCreatePostPage;
