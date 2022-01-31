import mongoose from 'mongoose';

// const userShema = new mongoose.Schema({
//     name: {
//         type: String,
//     },
// });
const userShema = new mongoose.Schema({
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    password: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        // required: true,
        // unique: true,
    },
    email: {
        type: String,
        // required: true,
        // unique: true,
    },
    avatar: {
        type: String,
    },
    gender: {
        type: String,
    },
    date_of_birth: {
        type: Date,
    },
    images: {
        type: [String],
    },
});

const User = mongoose.model('User', userShema);

export default User;
