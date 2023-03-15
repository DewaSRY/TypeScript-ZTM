
type Callback=()=>void

export class Events{
    //will save value like "this.events['key']=[Callback=()=>void]"
    events:{[key:string]:Callback[]}={}
    //on function for save event
    on=(eventName:string,Callback:Callback):void=>{
        //this.events[eventName] -> Callback[] or undefined
        const heandler=this.events[eventName] || []
        heandler.push(Callback)
        this.events[eventName]=heandler
    }
    //on function for call event
    trigger=(eventName:string):void=>{
        const heandler=this.events[eventName]
        if(!heandler || heandler.length===0){
            throw new Error(`this: ${eventName} heandler to trigger does\'t exist`)
        }
        heandler.forEach((Callback)=>{
            Callback()
        })
    }

}