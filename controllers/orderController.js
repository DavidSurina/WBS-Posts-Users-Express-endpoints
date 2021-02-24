const pool = require("../dbconfig");

module.exports = {
    getOrderById: async (req, res) => {
        const { id } = req.params;
        try {
            const answerDB = await pool.query(
                "SELECT * FROM orders WHERE id = $1", [id]
              );
              res.json({
                message: "Retrieve order by id:" + id,
                code: 200,
                description: "Order with id:" + id,
                data: answerDB.rows[0],
              });
        }
        catch(e) {
            console.log(e);
            res.status(404);
        }
    },
    getAllOrders: async (req, res) => {
        try{
            const answerDB = await pool.query('SELECT * FROM "orders"');
            res.json({
                message: "Retrieved all orders from Orders table",
                code: 200,
                description: "List of all Orders",
                data: answerDB.rows,
                });
        }
        catch (e){
            console.log(e);
            res.sendStatus(404);
        }
    },
}