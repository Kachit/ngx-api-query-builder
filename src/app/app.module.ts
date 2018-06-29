import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiQueryBuilderModule } from './api-query-builder-module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ApiQueryBuilderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
