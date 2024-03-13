import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef, ComponentRef } from '@angular/core';
import { DinamicModalComponent } from '../modals/dinamic-modal/dinamic-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalRef!: ComponentRef<DinamicModalComponent>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private injector: Injector) {}

  open(component: any) {

    console.log(component);

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = componentFactory.create(this.injector);
    this.appRef.attachView(componentRef.hostView);

    console.log(componentRef.location.nativeElement.innerHTML);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    document.body.appendChild(domElem);

    //this.modalRef = componentRef;
    
    //this.modalRef.instance.open(component);
  }

  close() {
    this.appRef.detachView(this.modalRef.hostView);
    this.modalRef.destroy();
  }
}