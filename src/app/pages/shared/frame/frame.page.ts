import { Component, OnInit } from '@angular/core';
import { NavController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private menuCtrl: MenuController,
  ) { }

  ngOnInit() {
  }

  goToPage(page: string) {
    this.menuCtrl.close();
    this.navCtrl.navigateRoot(page);
  }
}
