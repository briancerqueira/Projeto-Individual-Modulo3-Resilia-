const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/corretores/listar": "/corretores",
  "/corretor/adicionar": "/corretores",
  "/corretor/detalhar/:id": "/corretores/:id",
  "/corretor/editar/:id": "/corretores/:id",
  "/corretor/deletar/:id": "/corretores/:id",

  "/formas_de_pagamento/listar": "/formas_de_pagamento",
  "/forma_de_pagamento/adicionar": "/formas_de_pagamento",
  "/forma_de_pagamento/detalhar/:id": "/formas_de_pagamento/:id",
  "/forma_de_pagamento/editar/:id": "/formas_de_pagamento/:id",
  "/forma_de_pagamento/deletar/:id": "/formas_de_pagamento/:id",

  "/imoveis_comerciais/listar": "/imoveis_comerciais",
  "/imovel_comercial/adicionar": "/imoveis_comerciais",
  "/imovel_comercial/detalhar/:id": "/imoveis_comerciais/:id",
  "/imovel_comercial/editar/:id": "/imoveis_comerciais/:id",
  "/imovel_comercial/deletar/:id": "/imoveis_comerciais/:id",
  
  "/imoveis_residenciais/listar": "/imoveis_residenciais",
  "/imovel_residencial/adicionar": "/imoveis_residenciais",
  "/imovel_residencial/detalhar/:id": "/imoveis_residenciais/:id",
  "/imovel_residencial/editar/:id": "/imoveis_residenciais/:id",
  "/imovel_residencial/deletar/:id": "/imoveis_residenciais/:id",

  "/inquilinos/listar": "/inquilinos",
  "/inquilino/adicionar": "/inquilinos",
  "/inquilino/detalhar/:id": "/inquilinos/:id",
  "/inquilino/editar/:id": "/inquilinos/:id",
  "/inquilino/deletar/:id": "/inquilinos/:id",
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })
