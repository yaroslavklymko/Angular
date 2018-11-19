import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  const title = 'My First Angular App';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to ' + title + '!');
  });
});
