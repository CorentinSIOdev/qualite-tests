function getUserById(id, db) {
    return db.find(user => user.id === id);
}
  
module.exports = getUserById;
  