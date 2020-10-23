import { Component, OnInit } from '@angular/core';
import { MyLittleServiceService } from '../my-little-service.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.page.html',
  styleUrls: ['./page-two.page.scss'],
})
export class PageTwoPage implements OnInit {
  pageEven: boolean;
  pageVal$ = this.theService.pageEven.subscribe((data) => {
    data ? this.pageEven = true : this.pageEven = false;
  });
  
  constructor(private theService: MyLittleServiceService) { }

  ngOnInit() {
  }

  getBehaviorSubjectValue(){
    return this.theService.pageEven;
  }

  changePageState(){
    this.theService.changeState();
  }

}
