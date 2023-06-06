"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controlers = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const Method_1 = require("./Method");
function bodyValidators(keys) {
    return function (req, res, next) {
    };
}
function controlers(routePrefix) {
    return function (target) {
        const loginRouters = AppRouter_1.AppRouter.getInstance();
        for (let key in target.prototype) {
            const routeHeandler = target.prototype[key];
            const path = Reflect.getMetadata(Method_1.MetadataKey.path, target.prototype, key);
            const method = Reflect.getMetadata(Method_1.MetadataKey.method, target.prototype, key);
            const midlewares = Reflect.getMetadata(Method_1.MetadataKey.middleware, target.prototype, key) || [];
            if (path) {
                loginRouters[method](`${routePrefix}${path}`, ...midlewares, routeHeandler);
            }
        }
    };
}
exports.controlers = controlers;
