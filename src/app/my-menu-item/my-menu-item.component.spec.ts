import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMenuItemComponent } from './my-menu-item.component';

describe('MyMenuItemComponent', () => {
  let component: MyMenuItemComponent;
  let fixture: ComponentFixture<MyMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MyMenuItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
