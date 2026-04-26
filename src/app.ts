import express from "express";
import userBasicRouter from "./microservices/userManagement/router/userBasic.router";
import gymStatRouter from "./microservices/gymstat/router/gymStat.router";
const app = express();

app.use(express.json());

app.use("/user-management", userBasicRouter);

app.use("/gymStat", gymStatRouter)

export default app;
