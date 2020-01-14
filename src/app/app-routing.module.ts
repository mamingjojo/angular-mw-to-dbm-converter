import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PowerConverterComponent } from './power-converter/power-converter.component';

const routes: Routes = [
  { path: "", redirectTo: "power-converter", pathMatch: "full" },
  { path: "power-converter", component: PowerConverterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
