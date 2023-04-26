import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'auto-complete-demo';
  city:string=""
  cities:any=[]

  displayFn(data:any):string{
    return data;
  }
}
