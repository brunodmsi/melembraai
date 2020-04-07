<h1 align="center">
  Me Lembra Aí
</h1>

<h4 align="center">
  Um bot para lembretes
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/brunodmsi/melembraai">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/brunodmsi/melembraai">

  <a href="https://github.com/brunodmsi/melembraai/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/brunodmsi/melembraai">
  </a>

  <a href="https://github.com/brunodmsi/melembraai/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/brunodmsi/melembraai">
  </a>

  <a href="https://github.com/brunodmsi/melembraai/blob/master/LICENSE">
    <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
  </a>
</p>

## :neutral_face: Qual o propósito?
O Me Lembra Aí foi desenvolvido com o intuito de lembrar o usuário de algum tweet para uso posterior.

Por exemplo, o usuário vê uma thread do Twitter sobre dicas de trabalho ou uma lista de filme, a qual, naquele momento, ele não tem como ler, por questões de tempo. Ele pode salvar a thread como favorito para ver depois, mas as chances de esquecimento de que a mesma existe são muito altas, então, com isto em mente, o usuário marca o bot usando @melembraai e diz em quanto tempo ele gostaria de ser lembrado. E quando este tempo passar, o bot irá lhe enviar um lembrete respondendo ao seu tweet, e fazendo assim, com que você lembre que a thread existe, e que agora você pode calmamente fazer a leitura da mesma.

Outro exemplo seria: o governo publicou no twitter que em x tempo ele vai fazer uma obra na sua cidade, e então você pode pedir para ser lembrado desse tweet, e ver se aquela obra foi realmente feita ou não.

Enfim, são muitos usos possíveis, e veja os prints abaixo para ver o funcionamento do bot na prática:
Você primeiro faz o pedido de lembrete

<img src="https://i.imgur.com/9brMtyx.png" alt="Pedido de mensagem" />

E então o bot lhe responde afirmando a confirmação do recebimento desse pedido

<img src="https://i.imgur.com/3rVZAuL.png" alt="Confirmação de recebimento" />

E quando esse tempo chegar, o bot irá lhe enviar o seu lembrete tão aguardado

<img src="https://i.imgur.com/nz2r3Jd.png" alt="Lembrete final" />

## :computer: Tecnologias usadas
- [Node.js](https://nodejs.org/en/) - interpretador JavaScript
- [Redis](https://redis.io/) - biblioteca que neste projeto está sendo usada para envio de tweets em segundo plano
- [Sequelize](https://sequelize.org/) - ORM de bancos SQL para Node.js (neste projeto esta sendo usado Postgres)
- [date-fns](https://date-fns.org/) - biblioteca utilitária de datas, calendários, etc.

## :recycle: Como contribuir

- Faça um `fork`;
- Crie uma `branch` com a sua nova adição: `git checkout -b my-feature`;
- Dê `commit` nas suas mudanças: `git commit -m 'feat: my new feature'`;
- E por fim, faça um `push` para sua branch: `git push origin my-feature`.

Depois de fazer um `merge` na sua solicitação de recebimento, você pode excluir a sua branch.

### :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

<p align="center">Feito com ❤️ por <strong>Bruno De Masi :wave: </p>
