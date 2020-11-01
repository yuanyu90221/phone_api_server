"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = exports.logger = void 0;
var Logger = /** @class */ (function () {
    function Logger() {
    }
    Logger.prototype.log = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        console.log.apply(console, data);
    };
    Logger.prototype.warn = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        console.log.apply(console, data);
    };
    Logger.prototype.debug = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        console.debug.apply(console, data);
    };
    Logger.prototype.info = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        console.info.apply(console, data);
    };
    Logger.prototype.error = function (e) {
        console.error(e);
    };
    return Logger;
}());
exports.Logger = Logger;
;
var logger = new Logger();
exports.logger = logger;
