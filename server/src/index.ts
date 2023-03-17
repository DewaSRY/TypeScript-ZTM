import express,{Request,Response} from  'express'
import bodyParser from 'body-parser'
import { router } from './routers/loging.router'
import cookieSession from 'cookie-session'
const port=3000
const app=express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieSession({keys:["laskdjf"]}))
app.use(router)

app.listen(port,()=>{
    console.log(`App run at port :${port}`)
})

