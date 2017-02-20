var express = require('express');
var router = express.Router();
const rndString = require('randomstring');

/* GET home page. */
router.post('/savePost', function(req, res, next) {
  var post_name = req.body.post_name;
  var post_title = req.body.post_title;
  var post_time = req.body.post_time;
  var post_context = req.body.post_context;

  if(post_title === undefined || post_context ===  undefined  || post_title === "" || post_context === ""){
    return res.status(400).send("param missing");
  }

  var new_post = new Posts({
    post_name: post_name,
    post_title: post_title,
    post_time: new Date(),
    post_context: post_context,
    token: rndString.generate()
  });

  new_post.save(function(err, result){
    if(err) return res.status(500).send("ERR : 500");
    return res.status(200).json({post_name: timeline.post_name, post_title: timeline.post_title, post_time: timeline.post_time, post_context: timeline.post_context, token: timeline.token});
  });
})

router.post('/loadPost', function(req, res, next) {
  Posts.find().sort({post_time: -1}).exec(function (err, result) {
            if(err){
                throw err;
            }
            var temp_result = { "responseData" : result };
            res.send(200, temp_result);
        });
})

module.exports = router;
