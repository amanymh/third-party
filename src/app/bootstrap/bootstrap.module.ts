import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BootstrapRoutingModule  } from './bootstrap.routing';
import { ButtonComponent } from '../bootstrap/button/button.component';
import { HomeBootstrapComponent } from './home-bootstrap/home-bootstrap.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BootstrapRoutingModule 

  ],
  declarations: [ButtonComponent, HomeBootstrapComponent]
})
export class BootstrapModule { }
