"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const loging_router_1 = require("./routers/loging.router");
const cookie_session_1 = __importDefault(require("cookie-session"));
const port = 3000;
const app = (0, express_1.default)();
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["laskdjf"] }));
app.use(loging_router_1.router);
app.listen(port, () => {
    console.log(`App run at port :${port}`);
});
