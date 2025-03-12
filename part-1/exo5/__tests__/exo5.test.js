const getUserData = require('../exo5');

describe('getUserData()', () => {
  test('récupère les infos de l’utilisateur avec l’ID 1', async () => {
    const user = await getUserData(1);
    expect(user).toHaveProperty('id', 1);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
  });

  test('renvoie une erreur si utilisateur inexistant', async () => {
    await expect(getUserData(999999)).rejects.toThrow("Erreur API");
  });
});
