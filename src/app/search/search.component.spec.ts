/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { SearchComponent } from './search.component';
import { FadingCircleComponent } from 'ng-spin-kit/app/spinners'
import { LocalStorageModule } from 'angular-2-local-storage'

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchComponent, FadingCircleComponent ],
      imports: [ 
        FormsModule,
        LocalStorageModule.withConfig({
          prefix: 'my-app',
          storageType: 'localStorage'
      })
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
