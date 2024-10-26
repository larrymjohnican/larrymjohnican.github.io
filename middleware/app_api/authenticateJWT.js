const jwt = require('jsonwebtoken');

function authenticateJWT(req, res, next) {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        console.log('Auth Header Required but NOT PRESENT!');
        return res.status(401).json({ message: 'Authorization header missing.' });
    }

    const [bearer, token] = authHeader.split(' ');
    if (bearer !== 'Bearer' || !token) {
        console.log('Invalid authorization format.');
        return res.status(401).json({ message: 'Invalid authorization format.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Token Validation Error:', err.message);
            return res.status(401).json({ message: 'Token validation error.' });
        }
        req.auth = decoded;
        next();
    });
}

module.exports = authenticateJWT;
