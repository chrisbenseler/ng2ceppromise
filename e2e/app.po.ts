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

  waitForElementToBePresent(element){
	browser.wait( () => element.isPresent(), 10000)
	browser.wait( () => element.isDisplayed(), 10000)
  }

}
