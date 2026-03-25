import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRoleBasedAccess]',
})
export class RoleBasedAccess {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {}

  @Input() set appRoleBasedAccess(requiredRole: string) {
    this.viewContainer.clear();
    const currentUserRole = 'Admin';

    if (currentUserRole === requiredRole) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
