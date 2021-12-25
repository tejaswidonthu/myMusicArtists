import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsStartComponent } from './artists-start.component';

describe('ArtistsStartComponent', () => {
  let component: ArtistsStartComponent;
  let fixture: ComponentFixture<ArtistsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
