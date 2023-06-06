"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
const Method_1 = require("./Method");
function use(midleware) {
    return function (target, key, desc) {
        const midlewares = Reflect.getMetadata(Method_1.MetadataKey.middleware, target, key) || [];
        midlewares.push(midleware);
        Reflect.defineMetadata(Method_1.MetadataKey.middleware, midleware, target, key);
    };
}
exports.use = use;
