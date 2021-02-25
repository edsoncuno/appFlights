import { Component, OnInit } from '@angular/core';

import { Flight } from '../flight.model';
import { FlightsService } from '../flights.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  id : Number;
  origin : String;
  destination : String;
  flightNumber : Number;
  depart : Date;
  arrive : Date;
  nonstop : Boolean;
  flights : Flight[];

  constructor(private objFlightsService: FlightsService) { }

  ngOnInit(): void {
    this.flights = this.objFlightsService.getAllFlights();
  }

  post(){
    const objFlight : Flight = {
      origin : this.origin,
      destination : this.destination,
      flightNumber : this.flightNumber,
      depart: this.depart,
      arrive : this.arrive,
      nonstop : this.nonstop
    }
    this.objFlightsService.postFlight(objFlight);
  }

  toggleNonStop(){
    this.nonstop = !this.nonstop;
  }


}
