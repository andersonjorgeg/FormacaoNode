const express = require('express')
const app = express()

//criando rotas
app.get('/', (req, res) => {
  res.send('<h1>Bem vindo ao site</h1>')
})

app.get('/blog/:artigo?', (req, res) => {
  let artigo = req.params.artigo

  if(artigo){
    res.send(`<h1>Nome do artigo é ${artigo}</h1>`)
  } else {
    res.send('<h1>Página Blog</h1>')
  }

})

app.get('/perfil', (req, res) => {
  res.send('<h1>Perfil do usuario</h1>')
})

app.get('/perfil/anderson', (req, res) => {
  res.send('<h1>Perfil do usuário anderson</h1>')
})

app.get('/ola/:nome/:empresa', (req, res) => {
  let nome = req.params.nome
  let empresa = req.params.empresa
  res.send(`<h1>Oi ${nome} do ${empresa}</h1>`)
})

//criando um servidor com express
app.listen(3000, (err) => {
  if(err){
    console.log('Ocorreu um erro')
  }else {
    console.log('Servidor iniciado com sucesso!')
  }
})
