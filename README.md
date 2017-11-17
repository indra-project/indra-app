# indra-app

Aplicativo móvel do projeto Indra, baseado em [Ionic 3.x][2].

## Dependências

O ferramental do [Ionic][2] é todo construído sob o ambiente [Node.js][3], portanto é preciso ter instalado e registrado nas variáveis de ambiente. A instalação pode ser feita a partir da [página de downloads do Node.js][1] onde encontra-se instruções de instalação de cada plataforma (Windows, Linux ou OSX).

Testando a instalação do node:

```bash
node -v
npm -v
```

## Instalação e execução do projeto ionic

Primáriamente, o projeto gerência suas dependências utilizando o [npm][5] do [Node.js][3], logo, é preciso antes de tudo, baixar as dependências do projeto:

```bash
npm install
```

O projeto utiliza a [CLI (Command Line Interface) do Ionic][4] para servir o projeto em um servidor [Node.js][3] local. O comando a seguir executa o projeto na plataforma Android dentro do Ionic Lab da [CLI][4], a partir disso, o projeto é executado no browser simulando a tela de um dispositivo da plataforma.

```bash
 ionic serve --lab --platform android
```

 [1]: https://nodejs.org/en/download/
 [2]: https://ionicframework.com/docs/
 [3]: https://nodejs.org/
 [4]: https://ionicframework.com/docs/cli/
 [5]: https://www.npmjs.com/
