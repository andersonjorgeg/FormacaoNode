module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send(`
    <h1>Bem vindo ao site</h1>
    <a href="/users">Lista de Usuários</a>
    `);
  });

  app.get("/users", (req, res) => {
    res.send(`
    <h1>Lista de Usuários</h1>
    <ul>
      <li>Usuário 1</li>
      <li>Usuário 2</li>
      <li>Usuário 3</li>
    </ul>
    <a href="/">&lt;&lt;Voltar</a>
  `);
  })
};
