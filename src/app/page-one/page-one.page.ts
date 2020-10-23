import { Component, OnInit } from '@angular/core';
import { MyLittleServiceService } from '../my-little-service.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.page.html',
  styleUrls: ['./page-one.page.scss'],
})
export class PageOnePage implements OnInit {
  pageEven: boolean;
  pageVal$ = this.theService.pageEven.subscribe((data) => {
    data ? this.pageEven = true : this.pageEven = false;
  });

  constructor(private theService: MyLittleServiceService) { }

  ngOnInit() {
  }

  getBehaviorSubjectValue() {
    return this.theService.pageEven;
  }

  changePageState() {
    this.theService.changeState();
  }

}
