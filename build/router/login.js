"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = require("express");
exports.loginRouter = (0, express_1.Router)();
exports.loginRouter.get('/', (req, res) => {
    res.send(`
    <form method="POST"> 
        <div>
            <label>Email</label>
            <input name="email"/>
        </div>
        <div>
            <label>Password</label>
            <input name="password" type="password"/>
        </div>
        <button>Submit</button>
    </form>
    `);
}).post("/", (req, res) => {
    const { email, password } = req.body;
    if (!email)
        throw new Error();
    if (email && password)
        req.session = { loogedIn: true };
    res.redirect('/');
});
