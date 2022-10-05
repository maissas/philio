import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveUserInfosComponent } from './save-user-infos.component';

describe('SaveUserInfosComponent', () => {
  let component: SaveUserInfosComponent;
  let fixture: ComponentFixture<SaveUserInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveUserInfosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveUserInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
