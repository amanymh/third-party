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
import { GroupingTabelComponent } from './grouping-tabel/grouping-tabel.component';
import { FiltringComponent } from './filtring/filtring.component';

import { ColumnsComponent } from './columns/columns.component';
import { MultiRowHeaderComponent } from './multi-row-header/multi-row-header.component';
import { ColumnResizeComponent } from './column-resize/column-resize.component';
import { ApperanceComponent } from './apperance/apperance.component';
import { RightLeftTabelComponent } from './right-left-tabel/right-left-tabel.component';
import { MasterDetailTabelComponent } from './master-detail-tabel/master-detail-tabel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModule,
    DevextremeRoutingModule

  ],
  declarations: [ HomeDevextremeComponent, 
  SortTabelComponent, TabelComponent,
   BathEditingComponent, CellEditingComponent, 
   DatavalidationEditingComponent, FormEditingComponent,
    PopupEditingComponent, CascadingEditingComponent, 
    GroupingTabelComponent, FiltringComponent, 
     ColumnsComponent, MultiRowHeaderComponent, ColumnResizeComponent, ApperanceComponent, RightLeftTabelComponent, MasterDetailTabelComponent]
})
export class DevextremeModule { }
