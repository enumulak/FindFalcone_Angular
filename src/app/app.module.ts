import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';
import { ResultComponent } from './result/result.component';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    FindFalconeComponent,
    ResultComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
