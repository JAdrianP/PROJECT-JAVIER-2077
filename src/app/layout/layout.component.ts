import { Component, TemplateRef, Type, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JaviModalComponent } from '../shared/modals/javi-modal/javi-modal.component';
import { ModalService } from '../shared/services/modal.service';
import { Modal2Service } from '../shared/services/modal2.service';
import { DinamicModalComponent } from '../shared/modals/dinamic-modal/dinamic-modal.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  private modalService = inject(NgbModal);
  constructor(private dinamicModalService: ModalService, 
    private modalService2: Modal2Service) {}

  abrirModal() {
    this.modalService.open(JaviModalComponent);
  }

  abrirModalDinamico() {
    this.dinamicModalService.open(JaviModalComponent);
  }

  openModal(modalTemplate: TemplateRef<any>) {
    this.modalService2.open(modalTemplate, {size:'lg', title:'Foo'}).subscribe(action => {
      console.log('modalAction', action)
    })
  }
}
