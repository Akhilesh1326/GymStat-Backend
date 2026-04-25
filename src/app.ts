import express from "express";
import userBasicRouter from "./microservices/userManagement/router/userBasic.router";
const app = express();

app.use(express.json());

app.use("/validator", userBasicRouter);

export default app;
