import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  zoom = 15;
  center!: google.maps.LatLngLiteral;
  markers: any;
  options: google.maps.MapOptions = {
    scrollwheel: true,
    mapTypeControl: false,
    streetViewControl: false,
  }


  markerOptions!: google.maps.MarkerOptions;
  markerPosition!: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.center = {
      lat: 53.86527143576552,
      lng: -2.3945739053711863
    }

    this.markerOptions = {
      draggable: false,
      label: {
        color: 'black',
        text: 'Aurora Beauty'
      }
    };

    this.markerPosition = {
      lat: 53.86527143576552,
      lng: -2.3945739053711863
    }

  }


}
