
const Hapi = require('hapi');
// let routes = require('./Routes');



let port = 8000;
// if (process.env.NODE_ENV == 'live') {
//     host ='ec2-13-56-99-70.us-west-1.compute.amazonaws.com';
//     port = process.env.PORT || 3003 
// } else {
//     host = 'localhost';
//     port = 3005;
// }

(async () => {
      
    async function StartServer() {
       
         const app = new Hapi.Server({
            host: '172.16.0.14',
            port: port,
            routes: { cors: true  },
        //     cache: { engine: require('catbox-memory'), name: 'memory' },
         });

        // const swaggerOptions = {
        //     info: {
        //         title: 'Grocery Documentation',
        //         version: '1.0.0',
        //         contact: {

        //         }
        //     },
        //     // swaggerUI:false,
        //     // documentationPage:false,
        //     schemes: ['http', 'https']
        // };
        // await app.register({
        //     plugin: require('hapi-rate-limit'),
        //     options: {
        //         enabled: true,
        //         userLimit: 500,
        //         userCache: { segment: 'hapi-rate-limit-user', expiresIn: 600000 },
        //         pathLimit: 500,
        //         pathCache: { segment: 'hapi-rate-limit-path', expiresIn: 600000 },
        //         userPathLimit: 500,
        //         userPathCache: true,
        //         userPathCache: {
        //             segment: 'hapi-rate-limit-userPath',
        //             expiresIn: 6000
        //         }
        //     }
        // });
        // await app.register(AuthBearer);
        // await app.register(pre);
        // await app.register(auth);
        // await app.register([
        //     Inert,
        //     Vision,
        //     {
        //         plugin: HapiSwagger,
        //         options: swaggerOptions
        //     },
        // ]);
        
        // app.route(routes,
        //     {
        //         config: {
        //             origin: ['*'],
        //             additionalHeaders: ['cache-control', 'x-requested-with','authorization',
        //                 'contentlanguage', 'postman-token', 'authorization', 'utcoffset','content-type','devicetype']
        //                 }
                        

        //     }
        // );
        
       

        // await server.installSubscriptionHandlers(app.listener);

        await app.start();
        // app.ext('onPreResponse', corsHeaders)
        console.log('Server running at: ', app.info.uri)
       
    }
    try {
        await StartServer();
        // console.log(run)
    } catch (e) {
        console.log(e)
    }
 
})();

