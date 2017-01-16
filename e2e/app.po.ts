import { browser, element, by } from 'protractor';

export class Ng2ceppromisePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getElementsBySelector(selector) {
  	return element(by.css(selector))
  }

}
