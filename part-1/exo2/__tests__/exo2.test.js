jest.mock('../../exo1/exo1', () => ({
    ...jest.requireActual('../../exo1/exo1'),
    factorielle: jest.fn(),
  }));
  
  test('mock de factorielle est appelé', () => {
    const { factorielle } = require('../../exo1/exo1');
    factorielle.mockReturnValue(120);
    expect(factorielle(5)).toBe(120);
    expect(factorielle).toHaveBeenCalledWith(5);
  });
  