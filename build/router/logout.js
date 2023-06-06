"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutRouter = void 0;
const express_1 = require("express");
exports.logoutRouter = (0, express_1.Router)();
exports.logoutRouter.get('/', (req, res) => {
    req.session = { loogedIn: false };
    res.redirect('/login');
});
