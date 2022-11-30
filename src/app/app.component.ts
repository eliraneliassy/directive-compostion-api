import { MyMenuTriggerDirective } from './my-menu-trigger.directive';
import { MouseEnterDirective } from './mouse-enter.directive';
import { ChangeColorDirective } from './change-color.directive';
import { ChangeSizeDirective } from './change-size.directive';
import { Component } from '@angular/core';
import { MyMenuComponent } from "./my-menu/my-menu.component";
import { MyMenuItemComponent } from "./my-menu-item/my-menu-item.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: true,
    imports: [MouseEnterDirective, MyMenuComponent, MyMenuItemComponent, MyMenuTriggerDirective]
})
export class AppComponent {
  
}
