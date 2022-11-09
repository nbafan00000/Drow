import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { ClinicianPageComponent } from './pages/clinician-page/clinician-page.component';
import { EegPageComponent } from './pages/eeg-page/eeg-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'clinicians', component: ClinicianPageComponent},
  {path: 'eeg-headset', component: EegPageComponent},
  {path: 'blog', component: BlogPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
