import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  headername = "Angular 14 Tutorial";
  salary = 1000;
  isDisabled=true;
  colorname="red";
  font="20px"
  classname ="headclass"; 
  stylevalue = {
    "color":"green",
    "font-size":"60px"
  };
  
  colors = ['green','red','blue','black','white']
  ngOnInit(): void {
  }
  FunctionClick(name:string){
    alert(name)
  };
}
