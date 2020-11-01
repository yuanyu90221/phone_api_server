"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMiddleware = exports.loggerMiddleware = void 0;
var logger_handler_1 = require("./logger.handler");
Object.defineProperty(exports, "loggerMiddleware", { enumerable: true, get: function () { return logger_handler_1.loggerMiddleware; } });
var error_handle_1 = require("./error.handle");
Object.defineProperty(exports, "errorMiddleware", { enumerable: true, get: function () { return error_handle_1.errorMiddleware; } });
