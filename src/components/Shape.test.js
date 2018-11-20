import Shape from './Shape';

describe('shape', () => {
  it('is the div where the text and colors live', () => {
    expect(Shape()).toMatchSnapshot();
  });
});
