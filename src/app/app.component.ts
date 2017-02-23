import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { TranslateService } from 'ng2-translate'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Consulta CEP';

  constructor(translate: TranslateService) {
	translate.setDefaultLang('pt-br');
	translate.use('pt-br');
  }
}
