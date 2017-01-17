import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorageModule } from 'angular-2-local-storage'
import { FadingCircleComponent } from 'ng-spin-kit/app/spinners'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { SearchComponent } from './search/search.component'

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '/search' }
]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    FadingCircleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    LocalStorageModule.withConfig({
        prefix: 'my-app',
        storageType: 'localStorage'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
