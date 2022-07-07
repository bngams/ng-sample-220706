import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { GetStartedComponent, GetStartedSubComponent } from './pages/get-started/get-started.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const COMPONENTS = [
  AppComponent,
  HeaderComponent
];

const COMPONENTS_PAGES = [
    HomeComponent,
    GetStartedComponent,
    NotFoundComponent,
    GetStartedSubComponent,
]

const PIPES = [
  ExponentialStrengthPipe
];

@NgModule({
  declarations: [
    ...COMPONENTS_PAGES,
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  // exports: [
  //   ExponentialStrengthPipe
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
