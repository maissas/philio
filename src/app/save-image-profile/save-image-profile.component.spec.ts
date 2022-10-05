import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveImageProfileComponent } from './save-image-profile.component';

describe('SaveImageProfileComponent', () => {
  let component: SaveImageProfileComponent;
  let fixture: ComponentFixture<SaveImageProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveImageProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaveImageProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
