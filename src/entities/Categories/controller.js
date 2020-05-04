const mysqlService = require("../../services/mysql");
const queries = require("./queries");

exports.getAll = (req, res, next) => {
    mysqlService.executeQuery(queries.getAllCategories, [], (err, results) => {
        return err ?
            res.status(400).json({ data: 'Internal Server Error' }) :
            res.status(200).json({ data: results, message: 'Succeed' });
    });
}