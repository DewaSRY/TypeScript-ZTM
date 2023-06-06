"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlers = exports.loginRouters = void 0;
const express_1 = require("express");
require("reflect-metadata");
exports.loginRouters = (0, express_1.Router)();
function controlers(routePrefix) {
    return function (target) {
        for (let key in target.prototype) {
            const routeHeandler = target.prototype[key];
            console.log(routeHeandler);
            const path = Reflect.getMetadata("path", target.prototype, key);
            console.log(path);
            if (path) {
                exports.loginRouters.get(`${routePrefix}${path}`, routeHeandler);
            }
        }
    };
}
exports.controlers = controlers;
