import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// this module contains information requierd for each flight //
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class FlightsInfoModule {
  constructor (
    public departingCity: string,
    public arrivalCity: string,
    public departionDate:any,
  ) { }
}
