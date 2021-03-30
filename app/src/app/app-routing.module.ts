import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ZuulProjectComponent } from './zuul-project/zuul-project.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'zuul-project', component: ZuulProjectComponent },

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
