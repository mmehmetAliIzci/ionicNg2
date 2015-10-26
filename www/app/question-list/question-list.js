import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import {QuestionDetailsPage} from '../question-details/question-details';

@Page({
  templateUrl: 'app/question-list/question-list.html'
})
export class QuestionListPage {
  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');


    this.items = [];
    for(let i = 1; i < 20; i++) {
      this.items.push({
        title: 'Question ' + i,
        note: 'This is question #' + i,
      });
    }
  }

  itemTapped(event, item) {

    console.log('You selected:', item.title);

    this.nav.push(QuestionDetailsPage, {
      item: item
    });

  }
}
