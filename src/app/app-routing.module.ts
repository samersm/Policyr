import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { component: HomeComponent, path: '' },
  { component: AboutComponent, path: 'about' },
  { component: ComingSoonComponent, path: 'coming-soon' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
