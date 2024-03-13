import { Component, ComponentFactoryResolver, ComponentRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dinamic-modal',
  templateUrl: './dinamic-modal.component.html',
  styleUrl: './dinamic-modal.component.scss'
})
export class DinamicModalComponent {

  @ViewChild('modalContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
  private componentRef!: ComponentRef<any>;

  constructor(private resolver: ComponentFactoryResolver) {}

  ngOnInit() {}

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }

  open(component: any): void {
    const factory = this.resolver.resolveComponentFactory(component);
    this.componentRef = this.container.createComponent(factory);
  }

  close() {
    this.componentRef.destroy();
  }

}
