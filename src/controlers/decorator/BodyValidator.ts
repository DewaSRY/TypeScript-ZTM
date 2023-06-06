import 'reflect-metadata'
import { MetadataKey } from './Method'

export function BodyValitor(...keys:string[]){
    return function (target:any,key:string,desc:PropertyDescriptor){
        Reflect.defineMetadata(MetadataKey.validator,keys,target,key)
    }
}