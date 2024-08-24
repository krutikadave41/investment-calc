import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { InvestmentService } from '../investment-results/investment.service';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  initialInvestment = '0';
  annualInvestment = '0';
  expectedReturn = '5';
  duration = '10';
  
  constructor(private investmentService: InvestmentService){

  }
  
  onSubmit(){
    console.log("Submitted");
    this.investmentService.calculateInvestmentResults({
     initialInvestment: +this.initialInvestment,
     duration: +this.duration,
     expectedReturn: +this.expectedReturn,
     annualInvestment: +this.annualInvestment
    });
  }
}
