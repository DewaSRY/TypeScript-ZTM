import express,{Request,Response,NextFunction} from "express";
// import { loginRouter } from './router/login';
import { logoutRouter } from './router/logout';
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import { AppRouter } from "./AppRouter";
// function RequireAuth(req:Request,res:Response,next:NextFunction){
//     if(!req.session)throw new Error("there no session")
//     if(req.session.loogedIn)res.redirect('/')
//     next()
// }
const app =express()
app.use(bodyParser({extended:true}))
.use(cookieSession({keys:["hallonamasayaDewa"]}))
.use('/logout',logoutRouter)
// .use('/login',loginRouter)
.use(AppRouter.getInstance())
.get('/',(req:Request,res:Response)=>{
     if(!req.session)throw new Error('test')
    if(req.session.loogedIn){
        res.send(`
        <div>
            <h1>Hallo</h1>
            <a href="/logout">Logout</a>
        </div>
        `)
    }else{
        res.send(`
        <div>
            <h1>pleace login</h1>
            <a href="/login">login</a>
        </div>
        `)
    }
}).listen(3000,()=>console.log('run on port :3000'))