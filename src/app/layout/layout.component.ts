import { Component, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { JaviModalComponent } from '../shared/modals/javi-modal/javi-modal.component';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  /*private modalService = inject(NgbModal);*/
  //constructor(public modalService: NgbModal) {}

  abrirModal() {
    //this.modalService.open(JaviModalComponent);
  }
}
