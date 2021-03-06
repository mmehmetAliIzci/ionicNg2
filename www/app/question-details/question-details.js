import {IonicApp, Page, NavController, NavParams} from 'ionic/ionic';


@Page({
  templateUrl: 'app/question-details/question-details.html'
})
export class QuestionDetailsPage {

  constructor(app: IonicApp, nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }

}

