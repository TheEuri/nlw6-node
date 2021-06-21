import express from "express";

const app = express();

/**
 * GET    => Buscar informações
 * POST   => Inserir (Criar) informações
 * PUT    => Alterar informações
 * DELETE => Remover informações
 * PATCH  => Alterar informações específicas
 */

app.get("/test", (req, res) => {
  /**
   * Request  => Entrando
   * Response => Saindo
   */

  return res.send("Olá NLW");
});

app.post("/test-post", (req, res) => {
  return res.send("Olá NLW com método post");
});

app.listen(3333, () => console.log("🚀 Server is running #NeverStopLearning"));
