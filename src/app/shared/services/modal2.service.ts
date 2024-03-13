//este servicio es para el modal que es un modulo

import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Inject,
  Injectable,
  Injector,
  TemplateRef,
  Type,
} from '@angular/core';
import { ModalComponent } from '../modals/modal/components/modal/modal.component';
import { DOCUMENT } from '@angular/common';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Modal2Service {
  private modalNotifier!: Subject<string>;

  private modalComponentRef!: ComponentRef<ModalComponent>;
  private modalContentComponentRef!: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}

  /*constructor(
    private resolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {}*/

  open(content: TemplateRef<any>, options?: { size?: string; title?: string }) {
    //esto sabe como crear un modalComponent
    const modalComponentFactory =
      this.resolver.resolveComponentFactory(ModalComponent);
    const contentViewRef = content.createEmbeddedView(null);
    const modalComponent = modalComponentFactory.create(this.injector, [
      contentViewRef.rootNodes,
    ]);

    modalComponent.instance.size = options?.size;
    modalComponent.instance.title = options?.title;
    modalComponent.instance.closeEvent.subscribe(() => this.closeModal());
    modalComponent.instance.submitEvent.subscribe(() => this.submitModal());

    modalComponent.hostView.detectChanges();

    console.log(this.document)
    this.document.body.appendChild(modalComponent.location.nativeElement);

    this.modalNotifier = new Subject();

    return this.modalNotifier.asObservable();
  }

 /* open(
    contentComponent: Type<any>,
    options?: { size?: string; title?: string }
  ) {
    console.log(contentComponent.toString())
    // Crear el componente modal
    const modalComponentFactory =
      this.resolver.resolveComponentFactory(contentComponent);
    this.modalComponentRef = modalComponentFactory.create(this.injector);

    // Configurar opciones del modal, como tamaño y título
    //if (options) {
    //  this.modalComponentRef.instance.size = options.size;
    //  this.modalComponentRef.instance.title = options.title;
    //}

    // Agregar el componente modal al DOM
    this.appRef.attachView(this.modalComponentRef.hostView);
    this.document.body.appendChild(
      this.modalComponentRef.location.nativeElement
    );

    // Crear el componente que irá dentro del modal (contenido)
    const contentComponentFactory =
      this.resolver.resolveComponentFactory(contentComponent);
    this.modalContentComponentRef =
      this.modalComponentRef.instance.contentViewContainer?.createComponent(
        contentComponentFactory
      );

    // Suscribirse a eventos del modal, como cierre o confirmación
    this.modalComponentRef.instance.closeEvent.subscribe(() =>
      this.closeModal()
    );
    this.modalComponentRef.instance.submitEvent.subscribe(() =>
      this.submitModal()
    );

    // Detectar cambios
    this.modalComponentRef.hostView.detectChanges();

    // Retornar un observable para notificar cuando el modal se cierre
    return this.modalNotifier.asObservable();
  }*/

  closeModal() {
    this.modalNotifier?.complete();
  }

  submitModal() {
    this.modalNotifier?.next('confirm');
    this.closeModal();
  }
}
