import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HomeComponent } from './pages/home-page/home/home.component';
import { SleepEfficiencyComponent } from './pages/home-page/sleep-efficiency/sleep-efficiency.component';
import { HeadsetComponent } from './pages/home-page/headset/headset.component';
import { BrainTrainingComponent } from './pages/home-page/brain-training/brain-training.component';
import { ParallaxComponent } from './pages/home-page/parallax/parallax.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ClinicianPageComponent } from './pages/clinician-page/clinician-page.component';
import { ClinicianHomeComponent } from './pages/clinician-page/clinician-home/clinician-home.component';
import { ClinicianAppWorksComponent } from './pages/clinician-page/clinician-app-works/clinician-app-works.component';
import { TestimonialsComponent } from './pages/home-page/testimonials/testimonials.component';
import { InterestButtonsComponent } from './pages/clinician-page/clinician-app-works/interest-buttons/interest-buttons.component';
import { EegPageComponent } from './pages/eeg-page/eeg-page.component';
import { EegHomeComponent } from './pages/eeg-page/eeg-home/eeg-home.component';
import { EegContentComponent } from './pages/eeg-page/eeg-content/eeg-content.component';
import { ForCliniciansComponent } from './pages/home-page/for-clinicians/for-clinicians.component';
import { PreOrderComponent } from './pages/home-page/pre-order/pre-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    HomeComponent,
    SleepEfficiencyComponent,
    HeadsetComponent,
    BrainTrainingComponent,
    ParallaxComponent,
    FooterComponent,
    HomePageComponent,
    ClinicianPageComponent,
    ClinicianHomeComponent,
    ClinicianAppWorksComponent,
    TestimonialsComponent,
    InterestButtonsComponent,
    EegPageComponent,
    EegHomeComponent,
    EegContentComponent,
    ForCliniciansComponent,
    PreOrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({
      "radius": 61,
      "outerStrokeWidth": 6,
      "innerStrokeWidth": 6,
      "space": -6,
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
