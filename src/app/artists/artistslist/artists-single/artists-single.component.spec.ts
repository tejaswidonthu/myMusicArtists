import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsSingleComponent } from './artists-single.component';

describe('ArtistsSingleComponent', () => {
  let component: ArtistsSingleComponent;
  let fixture: ComponentFixture<ArtistsSingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsSingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
