import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

/*
  Generated class for the Canvas directive.

  See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
  for more info on Angular 2 Directives.
*/
@Directive({
  selector: '[Icanvas]' // Attribute selector
})
export class ICanvasDirective {
  
  constructor(private el: ElementRef, private renderer: Renderer) {
       renderer.setElementStyle(el.nativeElement, 'backgroundColor', '#E5D547');
    }
  
  @HostListener('pan', ['$event'])
  panHandling(event) {
    event.preventDefault();
    console.log('Pan', event);
    this.highlight("#E54747");
  }
  @HostListener('panend', ['$event'])
  panEndHandling(event) {
    event.preventDefault();
    console.log('PanEnd', event);
    this.highlight("#7DC1E3");
  }
  @HostListener('press', ['$event'])
  pressHandling(event) {
    event.preventDefault();
    console.log('Press', event);
    this.highlight("#9DF2AE");
  }
  @HostListener('tap', ['$event'])
  tapHandling(event) {
    event.preventDefault();
    console.log('Tap', event);
    this.highlight("#9DF2EF");
  }
  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
 

}
