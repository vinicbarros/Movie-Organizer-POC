import express, { json } from "express";
import cors from "cors";
import moviesRouter from "./routers/moviesRouter.js";

const app = express();

app.use(cors());
app.use(json());
app.use(moviesRouter);

export default app;
