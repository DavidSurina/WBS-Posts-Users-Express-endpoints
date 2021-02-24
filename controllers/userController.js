const pool = require("../dbconfig");

module.exports = {
    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const answerDB = await pool.query(
                "SELECT * FROM users WHERE id = $1", [id]
              );
              res.json({
                message: "Retrieve user by id:" + id,
                code: 200,
                description: "User with id:" + id,
                data: answerDB.rows[0],
              });
        }
        catch(e) {
            console.log(e);
            res.status(404);
        }
    },
    getAllUsers: async (req, res) => {
        try{
            const answerDB = await pool.query('SELECT * FROM "users"');
            res.json({
                message: "Retrieved all users from Users table",
                code: 200,
                description: "List of all Users",
                data: answerDB.rows,
              });
        }
        catch (e){
            console.log(e);
            res.sendStatus(404);
        }
    }
}