import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
height: number;
  weight: number;
  calorie: number;
  carbs: number;
  protein: number;
  fats: number;
  calorieMessage: string;
  constructor(public navCtrl: NavController) {

  }

}
