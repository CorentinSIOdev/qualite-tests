async function getUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) throw new Error("Erreur API");
    const data = await response.json();
    return data;
}
  
module.exports = getUserData;
  