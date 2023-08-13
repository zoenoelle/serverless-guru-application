console.log('Loading function');

exports.handler = async (event, context) => {
    
    console.log(event)

    return {
        "isBase64Encoded": true,
        "statusCode": 200,
        "headers": {},
        "body": "Hello world from Lambda!"
    }
};
