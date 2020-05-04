module.exports = {
    getAllAddress: "SELECT * FROM addresses WHERE idUser = ?",
    insertAddress: "INSERT INTO addresses (street, apartment, idUser) values (?, ?, ?)"
};
