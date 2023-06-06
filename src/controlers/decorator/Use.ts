import "reflect-metadata"
import { MetadataKey } from "./Method"
import { RequestHandler } from "express"
export function use(midleware:RequestHandler){
    return function(target:any,key:string,desc:PropertyDescriptor){
        const midlewares=Reflect.getMetadata(MetadataKey.middleware,target,key)||[]
        midlewares.push(midleware)
        Reflect.defineMetadata(MetadataKey.middleware,midleware,target,key)
    }

}