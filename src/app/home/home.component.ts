import { Component, OnInit } from '@angular/core';

import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  flights : Flight[];
  origins : any[];
  destinations : any[];
  origin : string;
  destination : string;

  constructor(private objFlightsService: FlightsService) {
    this.flights = objFlightsService.getAllFlights();
    this.origins = objFlightsService.getAllOrigin();
    this.destinations = objFlightsService.getAllDestination();
  }

  ngOnInit(): void {
  }

  query() : void {
    this.flights = this.objFlightsService.getQueryFlights(this.origin,this.destination);
  }

}
