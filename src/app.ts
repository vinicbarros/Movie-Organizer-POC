import express, { json } from "express";
import cors from "cors";
import moviesRouter from "./routers/moviesRouter.js";
import platformRouter from "./routers/platformRouters.js";
import genderRouter from "./routers/genderRouter.js";

const app = express();

app.use(cors());
app.use(json());
app.use(moviesRouter);
app.use(platformRouter);
app.use(genderRouter);

export default app;
