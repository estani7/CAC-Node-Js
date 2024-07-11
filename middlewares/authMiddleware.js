const jwt = require('jsonwebtoken');
const config = require('../config/config');

module.exports = (req, res, next) => {
    const autHeader = req.headers['autorization'];

    if (!autHeader) {
        return res.status(403).send({auth: false, message: 'No token provided'});
    }

    const token = autHeader.split(' ')[1];

    if(!token) {
        return res.status(403).send({auth: false, message: 'Error in token'});
    }

    jwt.verify(token, config.secretKey, (err, decoded) => {
        if (err) {
            return res.status(500).send({auth: false, message: 'Failed to authenticate token'});
        }
        req.userId = decoded.id;
        next();
    });
}