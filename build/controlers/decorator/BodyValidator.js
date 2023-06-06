"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BodyValitor = void 0;
require("reflect-metadata");
const Method_1 = require("./Method");
function BodyValitor(...keys) {
    return function (target, key, desc) {
        Reflect.defineMetadata(Method_1.MetadataKey.validator, keys, target, key);
    };
}
exports.BodyValitor = BodyValitor;
