/**
 standard-response 中间件主要用于封装请求，并返回统一格式的请求响应
 */
import _ from "lodash";

export default function standardResponse(req, res) {
  // 从 res 里取数据
  const { body, statusCode } = res;
}
