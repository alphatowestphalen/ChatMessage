import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatCompteComponent } from './creat-compte.component';

describe('CreatCompteComponent', () => {
  let component: CreatCompteComponent;
  let fixture: ComponentFixture<CreatCompteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreatCompteComponent]
    });
    fixture = TestBed.createComponent(CreatCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
