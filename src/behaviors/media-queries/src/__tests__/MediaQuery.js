//@flow
import mediaquery from '../index';

describe('Styled components test', () => {
  it('Returns a max-widht media query with content', () => {
    expect(mediaquery('medium')`display:none;`).toEqual(['@media ', '(min-width: 40em)', '{', 'display:none;', '}']);
  });
});
