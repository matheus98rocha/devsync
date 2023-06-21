# Nome do Projeto

Este é o README para o PROJETO utilizando o framework Next.js. 

## Requisitos

- Node.js: É necessário ter a versão mínima do Node.js 14 instalada para rodar a aplicação. No entanto, é recomendado utilizar a versão 20.0.0 do Node.js para um melhor desempenho.

## Processador CSS

Nesta aplicação, estamos utilizando o Tailwind CSS como processador CSS. O Tailwind CSS é uma biblioteca utilitária de CSS altamente personalizável que oferece uma maneira rápida e fácil de estilizar seus componentes.

Todos os estilos padrões da aplicação se encontram no tailwind.config.js

## Fluxo de Trabalho

Antes de começar o desenvolvimento de uma nova funcionalidade, siga estas etapas:

1. Crie uma nova branch com o formato `feature/nome-da-tarefa` a partir da branch principal.
2. Implemente a funcionalidade na nova branch.
3. Realize testes e verifique se a funcionalidade está funcionando corretamente.
4. Faça o commit das alterações e faça um push da nova branch para o repositório remoto.
5. Crie um Pull Request para mesclar sua branch com a branch principal(dev).

## Gerenciador de Pacotes

Utilizamos o Yarn como gerenciador de pacotes nesta aplicação. Certifique-se de ter o Yarn instalado globalmente em sua máquina antes de executar qualquer comando relacionado ao gerenciamento de dependências.

## Desenvolvimento de Componentes

Para cada novo componente criado, siga as seguintes etapas:

1. Crie um arquivo do Storybook para visualizar e testar o componente isoladamente.
2. Crie um teste unitário para o componente, garantindo a qualidade e a estabilidade do mesmo.

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

## Executando o Storybook

Para visualizar os componentes isoladamente usando o Storybook, utilize o seguinte comando:

```shell
yarn storybook
```

O Storybook será iniciado e estará disponível em `http://localhost:6006`.

## Contribuição

Se você quiser contribuir para este projeto, sinta-se à vontade para abrir um Pull Request. Teremos prazer em revisar suas alterações.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).