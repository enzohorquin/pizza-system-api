const mysqlService = require("../../services/mysql");
const queries = require("./queries");

exports.getAllAddresses = (req, res, next) => {
    const { idUser } = req.decoded;
    mysqlService.executeQuery(queries.getAllAddress, [idUser], (err, results) => {
        return err ?
            res.status(400).json({ data: 'Internal Server Error' }) :
            res.status(200).json({ data: results, message: 'Succeed' });
    });
}

exports.addAddress = (req, res, next) => {
    const { street, apartment = "" } = req.body;
    const { idUser } = req.decoded;

    mysqlService.executeQuery(queries.insertAddress, [street, apartment, idUser], (err, results) => {
        return err ?
            res.status(400).json({ data: 'Internal Server Error' }) :
            res.status(200).json({ message: 'Succeed' });
    });

}