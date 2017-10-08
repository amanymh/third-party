import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { MaterialModule } from './material/material.module';
import { BootstrapModule} from './bootstrap/bootstrap.module';
import { DevextremeModule} from './devextreme/devextreme.module';



import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




import { NotfoundComponent } from './notfound.component';
import { AppComponent } from './app.component';
import { HomeAppComponent } from './home-app.component';
import { InstallMaterialComponent } from './material/install-material/install-material.component';
import { DevExtremeModule } from 'devextreme-angular';




@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeAppComponent,
    
  
  
    
   
  ],
  imports: [
    BrowserModule,
  MaterialModule,
  DevExtremeModule ,
  DevextremeModule,
  BootstrapModule,
   AppRoutingModule,
    NgbModule.forRoot()
    
   
  ],
  entryComponents:[InstallMaterialComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
