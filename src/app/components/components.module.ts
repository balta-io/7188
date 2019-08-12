import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { IonicModule } from '@ionic/angular';
import { OrderListComponent } from './order-list/order-list.component';
import { MonthlySalesChartComponent } from './monthly-sales-chart/monthly-sales-chart.component';
import { OrderStatusBadgeComponent } from './order-status-badge/order-status-badge.component';
import { UserCardComponent } from './user-card/user-card.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    NavbarComponent,
    LoadingComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
    MonthlySalesChartComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    NavbarComponent,
    LoadingComponent,
    OrderListComponent,
    OrderStatusBadgeComponent,
    MonthlySalesChartComponent,
    UserCardComponent,
  ]
})
export class ComponentsModule { }
