import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { DetailpageComponent } from './components/detailpage/detailpage.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DangerColorPipe } from './pipes/danger-color.pipe';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchpageComponent,
    DetailpageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DangerColorPipe],
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
