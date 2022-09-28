import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'marialuisa-front';

  constructor(translateService: TranslateService) {
    translateService.setDefaultLang('es');
    
  }
}
