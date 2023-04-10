import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
// NOTE:CUSTOM  STRUCTURAL DIRECTIVE
export class UnlessDirective {
  @Input() set appunless(condition: boolean) {
    if (!condition) {
      this.viewRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewRef.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewRef: ViewContainerRef
  ) {}
}
