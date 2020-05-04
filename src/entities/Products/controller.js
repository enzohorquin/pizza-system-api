const mysqlService = require("../../services/mysql");
const queries = require("./queries");

exports.getProducts = (req, res, next) => {
    const { idCategory } = req.query;
    mysqlService.executeQuery(queries.getProducts, [idCategory], (err, results) => {
        return err ?
            res.status(400).json({ data: 'Internal Server Error' }) :
            res.status(200).json({ data: results, message: 'Succeed' });
    });
}