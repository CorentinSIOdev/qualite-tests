const getUserById = require('../exo4');

test('getUserById retourne le bon utilisateur', () => {
  const mockDB = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ];
  const user = getUserById(2, mockDB);
  expect(user).toEqual({ id: 2, name: 'Bob' });
});