import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DevextremeRoutingModule  } from './devextreme.routing';

import { HomeDevextremeComponent } from './home-devextreme/home-devextreme.component';
import { SortTabelComponent } from './sort-tabel/sort-tabel.component';
import { DevExtremeModule } from 'devextreme-angular';
import { TabelComponent } from './tabel/tabel.component';
import { BathEditingComponent } from './bath-editing/bath-editing.component';
import { CellEditingComponent } from './cell-editing/cell-editing.component';
import { DatavalidationEditingComponent } from './datavalidation-editing/datavalidation-editing.component';
import { FormEditingComponent } from './form-editing/form-editing.component';
import { PopupEditingComponent } from './popup-editing/popup-editing.component';
import { CascadingEditingComponent } from './cascading-editing/cascading-editing.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModule,
    DevextremeRoutingModule

  ],
  declarations: [ HomeDevextremeComponent, SortTabelComponent, TabelComponent, BathEditingComponent, CellEditingComponent, DatavalidationEditingComponent, FormEditingComponent, PopupEditingComponent, CascadingEditingComponent]
})
export class DevextremeModule { }
