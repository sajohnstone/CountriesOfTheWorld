import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PagingComponent } from './paging.component';

describe('PagingComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        // RouterTestingModule,
        // FontAwesomeModule
      ],
      declarations: [
        PagingComponent
      ]
    }).compileComponents();
  }));

  it('should create the component', () => {
    const fixture = TestBed.createComponent(PagingComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render paging links', () => {
    const fixture = TestBed.createComponent(PagingComponent);
    fixture.componentInstance.currentPage = 1;
    fixture.componentInstance.pageCount = 10;
    fixture.detectChanges();

    const elem: HTMLElement = fixture.debugElement.queryAll(By.css('span'))[1].nativeElement;

    // first span text
    expect(elem.textContent.trim()).toBe('1');
    // total number of span elements
    expect(fixture.debugElement.queryAll(By.css('span')).length).toBe(11);
    // total number of anchor elements
    expect(fixture.debugElement.queryAll(By.css('a')).length).toBe(9);
  });
});
