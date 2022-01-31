import axios from 'axios';
import dotenv from 'dotenv';
import connectDB from './db.js';
import User from '../models/userModel.js';

dotenv.config();

const DB = process.env.DATA_BASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

connectDB(DB);

const fakeData = async () => {
    try {
        const userData = axios.get(
            'https://random-data-api.com/api/users/random_user?size=100'
        );
        const fetchImages = axios.get(
            'https://api.unsplash.com/photos/random/?&client_id=ebCHZUEdKe8-XsQ1ie3iTjRol-4PFia9VAnQ6ILM6aM&id=lFmuWU0tv4M&count=30&query=girls'
        );
        const awaitresp = await Promise.all([userData, fetchImages]);
        // console.log(awaitresp[1].data[0].urls.regular);
        const users = [];
        awaitresp[0].data.map((item, index) => {
            let newData = { ...item };
            delete newData.credit_card;
            delete newData.subscription;
            delete newData.employment;
            delete newData.social_insurance_number;
            delete newData.phone_number;
            delete newData.id;
            delete newData.uid;
            newData = {
                ...newData.address.coordinates,
                ...newData,
                images: [
                    awaitresp[1].data[index % 26].urls.regular,
                    awaitresp[1].data[(index % 26) + 1].urls.regular,
                    awaitresp[1].data[(index % 26) + 2].urls.regular,
                    awaitresp[1].data[(index % 26) + 2].urls.regular,
                ],
            };
            delete newData.address;
            users.push(newData);
        });
        return users;
    } catch (e) {
        console.log(`Error : ${e.message}`);
    }
};

// fakeData();
const importData = async () => {
    try {
        await User.deleteMany();
        const users = await fakeData();
        // console.log(users);
        await User.insertMany(users);
        console.log('Data Imported !'.cyan.underline);
        process.exit(1);
    } catch (err) {
        console.log(`Error : ${err.message}`.red.bold);
        process.exit(0);
    }
};

const destroyData = async () => {
    try {
        await User.deleteMany();
        console.log('Data destroyed !'.yellow.underline);
        process.exit(1);
    } catch (err) {
        console.log(`Error : ${err.message}`.red.bold);
        process.exit(0);
    }
};

if (process.argv[2] === '-d') destroyData();
else importData();
