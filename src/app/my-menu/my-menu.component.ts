import { CdkMenu } from '@angular/cdk/menu';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-menu.component.html',
  styleUrls: ['./my-menu.component.scss'],
  hostDirectives: [CdkMenu]
})
export class MyMenuComponent {

}
