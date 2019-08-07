import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent implements OnInit {
  @Input() skip = 0;
  @Input() take = 5;
  @Input() search = '';
  @Input() status = ['confirmed'];
  public orders: any[] = null;

  constructor(
    private service: DataService
  ) { }

  ngOnInit() {
    this
      .service
      .getOrders()
      .subscribe((res: any) => {
        this.orders = res;
      });
  }

}
