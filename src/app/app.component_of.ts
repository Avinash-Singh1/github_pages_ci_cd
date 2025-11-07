import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Observable, of } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [ FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data:any[]=[];
  array =[1,2,3,4,5];
  title = 'my-angular-app';
  myObservable = of(this.array,"Avinash","singh");

    GetAsyncData(){
    this.myObservable.subscribe({
        next:(val:any)=>{
          // this.data.push(...val);
          console.log("val: ",val);
        },
        error(err){
          alert("Error occured");
        },
        complete(){
          alert('All the data is streamed');
        }
    })
  ;

  }

}
