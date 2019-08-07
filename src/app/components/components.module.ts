import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { OrderListComponent } from './order-list/order-list.component';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { OrderStatusBadgeComponent } from './order-status-badge/order-status-badge.component';

@NgModule({
  declarations: [
    NavbarComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
    MonthlySalesChartComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NavbarComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
    MonthlySalesChartComponent,
  ]
})
export class ComponentsModule { }
