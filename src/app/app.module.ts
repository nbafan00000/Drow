import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 62,
      "outerStrokeWidth": 6,
      "outerStrokeColor": "#323232",
      "innerStrokeWidth": 0,
      "animationDuration": 1000,
      "showUnits": true,
      "showBackground": false,
      "showTitle": true,
      "clockwise": true,
      "startFromZero": false,
      "showSubtitle": false,
      "lazy": true,
      "renderOnClick": false,
      "titleColor": "#ffffff",
      "unitsColor": "#ffffff",
      "titleFontSize": "28",
      "unitsFontSize": "28",
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
