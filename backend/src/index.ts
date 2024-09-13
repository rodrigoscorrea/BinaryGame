import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import validateEnv from "./utils/validateEnv";
import router from "./router/app_router";

dotenv.config();
validateEnv();

const app = express();
const PORT = process.env.PORT ?? 4466;

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`server runing on ${PORT}`);
});
