
//angular Imports Start//
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
//angular import End //

//Component Import start//
import { AppComponent } from './app.component';
//Component Tmport end//

//Services Import start//
import { MyApiService } from './Services/my-api.service';
//Services Import end//

//pipes Import start //
import { DatePipe } from '@angular/common';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { SearchResultComponent } from './Components/search-result/search-result.component'
//pipes Import end//
//other libraries statr //
//other libraries end//
@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchResultComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule
  ],
  providers: [MyApiService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
