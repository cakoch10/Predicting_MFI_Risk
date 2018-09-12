// import { NgModule } from '@angular/core';
// import { IonicPageModule } from 'ionic-angular';
// import { LandingPage } from './landing';

// @NgModule({
//   declarations: [
//     LandingPage,
//   ],
//   imports: [
//     IonicPageModule.forChild(LandingPage),
//   ],
// })
// export class LandingPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyDetailsPage } from './survey-details';

@NgModule({
  declarations: [
    SurveyDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(SurveyDetailsPage),
  ],
})
export class SurveyDetailsPageModule {}
