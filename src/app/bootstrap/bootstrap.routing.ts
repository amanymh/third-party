 import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { HomeBootstrapComponent } from './home-bootstrap/home-bootstrap.component';

const routes: Routes = [
    {
    path: "bootstrap",
    component: HomeBootstrapComponent ,
    
   children: [

    { path: "button",
    component: ButtonComponent
  }

   ] 

  }
  
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class BootstrapRoutingModule {}

