'use strict';

var aws     = require('aws-sdk');
var s3      = new aws.S3();
var content = require('./mysqlDatabase.js').models.content;

function addId(length) {
  var id = '';

  for (var i = 0; i < length; i++) {
    id += String.fromCharCode(97 + Math.floor(Math.random() * 26));
  }

  return id;
}



module.exports = {

  getContent: function(req, res) {
    content.findOne({
      where: {
        id: 1
      }
    }).then(function(result) {
      if (result) {
        res.send(JSON.stringify(result));
      } else {
        res.send({picture: '/images/empty.jpg', caption: 'change this picture (and this text)'});
      }
    });
  },

  updateContent: function(req, res) {
    var s3Params = {
      Bucket: process.env.S3_BUCKET,
      CacheControl: 'public, max-age=946080000',
      ContentType: 'image',
      ACL: 'public-read',
      Key: addId(10),
      Body: req.file.buffer
    };

    s3.putObject(s3Params, function(err, data) {
      if (err) {
        //#todo - add logging
        console.log(err);
      } else {
        content.create({
          picture: '//s3-eu-west-1.amazonaws.com/' + process.env.S3_BUCKET + '/' + s3Params.Key,
          caption: req.body.caption.toLowerCase(),
          timestamp: new Date().getTime()
        }).then(function(data) {
          res.redirect('/upload');
        });
      }
    });
  }

};