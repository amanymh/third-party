

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ButtonsComponent } from './material/buttons/buttons.component';
import { NotfoundComponent } from './notfound.component';
import { HomeMaterialComponent  } from './material/home-material/home-material.component';
import { HomeBootstrapComponent } from './bootstrap/home-bootstrap/home-bootstrap.component';
import { HomeDevextremeComponent } from './devextreme/home-devextreme/home-devextreme.component';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './home-app.component';
const routes: Routes = [
     {
    path: "bootstrap",
    component: HomeBootstrapComponent

  },
      {
    path: "material",
    component:  HomeMaterialComponent 

  },
  {
    path: "devextreme",
    component:  HomeDevextremeComponent

  },
   {
    path: "home",
    component: HomeAppComponent

  },
    
     {
    path: "",
    component: HomeAppComponent

  },
   {
    path: '**',
    component:  NotfoundComponent

  }
];

@NgModule({
    imports: [ RouterModule. forRoot(routes)],
 exports: [RouterModule]
})

export class AppRoutingModule {}