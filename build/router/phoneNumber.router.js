"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneNumberRouter = void 0;
var koa_router_1 = __importDefault(require("koa-router"));
var phone_controller_1 = require("../controller/phone.controller");
var phoneNumberRouter = new koa_router_1.default();
exports.phoneNumberRouter = phoneNumberRouter;
phoneNumberRouter.post('/phone', phone_controller_1.phoneNumberController);
