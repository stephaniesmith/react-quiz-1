import ColorSelector from './ColorSelector';
describe('color selector', () => {
  it('is a color input', () => {
    expect(ColorSelector()).toMatchSnapshot();
  });
});
