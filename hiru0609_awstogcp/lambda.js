let google = require('googleapis').google;
let _auth = require('./Authorizer');
const storage = google.storage('v1');
let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    console.log(event);
    s3.getObject({
        'Bucket': "hirudinee0508",
        'Key': "hiru.txt"
    }).promise()
        .then(data => {
            console.log(data);
            var body = data.body;
            storage.objects.insert({
                "bucket": "hirutest01",
                "name": "hiru.txt",
                "media": {
                    "body": body
                }
            })
                .then(response => {
                    console.log(response.data);           // successful response
                    //todo
                })
                .catch(err => {
                    console.log(err, err.stack); // an error occurred
                });
            // successful response
            //todo
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });



    callback(null, { "message": "Successfully executed" });
}