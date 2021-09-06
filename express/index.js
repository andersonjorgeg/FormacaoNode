const express = require('express')
const app = express()

//criando rotas
app.get('/', (req, res) => {
  res.send('<h1>Bem vindo ao site</h1>')
})

app.get('/blog', (req, res) => {
  res.send('<h1>Página Blog</h1>')
})

app.get('/perfil', (req, res) => {
  res.send('<h1>Perfil</h1>')
})

app.get('/perfil/anderson', (req, res) => {
  res.send('<h1>Perfil do usuário anderson</h1>')
})

//criando um servidor com express
app.listen(3000, (err) => {
  if(err){
    console.log('Ocorreu um erro')
  }else {
    console.log('Servidor iniciado com sucesso!')
  }
})
