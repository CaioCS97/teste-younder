import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { BarraSuperiorComponent } from './barra-superior.component';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatSidenavModule],
  exports: [],
  declarations: [BarraSuperiorComponent],
  providers: [],
})
export class BarraSuperiorModule {}
