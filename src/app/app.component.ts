import { Component, TemplateRef } from '@angular/core';
import { Modal2Service } from './shared/services/modal2.service';
import { DinamicModalComponent } from './shared/modals/dinamic-modal/dinamic-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'project-javier';

  constructor( private modalService2: Modal2Service){}

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService2.open(modalTemplate, {size:'lg', title:'Foo'}).subscribe(action => {
      console.log('modalAction', action)
    })
  }
}
