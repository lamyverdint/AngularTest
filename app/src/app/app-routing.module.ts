import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ZuulProjectComponent } from './zuul-project/zuul-project.component';
import { AppPaths } from './models/enums/app-paths.enum';

const routes: Routes = [
  { path: '', redirectTo: AppPaths.HOME_PAGE, pathMatch: 'full' },
  { path: AppPaths.HOME_PAGE, component: HomePageComponent },
  { path: AppPaths.ZUUL_PROJECT, component: ZuulProjectComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
