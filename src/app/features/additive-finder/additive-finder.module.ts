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
import { FormsModule } from '@angular/forms';
import { DangerClassColorPipe } from './pipes/danger-class-color.pipe';
import { DangerTextPipe } from './pipes/danger-text.pipe';
import { HeaderTitlePipe } from './pipes/header-title.pipe';
import { LoginpageComponent } from './components/loginpage/loginpage.component';

@NgModule({
  declarations: [
    HomepageComponent,
    SearchpageComponent,
    DetailpageComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    DangerColorPipe,
    DangerClassColorPipe,
    DangerTextPipe,
    HeaderTitlePipe,
    LoginpageComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule.forChild([{
      path:'',
      component:MainComponent,
      children:[
        {
        path:'search',
        component:SearchpageComponent
      },{
        path:'details',
        component:DetailpageComponent
      },{
        path:'homepage',
        component:HomepageComponent
      },{
        path:'login',
        component:LoginpageComponent
      },{
        path:'',
        redirectTo:'homepage',
        pathMatch:'full'
      }]
    },])
  ],
  providers:[]
})
export class AdditiveFinderModule { }
