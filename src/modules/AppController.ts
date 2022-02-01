import AppModel from './AppModel';
import AppView from './AppView';
// eslint-disable-next-line import/no-cycle
import AuthController from './Auth/AuthController';
// eslint-disable-next-line import/no-cycle
import BookController from './Book/BookController';

class AppController {
  view: AppView;

  model: AppModel;

  auth?: AuthController;

  book?: BookController;

  constructor(view: AppView, model: AppModel) {
    this.view = view;
    this.model = model;
  }

  displayPage() {
    this.view.drawPage();
  }
}

export default AppController;
