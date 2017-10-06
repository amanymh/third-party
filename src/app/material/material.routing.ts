 import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { MenuComponent } from './menu/menu.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { HomeMaterialComponent  } from './home-material/home-material.component';

const routes: Routes = [
    {
    path: "material",
    component: HomeMaterialComponent,
    
   children: [  {
    path: "menu",
    component: MenuComponent

  },
   {
    path: "buttons",
    component:  ButtonsComponent

  }]
  }
   
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class MaterialRoutingModule {}

