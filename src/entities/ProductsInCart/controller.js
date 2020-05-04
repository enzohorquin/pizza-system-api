const mysqlService = require("../../services/mysql");
const queries = require("./queries");

exports.getProducts = (req, res, next) => {
    const { idUser } = req.decoded;
    mysqlService.executeQuery(queries.getProducts, [idUser], (err, results) => {
        return err ?
            res.status(400).json({ data: 'Internal Server Error' }) :
            res.status(200).json({ data: results, message: 'Succeed' });
    });
}
exports.addProduct = (req, res, next) => {
    const { idUser } = req.decoded;
    const { quantity, idProduct } = req.body;

    mysqlService.executeQuery(queries.existsInCart, [idUser, idProduct,], (err, results) => {
        if (err) res.status(400).json({ data: 'Internal Server Error' });

        if (results.length === 0) {
            mysqlService.executeQuery(queries.insert, [idProduct, quantity, idUser], (err, results) => {
                return err ?
                    res.status(400).json({ data: 'Internal Server Error' }) :
                    res.status(200).json({ message: 'Succeed 1' });
            });
        }
        else {
            mysqlService.executeQuery(queries.updateCart, [quantity, idUser, idProduct], (err, results) => {
                return err ?
                    res.status(400).json({ data: 'Internal Server Error' }) :
                    res.status(200).json({ message: 'Succeed 2' });
            })
        }

    });
}
exports.deleteProduct = (req, res, next) => {
    const { idUser } = req.decoded;
    const { idProduct } = req.body;
    mysqlService.executeQuery(queries.delete, [idProduct, idUser], (err, results) => {

        console.log(err);

        return err ?
            res.status(400).json({ data: 'Internal Server Error' }) :
            res.status(200).json({ message: ' Delete Successful' });
    });
}

exports.clearCart = (req, res, next) => {
    const { idUser } = req.decoded;
    mysqlService.executeQuery(queries.clear, [idUser], (err, results) => {
        return err ?
            res.status(400).json({ data: 'Internal Server Error' }) :
            res.status(200).json({ message: 'Clear Successful' });
    });
}