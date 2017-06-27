import { Angular2TrainingPage } from './app.po';

describe('angular2-training App', () => {
  let page: Angular2TrainingPage;

  beforeEach(() => {
    page = new Angular2TrainingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
