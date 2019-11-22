const Hapi = require('hapi');    // this will include our hapi framework package
const Vision = require('vision');
const Inert = require('inert');
const port = 8000;
const host =  "localhost";
let routes = require('./Routes');
const HapiSwagger = require('hapi-swagger');

const auth = require('./auth');
const AuthBearer = require('hapi-auth-bearer-token');
// await app.register(AuthBearer);

// const server = new hapi.Server({ 
//     host: host,
//     port: port,
//     routes: { cors: true  }}); // create  a server object

//     server.route([{

//         method: 'GET',// the method
 
//         path: '/user',
 
//         handler: function (request, reply) {
 
//             //request holds the request params and reply for output
 
//             return "welcome to my first hapi app"
 
//         }
 
//     }]);


//     server.start(err => {
//         if (err) {
//           throw err;
//         }
//         console.log("hello");
//       });

      (async () => {
        const server = await new Hapi.Server({
            host: 'localhost',
            port: port,
        });
     
        const swaggerOptions = {
            info: {
                    title: 'Express API Documentation',
                   // version: Pack.version,
                },
            };
     
        await server.register([
            Inert,
            Vision,
            {
                plugin: HapiSwagger,
                options: swaggerOptions
            }
        ]);
        await server.register(AuthBearer);
        await server.register(auth);
        try {
            await server.start();
            console.log('Server running at:', server.info.uri);
        } catch(err) {
            console.log(err);
        }
     
        // server.route({
        //     method: 'GET',
        //     path: '/',
        //     options: {
        //         handler: function (r,g){
        //             return "hrlolo"
        //         },
        //         description: 'Get datas',
        //         notes: 'Returns a todo item by the id passed in the path',
        //         tags: ['api'], // ADD THIS TAG
        //         // validate: {
        //         //     params: {
        //         //         id : Joi.number()
        //         //                 .required()
        //         //                 .description('the id for the todo item'),
        //         //     }
        //         // }
        //     },
        // })
        console.log(routes)
        server.route(routes,
            
        );
    })();