import { Pipe, PipeTransform } from '@angular/core';
import { PlacesService } from '../services/places.service';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

places:any=[]
  constructor(private ps:PlacesService){
    console.log("running")
     this.ps.getPlaces().subscribe(
      {next: (places:any)=>this.places=places,
      error: ()=> this.places =[]}
     )
  }
  transform(target: any, param:string): any {
    
  
     return this.places.filter((x:any)=> x.city.toLowerCase().startsWith(param.toLowerCase())) ;
  }

}
