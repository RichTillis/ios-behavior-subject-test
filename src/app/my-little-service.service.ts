import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MyLittleServiceService {
  pageEven: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  changeState(){
    console.log(this.pageEven.getValue());
    this.pageEven.next(!this.pageEven.getValue());
  }
}
