import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookslotComponent } from './bookslot.component';

describe('BookslotComponent', () => {
  let component: BookslotComponent;
  let fixture: ComponentFixture<BookslotComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookslotComponent]
    });
    fixture = TestBed.createComponent(BookslotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
