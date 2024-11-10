import jwt from 'jsonwebtoken';

export default function authenticate(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith('Bearer ')) {
        const token = authHeader.split(' ')[1];
        console.log(process.env.JWT_SECRET);
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log(err);
                return res.status(401).json({ message: 'Unauthorized' });
            }
            req.body.senderUserId = decoded.userId;
            next();
        });
    } else {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}