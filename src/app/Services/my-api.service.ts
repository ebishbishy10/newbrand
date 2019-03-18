//angular Imports Start//
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//angular import End //
//Imported Module start//
import { SearchFlightModule } from '../models/search-flight/search-flight.module';
import { FlightsInfoModule } from '../models/flights-info/flights-info.module';
import { FlightSearchResultModule } from '../models/flight-search-result/flight-search-result.module';
//Imported Module send //
@Injectable({
  providedIn: 'root'
})
export class MyApiService {

  constructor(private httpClient: HttpClient) { }

  //*** flight search function *** //
  // example api:
  // http://localhost:8080/flights/flightsSearch{Api}/en{language}/KWD{Currency}/Eg{pointcode}/oneway{type}/KWI-CAI-March%2015,%202019/A-1-C-0-I-0/Economy/False/all/0/0/Direct?searchID=test5


  srarchFlight(searchFlight: SearchFlightModule) {
    let language = searchFlight.lan;
    let currency = searchFlight.Currency;
    let SearchPoint = searchFlight.pointOfReservation;
    let flightType = searchFlight.flightType;
    let flightInfo = this.flightInfoFormatter(searchFlight.flightsInfo);
    let searchId = searchFlight.serachId;
    let passengers = this.passingerFormatter(searchFlight.passengers);
    let Cclass = searchFlight.Cclass;
    let directOnly = searchFlight.showDirect;
    // !!!dont add spaces between the constracted Api below
    let api: string = `http://localhost:8080/flights/flightsSearch/${language}/${currency}/${SearchPoint}/${flightType}/${flightInfo}/${passengers}/${Cclass}/${directOnly}/0/0/Direct?serchID=${searchId}`;
    let result: any;
    let errorOut: any;
    this.httpClient.get<FlightSearchResultModule>(api).subscribe((data: any) => { result = data },
      (error) => { errorOut = error }
    )
    if (errorOut) {
      return errorOut;
      //return error if any
    }
    else {
      return result;

    }
    // console.log(api);
  }


  passingerFormatter(array: any[]) {
    // convert array of passanger type number to A-1-C-0-I-0
    let passengersString: string;
    passengersString = 'A-' + array[0] + '-C-' + array[1] + '-I-' + array[2];
    return passengersString;
  }


  flightInfoFormatter(array: FlightsInfoModule[]) {
    //return string of flights in KWI-CAI-March%2015%202019_ format
    let FlightsInfoArray: string = '';
    for (let element of array) {
      let fligt: string = element.departingCity + '-' + element.arrivalCity + '-' + element.departionDate + '_';
      FlightsInfoArray = FlightsInfoArray + fligt;
    }
    return FlightsInfoArray.slice(0, -1);
  }
}
