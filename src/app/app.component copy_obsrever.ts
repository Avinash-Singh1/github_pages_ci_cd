import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterOutlet } from '@angular/router';
import { HighlightDirective } from './directives/highlight.directive';
import { FontSizeDirective } from './directives/font-size.directive';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  imports: [ FormsModule,CommonModule,HighlightDirective,FontSizeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-angular-app';
  data:number[]=[];
  fun(event: Event){
    const inputElement=event.target as HTMLInputElement;
    this.title=inputElement.value;
  }

  x=[1,2,3,4,5];

  // myObservalble = new Observable((observer)=>{
  //   observer.next([1,2,3,4,5]);
  // })
  
  myObservalble = new Observable((observer)=>{
    setTimeout(() => {
      observer.next(1);
    }, 2000);
    setTimeout(() => {
      observer.next(2);
    }, 4000);
    setTimeout(() => {
      observer.next(3);
    }, 6000);
    // setTimeout(() => {
    //   observer.error(new Error('Something wrong'));
    // }, 6000);
    setTimeout(() => {
      observer.next(4);
    }, 8000);
    setTimeout(() => {
      observer.complete();
    }, 10000);

  })

  
  GetAsyncData(){
  //   this.myObservalble.subscribe((res:any)=>{
  //     console.log(res);
  //     this.data.push(res);
  //   },
  //   (err)=>{
  //     alert(err.message);
  //   },
  //   ()=>{
  //     alert('All the data is streamed');
  //   }
  // );

    this.myObservalble.subscribe({
        next:(val:any)=>{
          this.data.push(val);
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
