import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    } catch (err) {
        console.log(`Error : ${err.message}`.red.underline);
    }
};

export const authUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        // res.send({
        //     email: email,
        //     password: password,
        // });
        const user = await User.findOne({ email });
        // res.send(user);
        if (user) {
            if (user.password === password) {
                const token = generateToken(user.id);
                res.status(200).json({
                    _id: user.id,
                    uerName: user.username,
                    email: user.email,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    lat: user.lat,
                    lng: user.lng,
                    avatar: user.avatar,
                    gender: user.gender,
                    dateOfBirth: user.date_of_birth,
                    images: user.images,
                    token: token,
                });
            } else {
                res.status(400).json({
                    message: 'Invalid Password',
                });
            }
        } else {
            res.status(401);
            throw new Error('User not found');
        }
    } catch (err) {
        console.log(`Error : ${err.message}`.red.underline);
    }
};

export const getUser = (id) => {};
