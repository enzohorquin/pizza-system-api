module.exports = {
    insertOrder: 'INSERT INTO orders (totalAmount, idAddress, idUser, note, dateOrder) VALUES (?, ?, ?, ?, ?)',
    getOrders: `SELECT o.totalAmount, o.dateOrder, p.name, po.quantity
    FROM orders o JOIN productinorder po ON (o.idOrder = po.idOrder) JOIN products p ON (po.idProduct = p.idProduct)
     WHERE o.idUser = ?`,
    insertProductOrder: 'INSERT INTO productinorder (idProduct, quantity, idOrder) VALUES ?',
    insertAddress: 'INSERT INTO addresses (street, apartment, idUser) VALUES (?, ?, ?)'
}