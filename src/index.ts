import { User } from "./prototype/User"
import { UserForm } from './views/Forms';

const user=new User( "users",{name:'dewasurya',age:4,id:1})
const userRoot=document.getElementById('root') as HTMLElement
const userForm=new UserForm(userRoot,user)
userForm.render()
user.on('change',()=>console.log('some thing was change'))  
user.on('save',()=>console.log('some thing was save'))  
user.on('error',()=>console.log('some thing was error'))  
// user.set({name:"new Name"})

// user.sync.fetch().then(res=>console.log(res))
// user.save()


