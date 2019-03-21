import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { SearchFlightModule } from 'src/app/models/search-flight/search-flight.module';
import { FlightsInfoModule } from 'src/app/models/flights-info/flights-info.module';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {

  searchFlight: FormGroup;
  searchApi: SearchFlightModule;
  flights: FlightsInfoModule;
  OneWay: FormGroup;
  flight = new FormGroup({
    "departing": new FormControl(),
    "landing": new FormControl(),
    "departingD": new FormControl()
  });

  constructor() { }

  ngOnInit() {
    this.searchFlight = new FormGroup({
      "flightType": new FormControl('OneWay'),
      "Direct": new FormControl(false),
      "Flights": new FormArray([]),
      "returnDate": new FormControl(),
      "adults": new FormControl(0),
      "child": new FormControl(0),
      "infent": new FormControl(0),
      "class": new FormControl('Economy')
    });
    (<FormArray>this.searchFlight.get("Flights")).push(this.flight);
    this.searchFlight.get("flightType").valueChanges.subscribe(
     (value)=>{this.intial(value)}
    )
  }

  onSubmit() {
    console.log(this.searchFlight);
    // this.searchApi.Cclass = this.searchFlight.get('class').value;
    // this.searchApi.flightType=this.searchFlight.get('flightType').value;
    // this.searchApi.passengers =this.searchFlight.get('adult').value;
    // this.searchApi.showDirect =this.searchFlight.get('Direct').value;
  }

  onAddFlight() {

    const flight = new FormGroup({
      "departing": new FormControl(),
      "landing": new FormControl(),
      "departingD": new FormControl()
    });
    (<FormArray>this.searchFlight.get("Flights")).push(flight);
    // this.Alenght =(<FormArray>this.searchFlight.get("Flights")).length;

    //  searchFlight.get('Flights').controls;
  }

  indexadd1(index: number) {
    return index + 1;

  }
    intial(mvalue) {
     if(mvalue == 'OneWay'){
      const flight = new FormGroup({
        "departing": new FormControl(),
        "landing": new FormControl(),
        "departingD": new FormControl()
      });
      this.removeArrayControllers ();
      (<FormArray>this.searchFlight.get("Flights")).push(flight);
      return
     }


    if (mvalue == 'RoundTrip') {
      const flight = new FormGroup({
        "departing": new FormControl(),
        "landing": new FormControl(),
        "departingD": new FormControl()
      });
      this.removeArrayControllers ();
      (<FormArray>this.searchFlight.get("Flights")).push(flight); 
      const Rflight = new FormGroup({
        "departing": new FormControl(this.searchFlight.get('Flights').value[0].landing),
        "landing": new FormControl(this.searchFlight.get('Flights').value[0].departing),
        "departingD": new FormControl(this.searchFlight.get('returnDate').value)
      });
     
      (<FormArray>this.searchFlight.get("Flights")).push(Rflight);
      return
    }

    if (mvalue =='Multi') {

      const flight = new FormGroup({
        "departing": new FormControl(),
        "landing": new FormControl(),
        "departingD": new FormControl()
      });
       this.removeArrayControllers ();
      (<FormArray>this.searchFlight.get("Flights")).push(flight);
      (<FormArray>this.searchFlight.get("Flights")).push(flight);
      (<FormArray>this.searchFlight.get("Flights")).push(flight);
      return
    }
    console.log(mvalue);
    
  }

  removeArrayControllers (){
   while ((<FormArray>this.searchFlight.get("Flights")).length>=1) {
    (<FormArray>this.searchFlight.get("Flights")).removeAt(0);
   }
  }

}
