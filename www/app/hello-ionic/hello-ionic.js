import {Page, NavController} from 'ionic/ionic';

import {QuestionListPage} from '../question-list/question-list';

@Page({
  templateUrl: 'app/hello-ionic/hello-ionic.html'
})
export class HelloIonicPage {
  constructor(nav: NavController) {
    this.nav = nav;
  }

  logIn(){
    console.log("We need to login you bitch");
    this.nav.push(QuestionListPage)
  }

}
