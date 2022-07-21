import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
