import { ChangeColorDirective } from './change-color.directive';
import { ChangeSizeDirective } from './change-size.directive';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appMouseEnter]',
  standalone: true,
  hostDirectives: [
    ChangeSizeDirective,
    {
      directive: ChangeColorDirective,
      inputs: ['color']
    }
  ]
})
export class MouseEnterDirective {

  constructor() { }

}
