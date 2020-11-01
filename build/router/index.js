"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootRouter = void 0;
var koa_router_1 = __importDefault(require("koa-router"));
var phoneNumber_router_1 = require("./phoneNumber.router");
var rootRouter = new koa_router_1.default();
exports.rootRouter = rootRouter;
rootRouter.use(phoneNumber_router_1.phoneNumberRouter.routes());
