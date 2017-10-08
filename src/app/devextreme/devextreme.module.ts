import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DevextremeRoutingModule  } from './devextreme.routing';

import { HomeDevextremeComponent } from './home-devextreme/home-devextreme.component';
import { SortTabelComponent } from './sort-tabel/sort-tabel.component';
import { DevExtremeModule } from 'devextreme-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModule,
    DevextremeRoutingModule

  ],
  declarations: [ HomeDevextremeComponent, SortTabelComponent]
})
export class DevextremeModule { }
