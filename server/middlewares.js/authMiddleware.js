import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

const protect = async (req, res, next) => {
    // console.log(req.headers.authorization);
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer ')
    ) {
        let token = req.headers.authorization.split(' ')[1];
        // console.log('token: ', token);
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(verify.id);
        next();
        // console.log('verifyy: ', verify);
        // console.log('user : ', req.user);
    } else {
        return res.status(401).send({ error: 'You must be logged in!' });
    }
};

export default protect;
