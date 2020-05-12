import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';

const routes: Routes = [{ path: '', component: BarraSuperiorComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
