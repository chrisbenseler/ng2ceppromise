import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { HttpModule, Http } from '@angular/http'
import { RouterModule, Routes } from '@angular/router'

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { LocalStorageModule } from 'angular-2-local-storage'
import { FadingCircleComponent } from 'ng-spin-kit/app/spinners'
import { TranslateModule, TranslateService, TranslateLoader, TranslateStaticLoader } from 'ng2-translate'

import { AppComponent } from './app.component'
import { AboutComponent } from './about/about.component'
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component'

const appRoutes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: '**', redirectTo: '/search' }
]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SearchComponent,
    FadingCircleComponent,
    HistoryComponent
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
    }),
    TranslateModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
