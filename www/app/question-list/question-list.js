import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';

import {QuestionDetailsPage} from '../question-details/question-details';

import {Http, HTTP_PROVIDERS} from 'angular2/http';


@Page({
  selector: 'http-app',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/question-list/question-list.html'
})
export class QuestionListPage {
  
  constructor(http:Http, app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;

    this.items = [];

    
    http.get('http://localhost:3000/questions.js')
      .subscribe(response=> this.items = response.json());



    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }


  itemTapped(event, item) {

    console.log('You selected:', item.body);

    this.nav.push(QuestionDetailsPage, {
      item: item
    });

  }
}
