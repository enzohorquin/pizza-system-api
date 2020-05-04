const mysqlService = require("../../services/mysql");
const queries = require("./queries");

exports.createOrder = (req, res, next) => {
    const { totalAmountDol, street, apartment, note, products } = req.body;
    const { idUser } = req.decoded;
    const dateOrder = new Date();
    mysqlService.executeQuery(queries.insertAddress, [street, apartment, idUser], (err, results) => {
        if (err) res.status(400).json({ data: 'Internal Server Error' });
        const idAddress = results.insertId;
        mysqlService.executeQuery(queries.insertOrder, [parseFloat(totalAmountDol), idAddress, idUser, note, dateOrder], (err, results) => {
            if (err) res.status(400).json({ data: 'Internal Server Error' });
            const productValues = products.map(item => ([item.idProduct, item.quantity, results.insertId]));
            console.log(productValues);
            mysqlService.executeQuery(queries.insertProductOrder, [productValues], (err, results) => {
                return err ?
                    res.status(400).json({ data: 'Internal Server Error' }) :
                    res.status(200).json({ message: 'Succeed' });
            });
        });
    });
}

exports.getAllOrders = (req, res, next) => {
    const { idUser } = req.decoded;
    mysqlService.executeQuery(queries.getOrders, [idUser], (err, results) => {
        return err ?
            res.status(400).json({ data: 'Internal Server Error' }) :
            res.status(200).json({ data: results, message: 'Succeed' });
    });
}