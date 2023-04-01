import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
import kpiRoutes from './routes/kpi.js';
// import KPI from './models/KPI.js';
// import { kpis } from './data/data.js';

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* Routes */
app.use('/kpi', kpiRoutes);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`Server listening on: ${PORT}`);
  try {
    await mongoose
      .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      /* ADD DATA ONE TIME ONLY */
      // .then(async () => {
      //   await mongoose.connection.db.dropDatabase();
      //   KPI.insertMany(kpis);
      // });
    console.log('Mongoose connected successfully');
  } catch (error) {
    console.error(error);
  }
});
