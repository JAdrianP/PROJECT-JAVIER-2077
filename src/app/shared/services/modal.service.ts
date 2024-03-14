import {
  Injectable,
  ComponentFactoryResolver,
  ApplicationRef,
  Injector,
  EmbeddedViewRef,
  ComponentRef,
  Type,
} from '@angular/core';
import { DinamicModalComponent } from '../modals/dinamic-modal/dinamic-modal.component';
import { ModalComponent } from '../modals/modal/components/modal/modal.component';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalNotifier!: Subject<string>;
  private modalRef!: ComponentRef<DinamicModalComponent>;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector
  ) {}

  open(
    component: Type<ModalComponent>,
    options?: { size?: string; title?: string; text?: string }
  ) {
    console.log(component);

    const componentFactory =
    this.componentFactoryResolver.resolveComponentFactory(component);
    const componentRef = componentFactory.create(this.injector);

    componentRef.instance.size = options?.size;
    componentRef.instance.title = options?.title;
    componentRef.instance.text = options?.text;
    componentRef.instance.closeEvent.subscribe(() => this.closeModal());
    componentRef.instance.submitEvent.subscribe(() => this.submitModal());

    this.appRef.attachView(componentRef.hostView);

    console.log(componentRef.location.nativeElement.innerHTML);

    const domElem = (componentRef.hostView as EmbeddedViewRef<any>)
      .rootNodes[0] as HTMLElement;

    document.body.appendChild(domElem);

    this.modalNotifier = new Subject();
    return this.modalNotifier.asObservable();

    //this.modalRef = componentRef;

    //this.modalRef.instance.open(component);
  }

  /* close() {
    this.appRef.detachView(this.modalRef.hostView);
    this.modalRef.destroy();
  }*/

  closeModal() {
    this.modalNotifier?.complete();
  }

  submitModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }
}
