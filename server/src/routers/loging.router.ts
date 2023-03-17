import { Router,Request,Response,NextFunction } from "express";


interface IntRequestwithBody extends Request{
    body :{[key:string]:string |undefined}
}
function requireAuth(req:IntRequestwithBody,res:Response,next:NextFunction){
    if(req.session && req.session.loggedIn){
        next()
        return
    }
    res.status(403).send('Not permitted')
}
export const router=Router()
router.get('/',(req:IntRequestwithBody,res:Response)=>{
    if (req.session && req.session.loggedIn){
        return res.send(`
            <div>
                <h1>hy there,wellcom  :) </h1>
                <div>You Are Logged in  </div>
                <a href="/Logout"> Logout</a>
                <a href="/protected">go to protected route</a>
            </div>
        `)
    }
    res.send(`
        <div>
            <h1>hy there</h1>
            <div>You are't Logged-in  </div>
            <a href="/login"> login</a>
        </div>
    `)
}).get('/login',(req:IntRequestwithBody,res:Response)=>{
    return res.send(`
        <form method="POST">
            <div>
                <label>Email</label>
                <input name="email"/>
            </div>
            <div>
                <label>Password</label>
                <input name="password"/>
            </div>
            <button>Submit</button>
        </form>
    `)
}).post('/login',(req:IntRequestwithBody,res:Response)=>{
    const {email,password}=req.body
    if(email && password){
        const checkemail=email.includes('@')
        const checkPassword=password.length >=6
        if(checkemail && checkPassword){
            req.session={loggedIn:true}
            return res.redirect('/')
        }
        return res.send('some data is un falid')
    }else{
        return res.send('pleace provide some email')
    }
}).get('/Logout',(req:IntRequestwithBody,res:Response)=>{
    req.session=undefined
    return res.redirect('/')
}).get('/protected',requireAuth,(req:IntRequestwithBody,res:Response)=>{
    res.send(`Welcome to protected route,logged in user`)
})
