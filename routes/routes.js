var express = require('express');
var router = express.Router();
var controller = require('../controllers/controller.js');
var userController = require('../controllers/userController.js');
var userpostsController = require('../controllers/userpostsController.js');
var commentController = require('../controllers/commentController.js');

//GET route show login page
router.get('/login',userController.userLoginPage);

//GET route show register page
router.get('/register', userController.userRegisterPage);

//POST route register page
router.post('/register', userController.passwordCheck);

//POST route for user login
router.post('/login',userController.passwordCheck);

//GET route for checking my profile
router.get('/loggedin/profile',userController.getProfilePage);

//POST route for editing profile
router.post('/loggedin/profile',userController.editProfilePage);

//GET route for logout logout
router.get('/logout', userController.userLogOut);

//GET route for get specific user post page
router.get('/post/:id',userController.getUserPostById);

//POST route for get specific user post page
router.post('/post/:id/createcomment',commentController.createComment);

//GET route for post feedback page
router.get('/post/postfeedback',controller.postFeedback);

//GET route for home page after logged in
router.get('/loggedin',controller.LoggedinHomePage);

//GET route for home page
router.get('/',controller.homePage);

//GET route for show create post page
router.get('/loggedin/createpost', userpostsController.showCreatePostPage);

//POST route for Create new post
router.post('/loggedin/createpost',userpostsController.createPost);

//GET route for show all posts in home page
router.get('/showpost',controller.showIndex);

//GET route for show ask for experts page
router.get('/askexpert',controller.askExpert);

//GET route for show searchresult
router.get('/search',controller.search);

module.exports = router; 



