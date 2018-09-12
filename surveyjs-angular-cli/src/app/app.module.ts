import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { SurveyComponent } from './survey.component';
import { SurveyEditorComponent } from './survey.editor.component';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    SurveyComponent,
    SurveyEditorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }