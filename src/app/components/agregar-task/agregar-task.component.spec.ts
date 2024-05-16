import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTaskComponent } from './agregar-task.component';

describe('AgregarTaskComponent', () => {
  let component: AgregarTaskComponent;
  let fixture: ComponentFixture<AgregarTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgregarTaskComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgregarTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
