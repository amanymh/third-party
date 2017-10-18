import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { DevextremeRoutingModule  } from './devextreme.routing';

import { HomeDevextremeComponent } from './home-devextreme/home-devextreme.component';
import { SortTabelComponent } from './tabels/sort-tabel/sort-tabel.component';
import { DevExtremeModule } from 'devextreme-angular';
import { TabelComponent } from './tabels/tabel/tabel.component';
import { BathEditingComponent } from './tabels/bath-editing/bath-editing.component';
import { CellEditingComponent } from './tabels/cell-editing/cell-editing.component';
import { DatavalidationEditingComponent } from './tabels/datavalidation-editing/datavalidation-editing.component';
import { FormEditingComponent } from './tabels/form-editing/form-editing.component';
import { PopupEditingComponent } from './tabels/popup-editing/popup-editing.component';
import { CascadingEditingComponent } from './tabels/cascading-editing/cascading-editing.component';
import { GroupingTabelComponent } from './tabels/grouping-tabel/grouping-tabel.component';
import { FiltringComponent } from './tabels/filtring/filtring.component';

import { ColumnsComponent } from './tabels/columns/columns.component';
import { MultiRowHeaderComponent } from './tabels/multi-row-header/multi-row-header.component';
import { ColumnResizeComponent } from './tabels/column-resize/column-resize.component';
import { ApperanceComponent } from './tabels/apperance/apperance.component';
import { RightLeftTabelComponent } from './tabels/right-left-tabel/right-left-tabel.component';
import { MasterDetailTabelComponent } from './tabels/master-detail-tabel/master-detail-tabel.component';
import { AreaChartsComponent } from './charts/area-charts/area-charts.component';
import { ChartsComponent } from './charts/charts/charts.component';
import { BarChartsComponent } from './charts/bar-charts/bar-charts.component';
import { DoughnutChartsComponent } from './charts/doughnut-charts/doughnut-charts.component';
import { AccordionComponent } from './accordion/accordion.component';
import { DevMenuComponent } from './dev-menu/dev-menu.component';
import { MultiViewComponent } from './multi-view/multi-view.component';
import { DevtabsComponent } from './devtabs/devtabs.component';
import { TreeViewComponent } from './tree-view/tree-view.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { RangeSelectorComponent } from './range-selector/range-selector.component';
import { RangeSliderComponent } from './range-slider/range-slider.component';
import { CalenderComponent } from './calender/calender.component';

import 'devextreme-intl';
import { ColorBoxComponent } from './color-box/color-box.component';
import { LoadIndicatorComponent } from './load-indicator/load-indicator.component';
import { PopupPopoverComponent } from './popup-popover/popup-popover.component';
import { ToastProgressbarComponent } from './toast-progressbar/toast-progressbar.component';
import { TimePipe } from './time.pipe';
import { ContextMenuComponent } from './context-menu/context-menu.component';
import { UploadingComponent } from './uploading/uploading.component';
import { SliderComponent } from './slider/slider.component';
import { ListEditingComponent } from './list-editing/list-editing.component';
import { LookUpComponent } from './look-up/look-up.component';


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
     ColumnsComponent,
     MultiRowHeaderComponent, 
     ColumnResizeComponent, ApperanceComponent, 
     RightLeftTabelComponent, MasterDetailTabelComponent, 
     AreaChartsComponent, ChartsComponent, BarChartsComponent,
      DoughnutChartsComponent, AccordionComponent, DevMenuComponent,
       MultiViewComponent, DevtabsComponent, TreeViewComponent,
       FormValidationComponent, RangeSelectorComponent, RangeSliderComponent,
        CalenderComponent, ColorBoxComponent, LoadIndicatorComponent, 
        PopupPopoverComponent, ToastProgressbarComponent, TimePipe, ContextMenuComponent, UploadingComponent, SliderComponent, ListEditingComponent, LookUpComponent],
  providers: []
})
export class DevextremeModule { }
