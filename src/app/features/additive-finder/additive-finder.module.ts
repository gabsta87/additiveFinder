import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from '../additive-finder/container/main/main.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchpageComponent,
    DetailpageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([{
      path:'',
      component:MainComponent
    }])
  ]
})
export class AdditiveFinderModule { }
