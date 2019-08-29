import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridHeaderComponent } from './grid-header/grid-header.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroService } from './hero.service';

@NgModule({
  declarations: [
    AppComponent,
    GridHeaderComponent,
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
