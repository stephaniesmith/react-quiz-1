import App from './App';

describe('app', () => {
  it('holds the text selector, color selector, and shape', () => {
    const app = new App({

    });
    expect(app.render()).toMatchSnapshot();
  });
});