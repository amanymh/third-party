import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

import { MaterialRoutingModule } from './material.routing';
import { MenuComponent } from '../material/menu/menu.component';
import { ButtonsComponent } from '../material/buttons/buttons.component';
import { AngularMaterialModule } from './angular-material.module';
import { HomeMaterialComponent } from './home-material/home-material.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TooltipComponent } from './tooltip/tooltip.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SelectComponent } from './select/select.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputComponent } from './input/input.component';
import { SliderComponent } from './slider/slider.component';
import { SlideToggleComponent } from './slide-toggle/slide-toggle.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SteperComponent } from './steper/steper.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { TabelComponent } from './tabel/tabel.component';
import { FilterTabelComponent } from './filter-tabel/filter-tabel.component';
import { SortheaderTabelComponent } from './sortheader-tabel/sortheader-tabel.component';
import { TabelPaginationComponent } from './tabel-pagination/tabel-pagination.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { ListComponent } from './list/list.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { InstallMaterialComponent } from './install-material/install-material.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule ,
    ReactiveFormsModule,
    MaterialRoutingModule,
    AngularMaterialModule,
    NgbModule.forRoot()
  ],
  entryComponents:[DialogContentComponent],
  declarations: [MenuComponent, ButtonsComponent,
   HomeMaterialComponent, TooltipComponent, ToolbarComponent, 
   SelectComponent, DatepickerComponent, CheckboxComponent,
    InputComponent, SliderComponent, SlideToggleComponent, SidenavComponent, SteperComponent, ExpansionPanelComponent, ChipsComponent, ProgressBarComponent, DialogComponent, DialogContentComponent, TabelComponent, FilterTabelComponent, SortheaderTabelComponent, TabelPaginationComponent, SnackbarComponent, ListComponent, AutoCompleteComponent, InstallMaterialComponent]
})
export class MaterialModule { }
