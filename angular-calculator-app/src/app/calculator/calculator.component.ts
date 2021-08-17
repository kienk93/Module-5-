import { Component, OnInit } from '@angular/core';
import {Calculator} from './calculator';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  calculator: Calculator = {};
  constructor() { }

  ngOnInit() {
  }
  calculate(): number {
    switch (this.calculator.operator) {
      case '+': {
        return this.calculator.first + this.calculator.second;
      }
      case '-': {
        return this.calculator.first - this.calculator.second;
      }
      case '*': {
        return this.calculator.first * this.calculator.second;
      }
      case '/': {
        return this.calculator.first / this.calculator.second;
      }
    }
  }

}
