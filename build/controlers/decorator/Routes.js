"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.del = exports.put = exports.post = exports.get = void 0;
require("reflect-metadata");
const Method_1 = require("./Method");
function routeBinder(method) {
    console.log('hallo');
    return function (path) {
        console.log('hallo');
        return function (target, key, desc) {
            console.log('hallo');
            Reflect.defineMetadata(Method_1.MetadataKey.path, path, target, key);
            Reflect.defineMetadata(Method_1.MetadataKey.method, method, target, key);
            console.log(path, target, key);
        };
    };
}
exports.get = routeBinder(Method_1.Methods.get);
exports.post = routeBinder(Method_1.Methods.post);
exports.put = routeBinder(Method_1.Methods.put);
exports.del = routeBinder(Method_1.Methods.delete);
exports.patch = routeBinder(Method_1.Methods.patch);
