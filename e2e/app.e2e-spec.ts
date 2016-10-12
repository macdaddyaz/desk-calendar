import { DeskCalendarPage } from './app.po';

describe('desk-calendar App', function() {
  let page: DeskCalendarPage;

  beforeEach(() => {
    page = new DeskCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
