import {Directive, ElementRef, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[delay]'
})
export class DelayDirective implements OnInit {
  @Input() delay: number;

  constructor(private view: ViewContainerRef, private template: TemplateRef<ElementRef>) {
  }

  ngOnInit() {
    setTimeout(() => {
      this.view.createEmbeddedView(this.template);
    }, this.delay * 1000);
  }
}
