import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { SecurityUtil } from 'src/app/utils/security.util';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  public user: UserModel = null;

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.user = SecurityUtil.get();
  }

  logout() {
    SecurityUtil.clear();
    this.navCtrl.navigateRoot('/login');
  }

}
