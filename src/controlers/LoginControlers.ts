import { Router,Request ,Response,NextFunction} from "express";
import { get,controlers ,use,post} from "./decorator";
function logger(req:Request,res:Response,next:NextFunction){
    console.log('request was made!!')
    next()
}
interface RequestWithBody extends Request{
    body:{[key:string]:string|undefined};
}
@controlers('/')
class LoginController {
    @get('/login')
    getLogin(req:Request,res:Response){
        console.log('hallo')
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
        `)
    }
    @post('/login')
    postLogin(req:RequestWithBody,res:Response){
        const {email,password}=req.body
        if(!email)throw new Error()
        if(email && password)req.session={loogedIn:true}
        res.redirect('/')
    }
}