// To use imports in node.js we need to add to package.json "type": "module".
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import todoRoutes from './routes/todos.js';

/* Creating an instance of express. */
dotenv.config();

const app = express();

/* A middleware that parses the body of the request. */
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

/* A middleware that allows cross-origin requests. */
app.use(cors());

/* Telling the server to use the routes in the todoRoutes file. */
app.use('/todos', todoRoutes);

const PORT = process.env.PORT || 5000;

/* Connecting to the database and then starting the server. */
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port: ${PORT}`)))
    .catch(err => console.error(err));
