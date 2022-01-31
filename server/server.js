import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
// console.log(process.env.DATA_BASE);
const DB = process.env.DATA_BASE.replace(
    '<PASSWORD>',
    process.env.DATABASE_PASSWORD
);

connectDB(DB);
// console.log(DB);

app.use('/api/users', userRouter);

// app.get('/api/users', (req, res) => {
//     res.json({
//         name: 'pikala',
//     });
// });

const PORT = process.env.PORT || 5000;
app.get('/api/', function (req, res) {
    res.status(200).json({ data: { status: 'ok' } });
});

app.listen(PORT, console.log(`server running on port : ${process.env.PORT}`));
