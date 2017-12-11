// Hapi

const fs = require('fs');
const joi = require('joi');
const hapi = require('hapi');
const boom = require('boom');

// Create http server with host and port
var server = new hapi.Server({
    debug: {request: ['*']}
});
server.connection({
    host: 'localhost',
    port: 8787
});

// Add a route
server.route({
    method: 'GET',
    path: '/hello',
    handler: function(request, reply) {
        return reply('Hello Hapi World !');
    }
});

// Get users.json
server.route({
    method: 'GET',
    path: '/users',
    handler: function(request, reply) {
        fs.readFile('modules/users.json', 'utf8', function(err, contents) {
            return reply(contents);
        });
    }
});

// Add to cart
server.route({
    method: 'POST',
    path: '/cart/{id}',
    config: {
        validate: {
            params : {
                id : joi.number()
            }
        }
    },
    handler: function(request, response) {
        return response(request.params.id + ' added to cart');
    }
});

// Resource not found
server.route({
    method: 'GET',
    path: '/{p*}',
    handler: function(request, response) {
        return response(boom.notFound('oops.. Resource not found!'));
    }
});

// Start the server
server.start((err) => {
    if (err)
        console.log('Error occurred while starting server.')
    else
        console.log('Server running on port 8787');
});
