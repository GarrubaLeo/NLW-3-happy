import express from 'express';
import path from 'path';
import 'express-async-errors';
import './database/connection';
import dotenv from 'dotenv'
import cors from 'cors';

import errorsHandler from './errors/handler'
import routes from './routes';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorsHandler);

app.listen(process.env.PORT);