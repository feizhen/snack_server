"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.start = exports.app = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 初始化服务器
const app = (0, _express.default)();
exports.app = app;

const start = async () => {
  try {
    app.listen(_config.default.port, () => {
      console.log(`Server start on http://localhost:${_config.default.port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

exports.start = start;