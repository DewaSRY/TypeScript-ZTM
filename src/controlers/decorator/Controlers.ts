import "reflect-metadata"
import { RequestHandler } from "express"
import { AppRouter } from "../../AppRouter"
import { Methods,MetadataKey } from "./Method"

// function bodyValidators(keys:string){
//     return function(req:Request,res:Response,next:NewableFunction){
//         if(!req.body)return res.status(422).send('Invalid request')
//         for(let key of keys){
//             if(!req.body[key])return res.status(422).send('Invalid request')
//         }
//         next()
//     }
// }

export function controlers(routePrefix:string){
    return function(target:Function){
        const loginRouters=AppRouter.getInstance()
        for (let key in target.prototype){
            const routeHeandler=target.prototype[key]
            const path=Reflect.getMetadata(MetadataKey.path,target.prototype,key)
            const method:Methods=Reflect.getMetadata(MetadataKey.method,target.prototype,key)
            const midlewares=Reflect.getMetadata(MetadataKey.middleware,target.prototype,key)||[]
            if(path){
                loginRouters[method](`${routePrefix}${path}`,...midlewares,routeHeandler)
            }
        }
    }
}