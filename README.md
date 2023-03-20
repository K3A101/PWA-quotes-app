# Stress relief- quotes - Progressive Web Apps 
Voor het vak progressive web app, ga ik  mijn  Stess relief qoutes app refatoren naar een server side applicatie. 

## Applicatie installeren
Wat heb je nodig:
- npm
- nodejs
- express
- Template engine ejs

### NPM en Node.js installeren
Om de server te installeren heb ik node en express gebruikt. Dat doe ik met `nvm`. Nvm is package installer waar je verschillende packages kan installeren. Hiermee heb ik de laatste versie van npm en node geïnstalleerd. 

#### 1. nvm installeren
```
nvm install 19.8.1
```
Als je deze commando in je terminal intoets dan installeer je de laatse versie van npm en node.js. Je moet ervoor zorgen dat je allemaal installeer in je root van je app folder.

#### 2. Versie bekijken
Om  te kijken of je de juiste versie hebt moet je achter de pakketnaam een -v toevoegen. 
```
node -v
<!-- Output -->
<!-- v19.8.1  -->
```
    npm -v
    <!-- Output -->
    <!-- 9.5.1 -->

### NPM Package installeren
#### Package.json opzetten
Om een package.json te installeren gebruik je de commando `npm init`. Als output krijg je bepaalde vragen waar je gegevens die je moet invullen. Zoals de naam van de applicatie, maker van de applicatie, applicatie versie, licentie, repo, geïnstalleerde npm packages etc. Hieronder ziet u een voorbeeld van wat er staat in mijn package.json bestand.

```
{
  "name": "pwa-quotes-app",
  "version": "1.0.0",
  "description": "Stress relief quotes app is een app waar je citaten van verschillende beromende mensen in het wereld van de web.",
  "main": "app.js",
  "directories": {
    "doc": "docs",
    "example": "examples"
  },
  "scripts": {
    "start": "nodemon app.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/K3A101/PWA-quotes-app.git"
  },
  "keywords": [
    "quotes"
  ],
  "author": "Keïsha Alexander",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/K3A101/PWA-quotes-app/issues"
  },
  "homepage": "https://github.com/K3A101/PWA-quotes-app#readme",
  "dependencies": {
    "body-parser": "^1.20.2",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "nodemon": "^2.0.21"
  }
}

```

### Benodige packages installeren
Als je een functionaliteit wilt toevoegen, heb ik npm registery gebruikt, daar vind je verschillende packages die je in je app kan gebruiken. 
Tot nu toe heb ik express, nodemon, ejs en body-parser geïnstalleerd.
Om paketten te installeren gebruik je de volgende commando.

    npm install express
    <!-- npm install <package-name> -->

### Applictie gebruiken

#### Repository Clonen
    git clone https://github.com/K3A101/PWA-quotes-app.git


#### Npm install

Als de applicatie eenmaal klaar is en je wilt hem gebruiken dan moet je alleen `npm install` gebruiken. Alle packages binnen  mijn  app wordt automatisch geïnstalleerd.


#### Server starten
    npm start

---

## Server maken
### Express installeren
Om een server te maken voor mijn applicatie, heb ik de library express gebruikt. Ik heb express geinstalleerd met npm. 

    npm install express

Verder heb ik een `app.js `bestand gemaakt. In de app.js bestand ga ik mijn server bouwen. 

### Express importeren
Ten eerste heb ik express geïmporteerd met de `require()` methode. 

```javascript
// app.js
const express = require('express');
const app = express();
const port = 5000;
```

### Basic routing
Verder heb ik een routing toegevoegd voor alle pagina's applicatie. Dus de pagina wordt gerendered als de url past. Het is een request om de url op te halen van de server. Verder word pagina gerendered met een templating engine. Hier is de structuur van een server-side routing.

    app.METHOD(PATH, HANDLER)

1. app is een isntallatie van express
1. Method is een HTTP request method ( POST, GET, PUT, DELETE)
1. Path is een pad van de server
1. Handler is een functie die uitgevoerd wordt als de route overeenkomen

#### Routing in design quotes app

```javascript
// app.js
// Home pagina
app.get('/', (req, res) => {
    res.render("index")
    // res.send('Hello World!!!')
})

// About pagina
app.get('/about', (req, res) => {
    res.render("about")
    // res.send('Hello World!!!')
})


```
Wanneer de ik de request krijgt dan wordt de about of home pagian gerendered. Om de HTMl te renderen heb ik gebruikt gemaakt van ejs template engine. Ik komst straks weer op terug. 


### Server starten op local host
Om de server te starten heb ik de `app.listen()`methode gebruikt. Ik heb eerst een variabele `const port: 5000;` gemaakt.  En als argument in de functie gezet. Dus als ik de server wil starten gebruik ik deze link: [ http://localhost:5000](http://localhost:5000).

```javascript
// app.js
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})
```

#### Nodemon
Om het makkelijk te maken voor mezelf heb ik package geinstalleerd dat ik de server kan refeshen. Daarmee hoeft ik niet elke keer de server starten met `node app.js`

#### Npm scripts
Ik heb eem npm script gemaakt waar ik de server kan starten. Het is een soort van zelf gemaakte npm commando die je aan de terminal kan geven om bepaalde taken uit te voeren. Ik heb een script warmee ik de server kan starten. In de terminal voer je deze commando in: `npm start` of `npm run start`

```json
// package.json
 "scripts": {
    "start": "nodemon app.js"
  },
```

### Package in server importeren
Als je npm package importeert dan moet je de `app.use()` methode gebruiken.  Hier heb ik de body-parser geinstalleerd. 
```javascript
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json());
```

---
## Template engine
Een templating engine zorgt ervoor dat je statische paginas kun renderen via de server side javascript. Dus je kan bijvoorbeeld je html, css en afbeelding via de server implementeren. Er zijn verschillende soorten template engine. Ik heb ejs gebruikt. 


### Ejs installeren
Het eerste wat je moet doen is ejs installeren met npm
   
    npm install ejs

### Templating ejs in de server toevoegen
In de server moet je aangeven welke templating ejs je gaat gebruiken. Je gebruikt de `app.set()` methode.

    app.set('view engine', 'ejs');


### Views bestandmap maken
Daarna maak je een views bestandmap. Hierin komt al je ejs paginas van je applicaties. 


### Public bestand


---
## Bronnen