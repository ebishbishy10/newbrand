import { Component, OnInit } from '@angular/core';
import { MyApiService } from 'src/app/Services/my-api.service';
import { FlightSearchResultModule } from 'src/app/models/flight-search-result/flight-search-result.module';
import { error } from 'util';
import { SearchFlightModule } from 'src/app/models/search-flight/search-flight.module';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  constructor(private search:MyApiService) { }
  result:FlightSearchResultModule;
  searchFlight:SearchFlightModule;
  ngOnInit() {
     let responce = this.search.srarchFlight(this.searchFlight);
     if (responce == error) {
       console.log (responce);
     }
     else{
       this.result = responce;
     }
  }
  


}
