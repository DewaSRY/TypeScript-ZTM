import { Router } from "express";


export const logoutRouter=Router()
logoutRouter.get('/',(req,res)=>{
    req.session={loogedIn:false}
    res.redirect('/login')
})