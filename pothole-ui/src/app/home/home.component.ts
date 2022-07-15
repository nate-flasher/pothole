import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coordinates } from '../coordinates';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router:Router, private service: DataServiceService){}


  title = 'pothole-ui';
  buttonClicks = 0;
  displayString = 'Potholes Detected: ' + this.buttonClicks;
  public lat = 0;
  public long = 0;
  markerPositions: google.maps.LatLngLiteral[] = [];
  model: Coordinates = {
    lat: this.lat,
    long: this.long
  };


  onButtonClick() {
    this.buttonClicks++;
    this.displayString = 'Potholes Detected: ' + this.buttonClicks;
    this.addMarker();
    this.service.setDataObject(this.markerPositions);

    this.getCurrentLocation();
    this.model.lat = this.lat;
    this.model.long = this.long;
    if (this.lat != 0 && this.long != 0) {
      this.service.addData(this.model);
    }
  }

  addMarker() {
    this.getCurrentLocation();
    this.markerPositions.push(new google.maps.LatLng(this.lat, this.long).toJSON());
  }

  getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {

        this.lat = position.coords.latitude;
        this.long = position.coords.longitude;
      });
    }
    else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }
  ngOnInit(): void {
    this.getCurrentLocation()
  }

}
