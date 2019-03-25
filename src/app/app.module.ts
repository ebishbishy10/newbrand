
//angular Imports Start//
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router'
//angular import End //

//Component Import start//
import { AppComponent } from './app.component';
import { SearchInputComponent } from './Components/search-input/search-input.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
//Component Tmport end//

//Services Import start//
import { MyApiService } from './Services/my-api.service';
//Services Import end//

//pipes Import start //
import { DatePipe } from '@angular/common';
//pipes Import end//
//other libraries statr //
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { NewSearchComponent } from './Components/new-search/new-search.component';

 const routes :Routes =[{
   path:'',component:SearchInputComponent
 }]

//other libraries end//
@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    SearchResultComponent,
    NewSearchComponent
  ],
  imports: [
   //angular imports
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes,{scrollPositionRestoration:'top'}),
    //other imports
    MatFormFieldModule,
    MatRadioModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  providers: [MyApiService,DatePipe,MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
