import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CitiesModule { 
  constructor(
    public airportCode:string,
    public airportName:string,
    public cityName:string,
    public cityCode:string,
    public countryCode:string,
    public countryName:string,
    public regionName:string){}
}
