import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features-module/application/dashboard/dashboard.component';
const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features-module/features-module.module').then(m => m.FeaturesModuleModule)
  },
  { path: '', redirectTo: '/features-module/application/dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
