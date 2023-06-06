import 'reflect-metadata'
import { Methods ,MetadataKey} from './Method'
function routeBinder(method:string){
    console.log('hallo')

    return function(path:string){
    console.log('hallo')

        return function(target:any,key:string,desc:PropertyDescriptor){
            console.log('hallo')
            Reflect.defineMetadata(MetadataKey.path, path , target ,key)
            Reflect.defineMetadata(MetadataKey.method, method , target ,key)
            console.log(path,target,key)
        }
    }
}

export const get=routeBinder(Methods.get)
export const post=routeBinder(Methods.post)
export const put=routeBinder(Methods.put)
export const del=routeBinder(Methods.delete)
export const patch=routeBinder(Methods.patch)
