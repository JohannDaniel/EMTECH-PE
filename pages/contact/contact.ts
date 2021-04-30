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
carbohydrates: number;
proteins: number;
fats: number;
carboMessage: string;
proteinsMessage: string;
fatsMessage: string;

constructor(public navCtrl: NavController) {}

calculateBMR() {

    if (this.gender = "m") { 
      this.bmr = (10 * this.weight + 6.25 * this.height - 5 * this.age + 5);
    }
    else if (this.gender = "f") { 
      this.bmr = (10 * this.weight + 6.25 * this.height - 5 * this.age - 161);
    } 
    else{
      this.bmr = 0.01;
    }
      this.calorie = parseFloat((this.bmr * this.activityLevel).toFixed(2));
      this.carbohydrates = parseFloat((0.60 * this.calorie) .toFixed(0));
      this.proteins = parseFloat((.125 * this.calorie) .toFixed(0));
      this.fats = parseFloat((.275 * this.calorie) .toFixed(0));
    }
    
    }

