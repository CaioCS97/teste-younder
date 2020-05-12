import { MatCardModule } from '@angular/material/card';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxTinySliderModule } from 'ngx-tiny-slider';

import { LandingPageComponent } from './landing-page.component';

@NgModule({
  imports: [CommonModule, MatCardModule, NgxTinySliderModule],
  exports: [LandingPageModule, NgxTinySliderModule],
  declarations: [LandingPageComponent],
  providers: [],
})
export class LandingPageModule {}
