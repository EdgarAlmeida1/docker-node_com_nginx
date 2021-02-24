const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')

app.get('/', (req,res) => {
    let response = '<h1>Full Cycle Rocks!</h1><h2>Lista de nomes cadastrada no banco de dados:</h2><ul>';

    const connection = mysql.createConnection(config)
    let sql = "INSERT INTO people(name) values('Nome Aleatorio')"
    connection.query(sql)

    sql = "SELECT * FROM people"
    connection.query(sql, (err, rows, fields) => {
        if(err) throw err

        rows.forEach(row => {
            console.log(row)
            response += "<li>" + row.id + " - " + row.name + "</li>"
        })

        response += "</ul>"
    
        res.send(response)
    })
})

app.listen(port, ()=> {
    console.log('Rodando na porta ' + port)
})