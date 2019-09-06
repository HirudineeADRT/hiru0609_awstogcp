let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    console.log(event);

    callback(null, { "message": "Successfully executed" });
}