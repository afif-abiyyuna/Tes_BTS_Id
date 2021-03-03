const jwt = require('jsonwebtoken');


class authJwt {
    static verifyToken(req,res,next){
        let token = req.headers["access_token"];
        if (!token){
            throw ({ name : 'MISSING TOKEN'});
        }
        jwt.verify(token, config.secret, (err,decoded)=>{
            if(err){
                throw ({ name : 'INVALID TOKEN'});
            }
            req.userId = decoded.id;
            next();

        });
    }
}

module.exports = authJwt;