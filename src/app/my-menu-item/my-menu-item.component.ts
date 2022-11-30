import { CdkMenuItem } from '@angular/cdk/menu';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-menu-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-menu-item.component.html',
  styleUrls: ['./my-menu-item.component.scss'],
  hostDirectives: [
    {directive: CdkMenuItem, 
    inputs: ['cdkMenuItemDisabled: disabled']
  }
  ]
})
export class MyMenuItemComponent {

}
