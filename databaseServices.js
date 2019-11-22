let config = require('./config');
let universalFunctions = require('./universalFunction/functions')
let { constant } = require('./config')
    //const Jwt = P.promisifyAll(require('jsonwebtoken'));
const boom = require('boom')
const connection = config.connection;
async function executeQuery(query, params) {
    console.log();
    return new Promise((resolve, reject) => {
        let quer = connection.query(query, params, (err, result) => {
            // console.log('sql----->>>>', JSON.stringify(query.sql.replace(/(\r\n\t|\n|\r\t)/gm, "")));
            if (err) {
                console.log(err);
                err = universalFunctions.sendExceptions(err, '')
                reject(err);
            }
            resolve(result);
        });
    });
}



async function verifyToken(token) {
    try {
        let decodedToken = await Jwt.verifyAsync(token, constant.JWT_SECRET);
        // console.log(decodedToken);
        let result = await sessionExist(decodedToken.sessionId);
        if (!result) {
            throw boom.unauthorized(constant.MESSAGE.bad_token);
        }

        return decodedToken;
    } catch (e) {
        console.log(e);
        throw boom.badRequest(e);

    }
}
async function sessionExist(sessionId) {
    try {
        let session = await executeQuery('select * from user_session where id = ?', [sessionId]);
        if (session && session.length > 0) {
            return true;
        }
        return false;
    } catch (e) {
        throw boom.badRequest(e);
    }
}

module.exports = {
    executeQuery,
    verifyToken
};