'use strict';

var aws     = require('aws-sdk');
var s3      = new aws.S3();
var content = require('./mysqlDatabase.js').models.content;

module.exports = {

  getContent: function(req, res) {
    content.findOne({
      where: {
        id: 1
      }
    }).then(function(result) {
      if (result.dataValues.picture === 'empty') {
        res.send({picture: '/images/empty.jpg', caption: 'change this picture (and this text)'});
      } else {
        res.send(JSON.stringify(result));
      }
    });
  },

  updateContent: function(req, res) {

    // http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
    var s3Params = {
      Bucket: process.env.S3_BUCKET,
      ContentType: 'image',
      ACL: 'public-read',
      Key: randomId(10),
      Body: req.file.buffer
    };

    s3.putObject(s3Params, function(err, data) {
      if (err) {
        res.status(500).send(err);
      } else {
        content.update({
          picture: '//s3-eu-west-1.amazonaws.com/' + process.env.S3_BUCKET + '/' + s3Params.Key,
          caption: req.body.caption
        }, {
          where: {
            id: 1
          }
        }).then(function(data) {
          res.redirect('/');
        });
      }
    });

    function randomId(length) {
      var id = '';

      for (var i = 0; i < length; i++) {
        id += String.fromCharCode(97 + Math.floor(Math.random() * 26));
      }

      return id;
    }
  }

};