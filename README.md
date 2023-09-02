# DevSync

Este é o README para o PROJETO utilizando o framework Next.js. 

## Visualização em Tempo Real

Explore o projeto em tempo real [aqui](https://untitle-project.vercel.app/).

## Requisitos

- Node.js: É necessário ter a versão mínima do Node.js 14 instalada para rodar a aplicação. No entanto, é recomendado utilizar a versão 20.0.0 do Node.js para um melhor desempenho.

## Processador CSS

Nesta aplicação, estamos utilizando o Tailwind CSS como processador CSS. O Tailwind CSS é uma biblioteca utilitária de CSS altamente personalizável que oferece uma maneira rápida e fácil de estilizar seus componentes.

Todos os estilos e padrões da aplicação se encontram no tailwind.config.js.

## Fluxo de Trabalho

Antes de começar o desenvolvimento de uma nova funcionalidade, siga estas etapas:

Atenção: 
  Nenhum desenvolvimento deve ser feito na branch master ou dev.
  Não faça pull requests da dev para a master
  Antes de desenvolver lembre de fazer um merge com a develop

1. Crie uma nova branch com o formato `feature/nome-da-tarefa` a partir da branch principal, rodando o comando git flow feature start.
2. Faça merge ou rebase da dev
3. Implemente a funcionalidade na nova branch.
4. Realize testes e verifique se a funcionalidade está funcionando corretamente.
5. Faça o commit das alterações e faça um push da nova branch para o repositório remoto.
6. Crie um Pull Request para mesclar sua branch com a branch principal(dev), rodando o comando git flow feature finish.
7. Envie o pull request para ser avaliado e aguarde aprovação
8. Ao ser validado e aprovado, faça o merge e siga para a próxima tarefa.

## Gerenciador de Pacotes

Utilizamos o Yarn como gerenciador de pacotes nesta aplicação. Certifique-se de ter o Yarn instalado globalmente em sua máquina antes de executar qualquer comando relacionado ao gerenciamento de dependências.

## Instalação

Siga as etapas abaixo para configurar o ambiente de desenvolvimento localmente:

1. Clone este repositório em sua máquina.
2. Acesse a pasta do projeto: `cd nome-da-pasta`.
3. Instale as dependências utilizando o comando: `yarn install`.

## Executando a Aplicação

Para iniciar a aplicação localmente, utilize o seguinte comando:

```shell
yarn dev
```

A aplicação será executada em modo de desenvolvimento e estará disponível em `http://localhost:3000`.

## Construindo a Aplicação

Para construir a aplicação em modo de produção, execute o seguinte comando:

```shell
yarn build
```

Os arquivos otimizados para produção serão gerados na pasta `./out`.

## Executando Testes

Para executar os testes unitários da aplicação, utilize o seguinte comando:

```shell
yarn test
```

Os testes serão executados e os resultados serão exibidos no console.

## Guia de desenvolvimento

Estamos utilizando o tailwindcss-animated para facilitar a animação de elementos. https://www.tailwindcss-animated.com/
Para auxilio da criação de componentes temos as seguintes opções:
https://www.hyperui.dev/components/marketing/buttons (Gratuito)
https://tailwindui.com/components/application-ui/overlays/modals (Gratuito com limitações)

## Desenvolvimento de Componentes

Para cada novo componente criado, siga as seguintes etapas:

1. Crie a pasta do componente, seguindo o padrão de que caso o componente seja reutilizável ou especifico de um único componente.
2. Crie um teste unitário para o componente, garantindo a qualidade e a estabilidade do mesmo.
3. Lembre-se de utilizar as cores tema da aplicação que se encontram dentro do arquivo tailwind.config.js
4. Ao finalizar o desenvolvimento do componente o adicione em sua respectiva tela.

## Desenvolvimento de telas

1. Por padrão toda tela deve utilizar apenas componentes já testados.
2. Lembre-se de utilizar os padrões de projeto para criação de novas telas e de se atentar as regras do next em sua versão 13 ou superior.

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir um Pull Request. Teremos prazer em revisar suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).