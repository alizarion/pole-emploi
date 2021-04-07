<p align="center">
<img src="https://i.imgur.com/YXdDFi6.jpg" width="250" alt="pole-emploi">
</p>
<h1 align="center">
Pôle Emploi API
</h1>
<p align="center">
An unofficial client for Pole Emploi API written in Typescript
</p>

<div> 
<a href="https://www.npmjs.com/package/pole-emploi"><img src="https://img.shields.io/npm/v/pole-emploi" alt="pole-emploi"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/pole-emploi@0.0.1/dist/index.js?compression=gzip" alt="gzip size"></a>
<a href="https://unpkg.com/dev-to-js"><img src="https://img.badgesize.io/https://unpkg.com/pole-emploi@0.0.1/dist/index.js?compression=brotli" alt="brotli size"></a>
</div>

## ✨ Features:
- Tiny size
- Works in Node.js and in Browser
- Built-in Typescript support
- 


## 🔧 Installation

```bash
npm i pole-emploi
```

## 🌐 Usage

Import `pole-emploi` module in your project and initialize it with your [apiKey and apiSecret](https://www.emploi-store-dev.fr/portail-developpeur/catalogueapi).

```js

import PoleEmploi from "pole-emploi";

const PoleEmploiClient = new PoleEmploi({
    apiKey: "your api key",
    apiSecret: "your api secret"
})

PoleEmploiClient.search({theme: 6, 
                         natureContrat: "E2",
                         motsCles: "naval",
                        }).then((data) => {
    console.log(data)
})

```





