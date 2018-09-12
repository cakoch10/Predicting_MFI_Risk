import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { RegistrationPage } from "../pages/registration/registration";
import { LoginPage } from "../pages/login/login";
import { LandingPage } from "../pages/landing/landing";
import { PaymentPage } from "../pages/payment/payment";
// import { ComponentsModule } from "../components/components.module";
import { HttpModule } from "@angular/http";
// import { MapsPage } from "../pages/maps/maps";
import { MapsPage } from "../pages/maps/maps";
import { AgmCoreModule } from "../../node_modules/@agm/core";
import { TimerComponent } from "../pages/timer/timer";

import { SurveyDetailsPage } from '../pages/survey-details/survey-details';
import { SurveyResultsPage } from '../pages/survey-results/survey-results';

import { SurveyComponent } from '../components/survey/survey';
import { SurveyProvider } from '../providers/survey/survey';

import { ApiWrapper } from '../providers/survey/api-wrapper';
import { ChartComponent } from '../components/chart/chart';

import { ChartsModalPage } from '../modals/charts-modal';


// import { SurveyComponent } from '../../node_modules/survey-angular';
// import { SurveyComponent } from '../../node_modules/surveyjs-editor';

@NgModule({
  declarations: [
    MyApp, 
    HomePage,
    RegistrationPage, 
    LoginPage, 
    LandingPage, 
    PaymentPage,
    SurveyComponent,
    SurveyDetailsPage,
    SurveyResultsPage,
    MapsPage, 
    TimerComponent,
    ChartComponent,
    ChartsModalPage
  ],

  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCFs3pRqf9Rqxx7SItWDX9hK_XobVgCLQk',
      libraries: ['geometry'],
      }),    
    IonicModule.forRoot(MyApp, {}, { links: [
      { component: LoginPage, name: "login", segment: "login"},
      { component: HomePage, name: "home", segment: "home" },
      { component: LandingPage, name: "landing", segment: "landing"},
      { component: PaymentPage, name: "payment", segment: "payment"},
      { component: MapsPage, name: "maps", segment: "maps"},
      { component: RegistrationPage, name: "registration", segment: "registration" }]})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegistrationPage,
    LoginPage,
    LandingPage,
    PaymentPage,
    MapsPage,
    TimerComponent,
    SurveyDetailsPage,
    SurveyResultsPage,
    ChartsModalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SurveyProvider,
    ApiWrapper
  ],
})
export class AppModule { }
