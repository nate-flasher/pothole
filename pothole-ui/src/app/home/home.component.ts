import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router:Router){}
  

  title = 'pothole-ui';
  buttonClicks = 0;
  displayString = 'Potholes Detected: ' + this.buttonClicks;

  onButtonClick() {
    this.buttonClicks++;
    this.displayString = 'Potholes Detected: ' + this.buttonClicks;
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit(): void {
  }

}
