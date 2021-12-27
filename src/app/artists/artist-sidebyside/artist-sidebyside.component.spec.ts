import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistSidebysideComponent } from './artist-sidebyside.component';

describe('ArtistSidebysideComponent', () => {
  let component: ArtistSidebysideComponent;
  let fixture: ComponentFixture<ArtistSidebysideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistSidebysideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistSidebysideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
