import { Component, OnInit } from '@angular/core';
import { RouterService } from '../../../../common/services/router.service';

@Component({
  selector: 'app-review-page',
  templateUrl: './review-page.component.html',
  styleUrls: ['./review-page.component.scss']
})
export class ReviewPageComponent implements OnInit {

  constructor(private routerService: RouterService) { }

  lobs = [
    {
      key:  'WC',
      value:  'Workers Compensation'
    },
    {
      key:  'AL',
      value:  'Automobile'
    },
    {
      key:  'GL',
      value:  'General Liability'
    }
  ];

  ngOnInit() {
  }

  previousPage() {
    this.routerService.goToPreviousPage();
  }

}
