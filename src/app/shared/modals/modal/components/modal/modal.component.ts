import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {
  [x: string]: any;

  @Input() size? = 'md';
  @Input() title? = 'Modal title';
  @Input() text? = 'Modal text';

  @Output() closeEvent = new EventEmitter();
  @Output() submitEvent = new EventEmitter();

  //@ViewChild('contentViewContainer', { read: ViewContainerRef }) public contentViewContainer!: ViewContainerRef;

  constructor(private elementRef: ElementRef) {}

  close(): void {
    this.elementRef.nativeElement.remove();
    this.closeEvent.emit();
  }

  submit(): void {
    this.elementRef.nativeElement.remove();
    this.submitEvent.emit();
  }

}
