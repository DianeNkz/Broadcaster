"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _users = _interopRequireDefault(require("./SERVER/Routes/users.route"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import multer from 'multer';
// import cors from "cors";
// import DataUri from 'datauri';
// import Cloudinary from 'cloudinary';
var app = (0, _express["default"])();

_dotenv["default"].config();

app.use(_bodyParser["default"].json());
app.use('/', _users["default"]);
var PORT = process.env.PORT || 8000;
app.use('/', function (req, res) {
  res.json({
    status: 200,
    message: 'Server running'
  });
});
app.listen(PORT, function () {
  console.log("listening to the local host  ".concat(PORT));
});
var _default = app;
exports["default"] = _default;