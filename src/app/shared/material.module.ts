import { NgModule } from '@angular/core';

import {

  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule,
  MatGridListModule,
  MatCardModule,
  MatButtonModule

} from '@angular/material';


@NgModule({
  exports: [
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class MaterialModule { }
