import { Component, inject, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-javi-modal',
  templateUrl: './javi-modal.component.html',
  styleUrl: './javi-modal.component.scss'
})

export class JaviModalComponent {
 
  /*constructor(public activeModal: NgbActiveModal) {

    
  }*/

  cerrarModal() {
    //this.activeModal.dismiss();
  }

}
