import { Component, OnInit } from '@angular/core';
import { SearchFlightModule } from './models/search-flight/search-flight.module';
import { FlightsInfoModule } from './models/flights-info/flights-info.module';
import { MyApiService } from './Services/my-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private search: MyApiService){}

  item:SearchFlightModule =new SearchFlightModule('en','KWD','Eg','oneway',[new FlightsInfoModule('Cairo','Alex','March 15, 2019')],[1,1,2],'Economy','test',false,'all');

  ngOnInit (){
    // this.search.srarchFlight(this.item);
  }
}
