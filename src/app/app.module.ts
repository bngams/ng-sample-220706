import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AppSubComponent } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AppSubComponent,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // exports: [
  //   ExponentialStrengthPipe
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
