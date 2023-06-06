"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import { loginRouter } from './router/login';
const logout_1 = require("./router/logout");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
const AppRouter_1 = require("./AppRouter");
// function RequireAuth(req:Request,res:Response,next:NextFunction){
//     if(!req.session)throw new Error("there no session")
//     if(req.session.loogedIn)res.redirect('/')
//     next()
// }
const app = (0, express_1.default)();
app.use((0, body_parser_1.default)({ extended: true }))
    .use((0, cookie_session_1.default)({ keys: ["hallonamasayaDewa"] }))
    .use('/logout', logout_1.logoutRouter)
    // .use('/login',loginRouter)
    .use(AppRouter_1.AppRouter.getInstance())
    .get('/', (req, res) => {
    if (!req.session)
        throw new Error('test');
    if (req.session.loogedIn) {
        res.send(`
        <div>
            <h1>Hallo</h1>
            <a href="/logout">Logout</a>
        </div>
        `);
    }
    else {
        res.send(`
        <div>
            <h1>pleace login</h1>
            <a href="/login">login</a>
        </div>
        `);
    }
}).listen(3000, () => console.log('run on port :3000'));
