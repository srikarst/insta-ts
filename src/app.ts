import express from "express";
import { json } from "body-parser";

import { savedPostsRouter } from "./routes/savedposts";

const app = express();

app.use(json());
app.use(savedPostsRouter);

export { app };
