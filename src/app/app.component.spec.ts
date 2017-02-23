/* tslint:disable:no-unused-variable */
import { RouterTestingModule } from '@angular/router/testing'
import { TranslateModule } from 'ng2-translate'
import { TestBed, async, } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { AppComponent } from './app.component';
import { XHRBackend } from '@angular/http'


describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        RouterTestingModule,
        TranslateModule.forRoot()
      ],
      providers: [
        { provide: XHRBackend, useClass: MockBackend }
      ]
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'Consulta CEP'`, async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Consulta CEP');
  }));

  it('should render title in a h1 tag', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Consulta CEP');
  }));
});
