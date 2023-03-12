import {User} from "./User"//optional 
import { Company } from './Company';//optional 

export interface IntMapeble{
    location:{
        lat:number;
        lng:number
    }
    markerContent():string
}

export class CustomMap{
    googleMap:google.maps.Map;
    map:HTMLElement
    constructor(divId:string){
        this.map=document.getElementById(divId) as HTMLElement
        this.googleMap = new google.maps.Map(this.map, {
            zoom: 8,
            center: {
                lat: -34.397,
                lng: 150.644
                },
          });
    }
    adduserMarker(user:User):void{//optional 
    new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:user.location.lat,
                lng:user.location.lng,
            }
     })
    }
    addCompenyMarker(company:Company):void{//optional 
        new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:company.location.lat,
                lng:company.location.lng,
            }
     })
    }
    addMarker(mapeble:IntMapeble):void{
      const marker=  new google.maps.Marker({
            map:this.googleMap,
            position:{
                lat:mapeble.location.lat,
                lng:mapeble.location.lng,
            }
        })
        marker.addListener('click',()=>{
            const infoWindow= new google.maps.InfoWindow({
                content:mapeble.markerContent()
            })
            infoWindow.open(this.googleMap,marker)
        })
    }
}