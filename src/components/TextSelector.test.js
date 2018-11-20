import TextSelector from './TextSelector';

describe('text selector', () => {
  it('is a text input box', () => {
    expect(TextSelector()).toMatchSnapshot();
  });
});
