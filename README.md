# docker-node_com_nginx
Node com Nginx para a seção Docker do curso Full Cycle.

O repositório contém um arquivo para o docker-compose que cria três containers. Um com o MySQL (contendo o BD nodedb e a table people), um com o NodeJS que demonstra um unica pagina
que, quando acessada, cria um registro no BD e mostra todos os existentes em uma lista e um com o nginx, que funciona como proxy reverso para acesso ao NodeJS.


Para rodar, utilize o comando docker-compose up -d e acesse localhost:8080.
