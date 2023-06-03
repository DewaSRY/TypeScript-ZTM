import { User } from "./User"
import {Company} from "./Company"
interface Mappable{
    location:{
        lat:number,
        lng:number
    }
    markerContent():string
}
export class CustomMap{
    private googleMap:google.maps.Map
    constructor(
        public divId:string
    ){
        this.googleMap=new google.maps.Map(document.getElementById(divId)as HTMLElement,{
            zoom:1,
            center:{
                lat:0,
                lng:0
            }
        })
    }
    addUserMarker(mapAble:Mappable):void{
        const {lat,lng}=mapAble.location
        const marker= new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:lat,
                lng:lng
            }
        })
        marker.addListener('click',()=>{
        const infoWindow=new google.maps.InfoWindow({
                content:mapAble.markerContent()
            })
            infoWindow.open(this.googleMap,marker)
        })
    }
}