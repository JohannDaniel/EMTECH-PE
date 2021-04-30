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
  calorieMessage: string;
  gender: string;
  age: number;
  activityLevel: number;
bmr: number;
 x: string = "testing";
  y: string = "test also";

constructor(public navCtrl: NavController) {}

calculateBMR() {
  
    
    if (this.gender === "m") { 
      this.bmr = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5);
    }
    else if (this.gender === "f") { 
      this.bmr = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161);
    } 
    else{
      this.bmr = 0.01;
    }
      this.calorie = parseFloat((this.bmr * this.activityLevel).toFixed(2));
    }
    }
