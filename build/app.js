"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
var koa_1 = __importDefault(require("koa"));
var cors_1 = __importDefault(require("@koa/cors"));
var path_1 = __importDefault(require("path"));
var koa_favicon_1 = __importDefault(require("koa-favicon"));
var koa_helmet_1 = __importDefault(require("koa-helmet"));
var koa_body_1 = __importDefault(require("koa-body"));
var koa_json_1 = __importDefault(require("koa-json"));
var middleware_1 = require("./middleware");
var index_1 = require("./router/index");
var notFound_router_1 = require("./router/notFound.router");
var app = new koa_1.default();
exports.app = app;
app.use(koa_helmet_1.default()).use(koa_favicon_1.default(path_1.default.join(__dirname, 'static', 'favicon/favicon.ico'))).use(cors_1.default()).use(koa_body_1.default()).use(koa_json_1.default())
    .use(middleware_1.loggerMiddleware)
    .use(middleware_1.errorMiddleware)
    .use(index_1.rootRouter.routes())
    .use(notFound_router_1.notFoundRouter.routes());
