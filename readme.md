# Select Previsão de Ondas

[![npm version](https://badge.fury.io/js/select-previsao-ondas.svg)](https://www.npmjs.com/package/select-previsao-ondas) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/select-previsao-ondas/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/select-previsao-ondas.svg?branch=master)](https://travis-ci.com/andrelmlins/select-previsao-ondas) &bull; [![Dependencies](https://david-dm.org/andrelmlins/select-previsao-ondas.svg)](https://david-dm.org/andrelmlins/select-previsao-ondas) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/select-previsao-ondas.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/select-previsao-ondas/context:javascript)

WebComponent desenvolvido em Stencil que possibilita a seleção de estados, cidades,
e retorna as previsões de ondas respectivas. Para isso utiliza o API
[Previsáo de Ondas](https://github.com/andrelmlins/previsao-ondas), que é um WebScraping
do portal no INPE.

## Como instalar

É possível instalar através do npm da seguinte maneira:

```
npm i select-previsao-ondas
// OR
yarn add select-previsao-ondas
```

Ou somente importando o script através do projeto unpkg:

```html
<script src="https://unpkg.com/select-previsao-ondas/dist/select-previsao-ondas.js"></script>
```

## Como utilizar

Abaixo a forma de como utilizar esse componente web:

```html
<select-previsao-ondas onchange="console.log(e)"></select-previsao-ondas>
```

## Estatísticas do NPM

Estatísticas de Download do pacote npm:

[![NPM](https://nodei.co/npm/select-previsao-ondas.png)](https://nodei.co/npm/select-previsao-ondas/)

## Licença

O Select Previsão de Ondas é um software open source [licenciado como MIT](https://github.com/andrelmlins/select-previsao-ondas/blob/master/LICENSE).
