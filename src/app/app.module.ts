import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZuulProjectComponent } from './zuul-project/zuul-project.component';

@NgModule({
  declarations: [
    AppComponent,
    ZuulProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
