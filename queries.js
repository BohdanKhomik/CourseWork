const Pool = require('pg').Pool
const pool = new Pool({
 host: 'ec2-54-247-89-181.eu-west-1.compute.amazonaws.com',
  database: 'd3vap73soukjeg',
  user:'jpsrtyxtdjmjug',
  password: '0b36a3c9dcc7245ea6bd2b8161a9c8289c85def23c0ebd1df25accbe24d13d26',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})
const getUsers = (request, response) => {
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.images ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getUserById = (request, response) => {
  const id = parseInt(request.params.id)
    response.header("Access-Control-Allow-Origin", "*");
    pool.query('SELECT * FROM public.images WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}







module.exports = {
  getUsers,
  getUserById,

}
