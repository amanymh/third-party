import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import 'hammerjs';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule,MdCardModule,MdDatepickerModule, MdNativeDateModule,MdInputModule,MdRadioModule,
  MdSliderModule,MdIconModule,MdSlideToggleModule,MdSidenavModule,MatStepperModule,MdTabsModule,MdExpansionModule,
  MdButtonToggleModule,MdChipsModule,MatProgressSpinnerModule,MatProgressBarModule,MatDialogModule,MatTableModule,
  MatSortModule,MatPaginatorModule,MatSnackBarModule,MatListModule,MatAutocompleteModule,
  MdToolbarModule, MdCheckboxModule,MdTooltipModule,MdMenuModule, MdSelectModule} from '@angular/material';


@NgModule({
 imports: [MdButtonModule,MdCardModule,MdDatepickerModule, MdNativeDateModule,MdInputModule,MdRadioModule,
 MdSliderModule,MdIconModule,MdSlideToggleModule,MdSidenavModule,MatStepperModule,MdTabsModule,MdExpansionModule,
 MdButtonToggleModule,MdChipsModule,MatProgressSpinnerModule,MatProgressBarModule,MatDialogModule,MatTableModule,
 MatSortModule,MatPaginatorModule,MatSnackBarModule,MatListModule,MatAutocompleteModule,
 MdToolbarModule, MdCheckboxModule,BrowserAnimationsModule,MdTooltipModule,MdMenuModule,MdSelectModule],

  exports: [MdButtonModule,MdCardModule,MdDatepickerModule, MdNativeDateModule,MdInputModule,MdRadioModule,
  MatSortModule,MatPaginatorModule,MatSnackBarModule,MatListModule,MatAutocompleteModule,
  MdButtonToggleModule,MdChipsModule,MatProgressSpinnerModule,MatProgressBarModule,MatDialogModule,MatTableModule,
  MdSliderModule,MdIconModule,MdSlideToggleModule,MdSidenavModule,MatStepperModule,MdTabsModule,MdExpansionModule,
  MdToolbarModule, MdCheckboxModule,BrowserAnimationsModule,MdTooltipModule,MdMenuModule,MdSelectModule],
})
export class AngularMaterialModule { }
