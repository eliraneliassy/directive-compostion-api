import { CdkMenuTrigger } from '@angular/cdk/menu';
import { Directive } from '@angular/core';

@Directive({
  selector: 'button[appMyMenuTrigger]',
  standalone: true,
  hostDirectives: [
    {directive: CdkMenuTrigger,
    inputs: ['cdkMenuTriggerFor: menu']},

  ]
})
export class MyMenuTriggerDirective {

  constructor() { }

}
