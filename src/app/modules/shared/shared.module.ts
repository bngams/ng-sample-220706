import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [],
  exports: [
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
