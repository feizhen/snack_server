// 初始化服务器
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { json, urlencoded } from "body-parser";

import config from "./config";

import snackRouter from "./resources/snack/snack.router";

export const app = express();

app.disable("x-powered-by");

// app middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

// app routes
app.use("/snack", snackRouter);

export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`Server start on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
