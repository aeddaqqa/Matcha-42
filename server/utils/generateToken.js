import jwt from 'jsonwebtoken';

const generateToken = (id) => {
    const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
    });
    return token;
};

export default generateToken;
