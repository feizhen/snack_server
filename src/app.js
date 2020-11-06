// 初始化服务器
import express from 'express';
import config from './config';

export const app = express();

export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`Server start on http://localhost:${config.port}`)
    })
  } catch (error) {
    console.log(error)
  }
}