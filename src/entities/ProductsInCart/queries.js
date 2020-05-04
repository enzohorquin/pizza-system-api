module.exports = {
    getProducts: 'SELECT pc.quantity, p.name, p.priceDol, p.priceEur, p.idProduct FROM productincart pc JOIN products p ON (pc.idProduct = p.idProduct) WHERE pc.idUser = ?',
    insert: 'INSERT INTO productincart (idProduct, quantity, idUser) values (?, ?, ?)',
    delete: 'DELETE FROM productincart WHERE idProduct = ? AND idUser = ?',
    clear: 'DELETE FROM productincart WHERE idUser = ?',
    existsInCart: 'select 1 from productincart where idUser = ? and idProduct = ?',
    updateCart: 'UPDATE productincart set quantity = ? where  idUser = ? and idProduct = ?'
}