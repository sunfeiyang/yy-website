import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CulturePoemComponent } from './culture-poem/culture-poem.component';
import { CultureAllegoricalComponent } from './culture-allegorical/culture-allegorical.component';
import { CultureDicComponent } from './culture-dic/culture-dic.component';
import { CultureFamousComponent } from './culture-famous/culture-famous.component';
import { CultureIdiomComponent } from './culture-idiom/culture-idiom.component';
import { CultureTodayhistoryComponent } from './culture-todayhistory/culture-todayhistory.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    CulturePoemComponent,
    CultureAllegoricalComponent,
    CultureDicComponent,
    CultureFamousComponent,
    CultureIdiomComponent,
    CultureTodayhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
