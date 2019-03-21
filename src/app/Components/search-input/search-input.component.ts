//angular imports Start
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
//angular imports end
// custom models imports start
import { SearchFlightModule } from 'src/app/models/search-flight/search-flight.module';
import { FlightsInfoModule } from 'src/app/models/flights-info/flights-info.module';
//custom models imports end

//     *** Search component ***
// this component is setting a reactive search form
// searchFlight is the reactive form with 'Flights:Formarray' is handling  oneway, roundTrip,and multi 
//all togther by adding and removing from 'Flights';
// on submit the api should be created in the right form SearchFlightModule

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
//  varuables
  searchFlight: FormGroup;

  flight = new FormGroup({
    "departing": new FormControl(),
    "landing": new FormControl(),
    "departingD": new FormControl()
  });

  constructor() { }

  ngOnInit() {
    //setting up the Form with  Defult values
    this.searchFlight = new FormGroup({
      // intial flightType is one way//
      // to set onther flight type as intial stae make sure to 
      //add Fligts in the Flights array
      "flightType": new FormControl('OneWay'),
      "Direct": new FormControl(false),
      "Flights": new FormArray([]),
      "returnDate": new FormControl(),
      "adults": new FormControl(0),
      "child": new FormControl(0),
      "infent": new FormControl(0),
      "class": new FormControl('Economy')
    });
    // set Flight array with OneWay as initial state
    //uncument another one for round and another for multi
    (<FormArray>this.searchFlight.get("Flights")).push(this.flight);
    // (<FormArray>this.searchFlight.get("Flights")).push(this.flight);
    // (<FormArray>this.searchFlight.get("Flights")).push(this.flight);
    this.searchFlight.get("flightType").valueChanges.subscribe(
      (value) => { this.intial(value) }
    )
  }







  //one way start//
  //one way end//

  //round trip start//

  roundTripI() {

    const flight = new FormGroup({
      "departing": new FormControl('sdfsdf'),
      "landing": new FormControl('asdfsd'),
      "departingD": new FormControl()
    });

    this.removeArrayControllers();

    (<FormArray>this.searchFlight.get("Flights")).push(flight);

    const Rflight = new FormGroup({
      "departing": new FormControl(this.searchFlight.get('Flights').value[0].landing),
      "landing": new FormControl(this.searchFlight.get('Flights').value[0].departing),
      "departingD": new FormControl(this.searchFlight.get('returnDate').value)
    });

    (<FormArray>this.searchFlight.get("Flights")).push(Rflight);
  }
  //round trip end//

  // multi trip start//
  // multi trip end//

  //other functions statrt//

  // reset the inetial value of the array when flightType is changed
  intial(mvalue) {

    if (mvalue == 'OneWay') {

      this.removeArrayControllers();

      (<FormArray>this.searchFlight.get("Flights")).push(this.flight);

      return
    }
    if (mvalue == 'RoundTrip') {

      this.roundTripI();

      return
    }

    if (mvalue == 'Multi') {

      this.removeArrayControllers();

      (<FormArray>this.searchFlight.get("Flights")).push(this.flight);

      (<FormArray>this.searchFlight.get("Flights")).push(this.flight);

      (<FormArray>this.searchFlight.get("Flights")).push(this.flight);

      return
    }
    console.log(mvalue);

  }

  //to match the formGroups name with the Flights array index
  indexadd1(index: number) {
    return index + 1;

  }

  //call to rest form array
  removeArrayControllers() {
    while ((<FormArray>this.searchFlight.get("Flights")).length >= 1) {
      (<FormArray>this.searchFlight.get("Flights")).removeAt(0);
    }
  }

  // to add more flights to flights array by add buton
  onAddFlight() {

    (<FormArray>this.searchFlight.get("Flights")).push(this.flight);

  }

  // to subment the form and call the search api
  onSubmit() {
    console.log(this.searchFlight);
    //asign the form values to  SearchFlightModule
    // this.searchApi.Cclass = this.searchFlight.get('class').value;
    // this.searchApi.flightType=this.searchFlight.get('flightType').value;
    // this.searchApi.passengers =this.searchFlight.get('adult').value;
    // this.searchApi.showDirect =this.searchFlight.get('Direct').value;
  }

  //other functions end
}
