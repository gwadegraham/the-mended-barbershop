import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { InstaFeedComponent } from './insta-feed/insta-feed.component';
import { HeroComponent } from './hero/hero.component';
import { HoursInfoComponent } from './hours-info/hours-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    InstaFeedComponent,
    HeroComponent,
    HoursInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
