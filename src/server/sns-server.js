var http  = require('http');
var app = require('http').createServer()
var io = require('socket.io')(app);

app.listen(8081);

var AWS = require('aws-sdk');

AWS.config.update({region:'us-east-1'});

// Configure the credentials provider to use your identity pool
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: 'us-east-1:XXXXXXXXXXXXXXXXXXXXXXXX',
	AccountId: 'XXXXXXXXXXXXXXXXXXXXXX',
	RoleArn: 'arn:aws:iam::XXXXXXXXXXX:role/SNS_Allow'
});



var s = new createHttpServer
var messages = [];
var message;

function createHttpServer() {
    var server = new http.Server();
    server.on( 'request', function( request, response ){
        request.setEncoding( 'utf8' );
        //concatenate POST data
        var msgBody = '';
        request.on( 'data', function( data ){
        msgBody += data;
     });
     request.on( 'end', function(){
            var msgData = JSON.parse( msgBody );
            var msgType = request.headers[ 'x-amz-sns-message-type' ];

            handleIncomingMessage( msgType, msgData );
      });

        // SNS doesn't care about our response as long as it comes
        // with a HTTP statuscode of 200
        response.end( 'OK' );
    });
    //Listen on endpoint for SNS notifications
    server.listen(6001, function(){
    console.log('Server listening');
  });
}

function handleIncomingMessage( msgType, msgData ) {
var sns = new AWS.SNS();
    if ( msgType === 'Notification' ) {
        console.log('notification received....')
        io.emit('available', msgData);
    } else {
        console.log( 'Unexpected message type ' + msgType );
    }
}
