import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HomepageComponent } from './features/additiveFinder/components/homepage/homepage.component';
import { SearchpageComponent } from './features/additiveFinder/components/searchpage/searchpage.component';
import { DetailpageComponent } from './features/additiveFinder/components/detailpage/detailpage.component';
import { HeaderComponent } from './features/additiveFinder/components/header/header.component';
import { FooterComponent } from './features/additiveFinder/components/footer/footer.component';
import { MainComponent } from './features/additiveFinder/container/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SearchpageComponent,
    DetailpageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
