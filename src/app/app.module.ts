import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([{
      path:'home',
      loadChildren:()=>import("./features/additive-finder/additive-finder.module").then(fichier=>fichier.AdditiveFinderModule)
    },{
      path:'',
      redirectTo:'home',
      pathMatch:'full'
    },{
      path:'**',
      redirectTo:'home',
      pathMatch:'full'
    }]),
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
