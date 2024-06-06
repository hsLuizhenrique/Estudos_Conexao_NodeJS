const pool = require('../conexao');

const cadastrar = async (req, res) => {
    const { nome, idade } = req.body;

    try {
        const query = `insert into autores(nome, idade) values ($1, $2) returning *  `
        const params = [nome, idade];

        if (!nome || !idade) {
            return res.status(400).json({ message: 'O Nome e a idade nao foram informados' })
        }

        const autor = await pool.query(query, params);

        return res.status(200).json(autor.rows[0]);

    } catch (error) {
        console.log({ message: error })
        return res.status(500).json({ message: 'Erro interno do servidor' })
    }
}

const buscarAutor = async (req, res) => {
    const { id } = req.params

    try {
        const params = [id];
        const query = `select * from autores where id = $1`

        const idAutor = await pool.query(query, params)

        if (idAutor.rows < 1) {
            return res.status(404).json({ message: "Autor não encontrado ou nao existe" })
        }
        
        return res.status(200).json(idAutor.rows)
    } catch (error) {
        console.log(error.message)
        return res.status(500).json('Erro interno do servidor')
    }
}

module.exports = {
    cadastrar,
    buscarAutor
}