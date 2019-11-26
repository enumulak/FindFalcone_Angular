import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FalconeService } from './shared/services/falcone.service';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';
import { NavComponent } from './nav/nav.component';
import { PlanetSelectorComponent } from './find-falcone/planet-selector/planet-selector.component';
import { VehicleSelectorComponent } from './find-falcone/vehicle-selector/vehicle-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFalconeComponent,
    ResultComponent,
    StartComponent,
    NavComponent,
    PlanetSelectorComponent,
    VehicleSelectorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    FalconeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
