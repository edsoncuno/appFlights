import { Injectable } from '@angular/core';

import { Flight } from './flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  flights : Flight[] = [
    {
      id : 1, origin : "Atlanta", destination : "New York",
      flightNumber : 456, depart : new Date("2020-02-28T17:17:20.315Z"),
      arrive : new Date("2020-02-28T20:17:20.315Z"), nonstop : true
    },
    {
      id : 2, origin : "Phoenix", destination : "Denver",
      flightNumber : 23, depart : new Date("2020-02-28T16:00:00.000Z"),
      arrive : new Date("2020-02-28T18:00:00.000Z"), nonstop : false
    },
    {
      id : 1, origin : "Jackson", destination : "Chicago",
      flightNumber : 234, depart : new Date("2020-10-02T15:30:00.000Z"),
      arrive : new Date("2020-10-02T18:30:00.000Z"), nonstop : true
    },
  ]

  constructor() { }

  getAllFlights() : Flight[] {
    return this.flights;
  }
}
