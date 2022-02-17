import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ZuulProjectComponent } from './zuul-project/zuul-project.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'zuul-project', component: ZuulProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
