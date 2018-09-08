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

@NgModule({
  declarations: [
    MyApp, 
    HomePage, 
    RegistrationPage, 
    LoginPage, 
    LandingPage, 
    PaymentPage,
    MapsPage, 
    TimerComponent,
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
  ],

  providers: [
    StatusBar,
    SplashScreen,

    { provide: ErrorHandler, useClass: IonicErrorHandler },
   

  ],
})
export class AppModule { }
