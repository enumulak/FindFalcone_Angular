import { StartComponent } from './start/start.component';
import { ResultComponent } from './result/result.component';
import { FindFalconeComponent } from './find-falcone/find-falcone.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'findfalcone', component: FindFalconeComponent },
  { path: 'result', component: ResultComponent },
  { path: 'start', component: StartComponent },
  { path: '', redirectTo: '/start', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
