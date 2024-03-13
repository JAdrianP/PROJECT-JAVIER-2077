import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JaviModalComponent } from './shared/modals/javi-modal/javi-modal.component';
import { LayoutModule } from './layout/layout.module';
import { DinamicModalComponent } from './shared/modals/dinamic-modal/dinamic-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    JaviModalComponent,
    DinamicModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
