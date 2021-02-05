import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisteredproductService } from './services/registeredproduct.service';
import { RegprodOwlComponent } from './components/regprod-owl/regprod-owl.component';
import { HomeComponent } from './components/home/home.component';
import { RegprodQcComponent } from './components/regprod-qc/regprod-qc.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewRegistrationComponent } from './components/view-registration/view-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    RegprodOwlComponent,
    HomeComponent,
    RegprodQcComponent,
    ViewRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RegisteredproductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
