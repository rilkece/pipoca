## Criando o APP PIPOCA
O aplicativo foi criado utilizando a build tool vite react

Para rodar o app: `npm run dev`

## Notas
- Escolhi uma estrutura de pastas e arquivos e também de distribuição das funções de cada arquivo adequados para um projeto bem maior do que o proposto no exercicio por motivos de mostrar com qual padrão de organização eu estou acostumado em meus projetos

# Estrutura Geral
- Nas pastas de componentes, eu trabalhei com 3 níveis de organização de componentes. A pasta `features`contem os componentes que funcionam como "coluna vertebral" do projeto, sendo componentes com interações fixas com os demais.  A pasta `screens`contem o conjunto de componentes alglutinados para em conjunto com as features formarem o que o usuário vai experienciar como uma página do site. Na pasta `componentes` estão todos os componentes de uso geral, podendo ser aproveitado por uma ou várias screens.
- - Cada componente fica numa pasta com 4 arquivos, um principal, um de testes, um de estilos exlusivos daquele componente e um de index, que exporta o principal e, caso necessário mexer na sua interface pode fazê-lo sem precisar alterar o arquivo principal. Dessa forma também pode se beneficiar da lógica do Javascript em referenciar apenas a pasta ao invés do arquivos específico.
- As folhas de estilo de uso geral ficam todos na pasta `styles`, isso inclui as variáveis e funções mixins, além dos estilo base.
- Services, contexts e redux também ficam em sua pasta própria, além é claro dos assets
- Os arquivos `main`servem para importar e criar a root da aplicação

