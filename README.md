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


### Statisch bestand
Statisch bestanden zijn je css stylesheets, client-side javascript en je afbeeldingen. Om deze bestanden via de server te halen. Moet je de `static` express middleware gebruiken. Ik heb in mijn applicatie bestande een `public/` bestandmap gemaakt. Daarin heb ik mijn css stylesheets en mijn afbeeldingen.

#### Public bestandmap toveoegen in de server
Om mijn pagina te stijlen me de css heb ik de public bestandmap toegevoegd met de static express middleware. 

```javascript
//Gebruikt de public folder
app.use(express.static('public'))
```

### Volledige code in app.js bestand

```javascript
// Geinstalleerde packages
const bodyParser = require('body-parser');
const express = require('express');


const app = express();
const port = 5000;
const path = require("path");
// Setup de template engine ejs
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs');



//Gebruikt de public folder
app.use(express.static('public'))


// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());



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


app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:${port}`)
})
```
---
## Routes bestand
Ik heb mijn routes in een aparte bestand gemaakt. Ik heb de App een een beetje aangepast. Mijn applicatie bestaat uit:
- Homepagina met een link naar de homepagina
- Overzichtpagina met alle quotes
- Detailpagina per quotes
- Aboutpagina

Alle pagina hebben een eigen routes url. De routes is te vinden in de bestandmap `routes/quotes.js`. 


### In de quotes bestand

In quotes.js staat al de routes url voor mijn applicatie. Ik heb ten eerste een express router instantie gemaakt en de URL daaraan gekoppeld. Ik heb verder de requets package die ik heb gedownload met npm in deze bestand geïmporteerd. Hiermee kan ik wat doen met de API url.
```javascript
const express = require('express');
const request = require('request');
const router = express.Router()
```

### Routes url
Verder heb ik per pagina een url gegeven met de `router.get()` methode. 

### Homepagina
In mijn homepagina is de route een `/` slash dus de root. Dus ik ga een request doen naar de data van de API en wordt gerendered op de index.ejs template pagina.

```javascript
// /routes/quote,js
router.get('/', (req,res)=>{
    request('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1', { json: true }, (err, requestRes, body) => {
        if (err) {
            // We got an error
            res.send(err);
        } else {


            res.render('index',{
                title: 'Home',
                pageTitle: 'Design quotes'

            });
        }
    })
})
```

```html
<!-- /views/index.ejs -->
    <section id="home">
            <article>
                <h2>Welcome to Design quotes</h2>
                <p>An app with quotes from different pupular developers and designers in the world of the web.</p>
                
                <a href="/quotes"> Click here to see the quotes</a>
            </article>
        </section>
```
### Overzichtpagina
In de overzichtpagina is de route een `/quotes`. Deze pagina heeft een lijst van alle quotes die te vinden zijn in de API. Alle data wordt gerendered in de `quotes.ejs` bestand. Ik heb het een forEach loo gebruikt om alle die data te renderen. 

```javascript
// /routes/quotes.js
router.get('/quotes', (req, res) =>{
    request('https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1', {json:true}, (err, requestRes, body) =>{
        if (err) {
            // We got an error
            res.send(err);
        } else {
           
            // Render the page using the 'quotes' view and our body data
            res.render('quotes', {
                title: 'Quotes', // We use this for the page title, see views/partials/head.ejs
                pageTitle: 'All the quotes',
                quoteData: body
            });
        }
    })
})


```
```html
<!-- /views/quotes.ejs -->
     <section id="content">
                    <% quoteData.forEach((item)=> { %>
                        <article>
                        <section>
                            <q><%-item.quote%></q>

                            <p class="author"><%-item.author%></p>
                        </section>
                        <section>
                            <img src="<%-item.avatar%>" alt="Avatar">
                            <p><%-item.bio%></p>
                        </section>
                        <ul>
                            <a href="/quotes/<%-item.id%>">Quote<%-item.id%></a>
                            <li><%-item.tags%></li>
                        </ul>
                    </article> 
                    <%})%>
                   
                </section>

```

### Detailpagina NOG NIET KLAAR!!
In de detailpagina h is de route een `/qoutes/:id`. Dit betekent de ID per quotes staat in de url. Dus als je op de link klikt op een van de quotes in de overzichtpaginas. Dan ga je naar de detailpagina van die ene quote. 

```javascript
router.get('/quotes/:id', function (req, res) {
    request(`https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1/quotes/${req.params.id}`, { json: true }, function (err, requestRes, body) {
        if (err) {
            // We got an error
            res.send(err);
        } else {
            // Render the page using the 'quote' view and our body data
            res.render('quote', {
                title: `Quote ${req.params.id}`,
                pageTitle: `Quote ${req.params.id}`,
                quoteData: body.quote
            });
        }
    });
});
```
### Aboutpagina
In mijn aboutpagina is de route  `/about`. In deze pagina staat alleen maar een korte beschrijving over het app.

```javascript
// /routes/quotes.js
router.get('/about', (req, res) => {
    
    res.render('about', {
        title: 'About',
        pageTitle: 'About Design Quotes'
    });
    
})
```

```html
<!-- /views/about.ejs -->
<section id="about">

                <article>
                    <h2>Over Design quotes</h2>
                    <p>Design quotes is a single page application where students can view quotes from different design
                        principles to
                        gain inspiration for their projects.</p>

                    <p> Design Quotes is made by Keisha Alexander </p>
                </article>

            </section>

```
### Routes in de server toevoegen
Wanneer ik klaar was met de routes, heb ik geexporteerd op deze manier: `module.exports = router;`
En in mijn app.js heb ik een variabele `quotesRoter` gemaakt waarvan ik de router  inporteerde. Om de compontent te gebruiken heb ik de `app.use()` gebruikt. 

```javascript
var quotesRouter = require('./routes/quotes');
//An express zeggen om quotes.js bestand te gebruiken vor quotes router
app.use('/', quotesRouter);
```

---
## Build tools
Build tools zorgt ervoor dat je taken niet elke keer moeten doen. Het vermijd herhalende taken. 
## Bronnen