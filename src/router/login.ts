import { Router,Request ,Response,NextFunction} from "express";


interface RequestWithBody extends Request{
    body:{[key:string]:string|undefined};
}

export  const loginRouter=Router()
loginRouter.get('/',(req,res)=>{
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
}).post("/",(req:RequestWithBody,res)=>{
    const {email,password}=req.body
    if(!email)throw new Error()
    if(email && password)req.session={loogedIn:true}
    res.redirect('/')
})