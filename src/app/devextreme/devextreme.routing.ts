 import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { SortTabelComponent } from './tabels/sort-tabel/sort-tabel.component';
import { HomeDevextremeComponent } from './home-devextreme/home-devextreme.component';

const routes: Routes = [
    {
    path: "bootstrap",
    component: HomeDevextremeComponent,
    
   children: [

    { path: "button",
    component: SortTabelComponent 
  }

   ] 

  }
  
];

@NgModule({
    imports: [ RouterModule.forChild(routes)],
 exports: [RouterModule]
})

export class DevextremeRoutingModule {}

