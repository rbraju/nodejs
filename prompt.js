
var prompt = require('prompt');

prompt.start();
prompt.get(['username', 'email'], function (err, result) {
    console.log('Command line input received');
    console.log('Username : ' + result.username);
    console.log('Email : ' + result.email);
});
