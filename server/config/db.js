import mongoose from 'mongoose';
import colors from 'colors';

// const DB = process.env.DATA_BASE.replace(
//     '<PASSWORD>',
//     process.env.DATABASE_PASSWORD
// );

const connectDB = async (DB) => {
    try {
        const conn = await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(
            `mongoDB connected ${conn.connection.host}`.brightCyan.bgGray
                .underline
        );
    } catch (err) {
        console.log(`Error : ${err.message}`.red.underline);
    }
};

export default connectDB;
