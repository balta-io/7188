import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    let number = this.route.snapshot.paramMap.get('number');
    console.log(number);
  }

}
