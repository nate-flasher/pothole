import { Component, Input, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  constructor(private service: DataServiceService, private router:Router) {


   }

  center: google.maps.LatLngLiteral = {lat: 0, lng: 0};

  markerOptions: google.maps.MarkerOptions = {draggable: false};

  markerPositions: google.maps.LatLngLiteral[] = [];

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      }
    })

    this.markerPositions = this.service.getDataObject();
  }
  
  goToPage(pageName:string):void{
    this.router.navigate([`${pageName}`]);
  }

}
