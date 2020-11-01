"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpException = void 0;
var errorName_1 = require("../enums/errorName");
var HttpException = /** @class */ (function (_super) {
    __extends(HttpException, _super);
    function HttpException(input) {
        var _this = _super.call(this, input.message) || this;
        _this.name = errorName_1.ERRORS.HttpException;
        _this.status = input.status;
        _this.message = input.message;
        _this.errCode = input.errCode;
        _this.client_message = input.client_message ? input.client_message : input.message;
        return _this;
    }
    HttpException.prototype.logAll = function (logger) {
        logger.info(JSON.stringify(this));
    };
    return HttpException;
}(Error));
exports.HttpException = HttpException;
