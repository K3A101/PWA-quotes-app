# Stress relief- quotes - Progressive Web Apps 
Voor het vak progressive web app, ga ik  mijn  Stess relief qoutes app refatoren naar een server side applicatie. 

# Inhoud
- [Applicatie installeren]()
- [NPM package installeren]()
- [Node en NPM installeren]()
- [Applicatie gebruiken]()
- [Express Server maken]()
- [Routing]()
- [Template Engine]()
- [URL endpoints]()
  - [Homepagina]()
  - [Overzichtpagina]()
  - [Detailpagina]()
  - [Aboutpagina]()
  - [Build Tools]()
- [Maak de webapplicatie een progressive web App]()
- [Hoe maak ik de App installeerbaar]()
- [Manifest.json]()
- [Service worker]()
- [How werkt de service worker]()
- [Activity Diagram van Service worker]()
- [Critical Rendering Path]()
- [Web App structuur]()
- [Build Tools]()
---

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
Als je deze commando in je terminal intoets dan installeer je de laatse versie van npm en node.js. Je moet ervoor zorgen dat je ze allemaal installeer in je root van je app folder.

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
Om een package.json te installeren gebruik je de commando `npm init`. Als output krijg je aantal vragen die je moet invullen. Zoals de naam van de applicatie, maker van de applicatie, applicatie versie, licentie, repo, geïnstalleerde npm packages etc. Hieronder ziet u een voorbeeld van wat er staat in mijn package.json bestand.

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
    "start": "node app.js",
    "dev": "nodemon app.js",
    "minify:server": "uglifyjs app.js -c -m -o app.min.js",
    "minify:routerFolder": "uglifyjs-folder ./routes -eo ./routes-output",
    "minify:routerOne": "uglifyjs-folder ./routes -o ./routes-output/routes.min.js",
    "minify:js": "uglifyjs-folder ./public/script -eo ./public/script-output/clientside.min.js"
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
    "axios": "^1.3.4",
    "ejs": "^3.1.9",
    "express": "^4.18.2",
    "express-minify-html": "^0.12.0",
    "request": "^2.88.2"
  },
  "devDependencies": {
    "nodemon": "^2.0.21",
    "sass": "^1.59.3",
    "uglify-js": "^3.17.4",
    "uglifyjs-folder": "^3.2.0"
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
Om de server te starten moet je deze commando onderaan uitvoeren:

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
![Overzichtpagina](./public/images/overzichtpagina.png)

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
In de detailpagina h is de route een `/qoutes/:id`. Dit betekent de ID per quotes staat in de url. Dus als je  de link klikt via een van de quotes in de overzichtpaginas. Dan ga je naar de detailpagina van die ene quote. 

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

### Versie 2: Detailpagina
Ik heb een iteratie gemaakt aan mijn detailpagina. Met de package `request` was het niet mogelijk om een detailpagina te maken op basis van de Id. Want het was een beperking met mij API. Ik heb daardoor een andere pakket gebruikt. Die heet __axios__. Axios lijkt bijna hetzelfde als de fetch API in het client-side. 
![Detailpagina](./public/images/detailpagina.png)

Ten eerste heb ik de package geinstalleerd met:

    npm install axios

Het is bijna hetzelfd als de vorige maar hoer heb ik de `request()` verandert met `axios.get()`. Daarin zet ik mijn Url. Verder doe ik een response naar de APi. Ik ga ook opzoek naar id. Als de overeen 

```javascript
router.get('/quotes/:id', function (req, res) {

    const id = req.params.id;
    const API_URL = `https://opensheet.elk.sh/14joQ9h8M0ydoJJ-fNYN68ls3TWPCvk8ZvBJvUXpF1cQ/sheet1/`;
    axios.get(API_URL)
        .then(function (response) {
            const quotes = response.data;
            const quote = quotes.find(quote => quote.id === id);
           
            if(quote){
                 res.render('quote', {
                title: `Quote ${id}`,
                pageTitle: `Quote ${id}`,
                quoteData: quote
            });
            }else {
                res.status(404).send('Quote not found');
            }
           
        })
        .catch(function (error) {
            // We got an error
            console.error(error);
            res.send(error);
        });
});

```
### Aboutpagina
In mijn aboutpagina is de route  `/about`. In deze pagina staat alleen maar een korte beschrijving over het app.
![aboutpagina](./public/images/aboutpagina.png)

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
Build tools automatiseert herhalende taken en optimaliseert de workflow wanneer de applicatie gedeployed is. Build tooling wordt gebruikt meestal :
- om javascript bestanden te verkleinen en minimaliseren. 
- Voor CSS preprossesor zoals Sass, less, Stylus.
- om  Afbeeldingen via een bron te laden
- Om HTML bestanden prerenderen

Tijdens mijn onderzoek ben tegen verschilldende tools gekomen zoals webpack, grunt, browserfy, parcel, minifyjs, uglifyjs enz. Voor CSS had ik  verschillende preprocessors gevonden zoals SASS,LESS en Stylus. Uiteindelij heb ik uglifyjs en SASS gekozen om verder mee te werken. Ik heb OA  de tooling gekoppeld aan een NPM script. Ik Nu Stap voor stap uitleggen hoe ik had alles gedaan.

## Uglify.js
uglifyjs is een npm package waar je bestanden kan comprimeren, verkleiner en een verfraaiing. Hier is een link naar de [documentatie](https://github.com/mishoo/UglifyJS).

### Installeren
Je installeert uglifyjs met `npm install` commando:
```
 npm install uglify.js
```  
 Ik heb die van mij in de devDependencies geplaats met 
```
 npm install uglify.js --save-dev  
```
### Hoe je moet het gebruiken?
Om uglify te gebruiken, moet je de volgende commando in de terminal plaatsen.
```
uglifys [input bestand] [options]
```
Ten eerste zet je uglify naar voren en daarna bij `[input bestand]`zet je de bestande(n) die je wil minimaliseren. `[options]` zijn taken die je kan doen met de bestand die je wil minimaliseren. Er zijn verschillende keuzes. Het meest gebruikt zijn:
- -c --compress; bestand comprimeren
- -m --mangle
- -o --output <file>; Het geminimaliseerde uitgevoerde bestand. 

Er zijn verschillende soorten taken die je kan toevoegen. Om ze te bekijken moet je `uglifyjs -help` in de terminal plaatsen. 

### Build tools in npm scripts
Ik heb een paar build tool npm scripts gemaakt, zodat ik makkelijk mijn bestanden kan minimaliseren. 

```json

"minify:server": "uglifyjs app.js -c -m -o app.min.js",
    "minify:routerFolder": "uglifyjs-folder ./routes -eo ./routes-output",
    "minify:routerOne": "uglifyjs-folder ./routes -o ./routes-output/routes.min.js",
    "minify:js": "uglifyjs-folder ./public/script -eo ./public/script-output/clientside.min.js"
```

Ik heb ten eerste een npm script gemaakt om de server te bundlen als het ooit groot wordt. De script hiervoor is `npm run minify:server`. Als ik dit commando uitvoert, wordt de verkleinde versie opgeslagen in een `app.min.js`. Verder heb ik een extra npm package geinstalleerd: `uglify-folder`. Het zorgt ervoor dat alle bestanden in een bepaalde bestandmap apart wordt gecomprimeerd. Maar er is ook een mogelijkheid om alle bestanden in een bestandmap in een bestand wordt opgeslagen. 

## SASS
Sass is een css preprocessor. Sass wordt gebruikt wanneer de css stylesheet groot wordt en moeilijk wordt om te behandelen. Het zorgt ervopr dat de css leesbaar blijft. Sass komt met verschillende functionaliteiten die niet te vinden is in normale css. Functionaliteiten zoals nesten,  mixins and inheritance.

### Sass installeren
Ik heb Sass in mijn terminal geinstalleerd met npm.

    npm install sass --save-dev

Ik de package in mijn devDependencie geinstalleerd. 


### Sass gebruiken
Om Sass te gebruiken moet u de bestand extensie zetten als`.scss`. Hierin kun je de functionaliteiten gebruiken. Daarna voer je een commando in die ervoor zorgt dat de Scss bestand naar wordt omgezet naar css want de browser kan alleen css lezen. De commando die ik moet uitvoeren is:


```npm
sass --watch style-test.scss output.css

```
Hiermee wordt de scss bestand compiled naar css met de bestandnaam output.css.

### Functionaliteit met sass

### Nesten
Elementen die bij elkaar horen kunnen genest worden onder een parent element. Ik kan een voorbeeld in mijn project. 

```scss
// styles.scss 
/**********/
/* HEADER */
/**********/
header {
    width: 100%;
    display: grid;
    align-items: end;
    position: relative;
    /* height: 30vh; */
    gap: 2em;

 section:nth-of-type(1) {
    display: flex;

    align-items: center;
    gap: .5em;
}

 section:nth-of-type(1) h1 {
    font-size: 1em;
    align-self: flex-end;
    /* color: var(--donker-blauw) */
}

 section:nth-of-type(1) img {
    width: 3em;
    height: 3em;
    aspect-ratio: 1;
}


}

```
---

## Maak de applicatie een Progressive Web App.
In de volegnde opdracht heb ik mijn applicatie omgezet in een progressive Web App(PWA). Dus ik zorgde ervoor dat ik mijn app kan  installeren via mijn browser naar mijn lokale computer. De voordelen van PWA zijn:
- Het is snel 
- De app kan offline gebruikt worden
- Je kan het installeren op de homescherm van je telefoon of desktop op je laptop
- Je krijgt push notificatie als iets in de achtergrond van de App is gebeurd


## Hoe maak ik de App een PWA/ installeerbaar
Om de App om te zetten in een PWA moet je de volgende dingen hebben namelijk,
- HTTPS
- Service Worker
- Manifest.json bestand


### Dev tools in Chrome

### Applicatie tab
In Chrome als je op de applicatie tab gaat kun je bekijken of er wel een manifest.json bestand heeft in je applicatie. Ook kun je informatie vinden over de server worker etc. 

### Lighthouse
In de lighthouse tab ga de browser je applicatie beordelen of je bepaalde riteria behaald zoals seo, toegankelijkheid, performance, Best practices en Progressive Web App. Als je bepaalde criteria niet voldoet dan krijg  je oplossing om die te verbeteren.


## Manifest.json
De Manifest bestand is een json bestand met bepaalde nformatie die je moet invullen voor de PWA. Het verteld de browser hoe de app moet gedragen als die geïnstalleerd is.

### Hoe maak je een manifest bestand?
Ten eerste maak je een bestand in de root van de project. Mijn applicatie is server-side gerendered dus ik heb de van mij in de root gezet van de public bestand. Verder heb ik een bestand gemaakt die heet `manifest.json`. In de Manifest.json enkele object properties. 
Properties die je tenminste moet hebben in je manifest bestand zijn:
- `short_name` - Korte naam van de applicatie
- `name` - Volledige naam van de applicatie
- `icons` - de thumbnail die je ziet bij de homescherm
- `display`, hoe die moet eruit zien. (standalone, fullscreen, minimal-ui)


```json
// manifest.json
{
    "name": "Design Quotes for students", //volledige app naam
    "short_name": "Design Quotes", //korte app naam
    "start_url": "/", //waar de pagina begint 
    "scope":"/",
    "display":"standalone",
    "background_color": "#75B6A2", //kleur van bar bovenaan
    "theme_color": "#75B6A2", //achtergrond kleur wanneer de app offline is
    "orientation":"portrait-primary",
    "icons": [] //iconen voor de app


```
## Manifest bestand verbinden
Om de manifest bestand te koppelen aan de app moet je die zetten in de `<link>` van je html pagina's.
```html
 <link rel="manifest" href="/manifest.json">
```
Als je naar de Applicatie browser gaat, dan kun de informatie die je hbe ingevuld terug zien.

---

## Service Worker
Het volgende stap om mijn prototype een progressive web app te maken, heb ik een service worker geinstalleerd. Voordat ik aan het werk ging, heb ik een Job Story bedacht om een richtlijn te krijgen van de stappen die ik moet nemen. 

### Job Story
> Wanneer ik in de trein zit en geen goed internetverbinding hebt, wil ik alsnog de lijst met citaten zien, zodat ik onderweg nog steeds inspiratie kunnen krijgen voor mijn schoolprojecten. 


## Wat is een service worker?
Service workers gedragen als een proxy server tussen de web applicatie, de browser en de network(met verbinding).
 Hun taak zijn:
- Een goed offline ervaring te creëren.
- Kijken naar request en reponse tussen de server en de client.
- Geef toegang voor push meldingen.


### Kenmerken van een service worker
- Het is een web API
- Het is geschreven met javascript
- Werkt in de achtergrond
- Staat in een aparte lijn ten opzichte de server en de client
- Het event gebasseerd
- Heeft geen toegang tot Document Object Model
- Kan geen javascript modules importeren
- Ze draaien alleen op HTTPS vanwege beveiliging. 


## Hoe werkt het allemaal?

### Stap 1: Service worker bestand maken
Ik heb in de root van mijn public bestand, de `sw.js`, bestand gemaakt. Als ik niet server side hoefde te werken, moest ik gewoon in de root van mijn applicatie werken. 

### Stap 2: Service worker registreren 
Verder moet je de service worker registreren, zodat de browser weet dat dit web app een service worker bevat. Wat ik heb gedaan is een partails bestand gemaakt met daarin de registratie script. Vervolgens heb ik met de `include()` methode deze stukje code in al mijn pagina's geplaatst.

```html
<script>
    if('serviceWorker' in navigator){
        navigator.serviceWorker.register('/sw.js')
        .then((reg) => console.log('Service worker registered', reg))
        .catch((err)=> console.log('Service worker not registered', err))  
    }   
</script>
```
Deze functie stuurt een bericht naar de console dat die geregistreerd is. IK geef aan welke bestand de server worker is. 


### Onderdelen van de server worker
Een server is event gebaseerd. Het bestaat uit drie events, de install event, de activate event en de fetch event. In de install event wordt de server worker geinstalleerd. Hier wordt ook de precaching gedaan. Verder heb je de activate event,hier wordt de service worker geactiveerd en klaar gemaakt om request en response te nemen. En Als laatste heb je de fetch event. In deze event wordt de opgeslagen data opgehaald en gerendered op de pagina of gaat terug naar de offline fallback pagina.

### Stap 4: Service worker bestand opstellen

### Precaching install event
De precaching  wordt gedaan in de install event. Ik heb twee constante variabele. De `CORE_CACHE_NAME` is de versie naam van de service worker/cache en de `CORE_ASSETS` zijn de statische bestanden die ik van te voren wil cachen zodat die beschikbaar zijn wanneer de gebruiker geen internet verbinding heeft. Statisch bestanden zijn voor css, client-side javascript, fonts ect. 

```javascript
const CORE_CACHE_NAME = 'cache-v1';
const DYNAMIC_CACHE_NAME ='dynamic-cache-v1';
const CORE_ASSETS = [
    '/',
    '/offline',
    '/css/style.css',
    'https://fonts.googleapis.com/css2?family=Gloock&family=Inter:wght@300;400;700&family=Josefin+Sans:wght@300;400;500;700&display=swap',
    'https://fonts.gstatic.com/s/gloock/v1/Iurb6YFw84WUY4NJhRakNrc.woff2',
    'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2'  
];

// install service worker
self.addEventListener('install', event => {
    console.log('service worker has been installed');
    event.waitUntil(
        caches.open(CORE_CACHE_NAME)
        .then(cache =>cache.addAll(CORE_ASSETS))
         .then(() => self.skipWaiting())
    );   
});
```
- `skipWaiting()`
- `waitUntil()`
- `self` is de service worker zelf
### Serve from cache met fetch event
Met de fetch event haal ik de data uit de cache. Dus wanneer de gebruiker de pagina benadert wordt de url ogeslagen in de `DYNAMIC_CACHE_NAME`. Dus wanneer er geen internetverbinding is het offline mogelijk om de pagina's te gebruiken. Bij de niet opgeslagen url is het onmogelijk om de pagina te gebruiken als je offline bent. In dit geval krijgen deze pagina een offline fallbackpagina
![offlinepagina](./public/images/fallbackpagina.png).

```javascript
self.addEventListener('fetch', event => {
   event.respondWith(
    caches.match(event.request).then(cacheRes =>{
        return cacheRes || fetch(event.request)
        .then(fetchRes => {
            return caches.open(DYNAMIC_CACHE_NAME)
            .then(cache => {
                cache.put(event.request.url, fetchRes.clone());
                return fetchRes;
            })
        });
    }).catch(() =>{
        if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/offline')
        }
    })
   );
    console.log('fetch event', event);
});

```

### Cache verschonen met het activate event 
In de activate wordt de server worker geactiveerd wanneer het klaar is met installeren. Ik heb een functie geschreven waar ode cache versie verwijdert wordt en door het nieuwe verplaatst worden. Hieronder staat mijn code:

```javascript
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(cacheNames => {
                return Promise.all(
                    cacheNames.map(cacheName => {
                        if (cacheName !== CORE_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
                            return caches.delete(cacheName);
                        }
                    })
                )
            })
    )

```
Als de oude caches niet matchen dan wordt de oude versie verwijdert.
## Activity Flow van de Service worker
![Activity Diagram](public/images/activity-diagram-service-worker.png)

Dit is mijn activity diagram voor de service worker. Het diagram bestaat uit, een wireflow van de applicatie. De url endpoints van de applicaties. Onderaan heb je de control flow dus de belangrijkste onderdeel van de activity diagram. 

---
# Critical rendering path
Wat is critical rendering path?  De critical rendering path verwijst naar het proces van het weergeven van een webpagina in de browser, vanaf het moment dat de gebruiker een URL invoert totdat de pagina volledig is geladen. Het optimaliseren van de critical rendering path is belangrijk omdat het de laadtijd van een pagina beïnvloedt, wat op zijn beurt van invloed kan zijn op de gebruikerservaring en zoekmachine ranking.

Om de critical rendering path te optimaliseren, zijn er verschillende technieken en best practices die kunnen worden geïmplementeerd. Enkele voorbeelden hiervan zijn:
- Code Minimaliseren
- Bestanden comprimeren
- Optimaliseer afbeeldingen door ze te comprimeren, het gebruik van afbeeldingsformaten te optimaliseren en afbeeldingen te schalen naar de juiste afmetingen.
- Gebruik asynchrone laadtechnieken: Het gebruik van asynchrone laadtechnieken zoals lazy loading en het laden van scripts aan het einde van de pagina kan de laadtijd verbeteren.

### Hoe kon ik de performance van me applicatie testen? 
Om de performance van de app te testen, heb ik de dev tools in de browser gebruikt. De eerste is lighthouse. Lighthouse maakt een analyse en geef je een score terug. Onderaan zijn er bepaalde criteria's die je moet voldoen om de performance te verhogen. Het volgende functionaliteit is de netwerk tab, hier kan je informatie vinden van je http request. Het laatste onderdeel is de applicatie tab, hier zijn de browser API's. Voor deze vak moest ik alleen kijken, bij de manifest, Service Worker en de Cache Storage. 


## Hoe heb ik de critical rendering path beter gemaakt? 
Voor mijn critical rendering path wil ik de percieved load speed optimaliseren en de runtime responsiveness. 
Om de critical rendering path te verbeteren en optimaliseren, heb ik een aantal dingen gedaan:

### 1. CSS minimaliseren
De eerste wat ik heb gedaan is de css, minimaliseren. Ik heb een plugin van vscode gebruikt. Maar de plugin is hetzelfde als de build tool van uglifyjs. Wat dit doet, is het haal alle witruimte en zet alle css properties op een lijn. 
Ik heb een voorbeeld laten zien van mijn prototype met en zonder geminimaliseerde css.

![Geminimaliseerde Css](public/images/css-minify-2.png)
![Normale css](public/images/css-norm-2.png)


### 2. HTML minimaliseren
Om de html te minimaliseren heb ik gebruikt gemaakt van express-minify-html. Het is een express middleware die je in de express server kan toevoegen met de `app.use` instantie. Verder kun je bepaalde opties geven die hij moet rekening houden tijdens het minimalisatie. Hier is de code die ik heb daarvoor gebruikt. 

```javascript
const minifyHTML = require('express-minify-html');

app.use(minifyHTML({
    override: true,
    exception_url: false,
    htmlMinifier: {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        minifyJS: true
    }
}));

```
### Lazy Loading voor afbeelding
Mijn prototype gebruikt veel afbeeldingen en het zorgt ervoor dat de afbeeldingen niet meteen geladen wordt maar wanneer het echt noodzakkelijk is. Wat ik heb gedaan is bij de `<img>` heb ik de `loading="lazy"` geplaatst. Het zorgde ervoor dat de pagina snel laad. Ja want in mijn applicatie is de citaten dat belangrijk zijn en niet de afbeeldingen. Dus als die later geladen wordt is het niet erg. 


### Afbeelding verkleinen
Een andere oplossing is de grootte van de afbeelding te verkleinen. Voor mij kan het makkelijk, want ik kan direct mijn api aanpassen. De afbeeldingen in de API zijn links vanuit verschillende websites. Dus ik heb per afbeelding de originele afbeelding link gevonden. Hierin kan je de ook de grootte zien. Ik heb de afmetingen in de link kleiner gemaakt. Meeste afbeelding waren groot dus in de netwerk tab duurt het even zodat ze gerendered zijn. Maar door die kleine aapassingen werd iets sneller. Hieronder is een voorbeeld:

![Afbeelding verkleinen](/public/images/api.png)

### Font subsetting
Ik heb custom fonts van google fonts gebruikt in mijn app. Deze lettertypes zijn belangrijk want het onderscheid de type informatie die ik wil aan de gebruiker laten zien. 
Toe ik mijn app teste, heb ik gemerkt dat voordat het pagina geladen wordt, kon je de fonts niet zien. Als er iemand de app zou gebruiken met een trage apparaat en internetverbinding, dan kunnen de app meemaken zonder lettertype. Dit fenomeen heet de foit (Flash of invisible text). Om foit te voorkomen moest ik de css property `@font-face` gebruiker per lettertype met daarbij `font-display: swap`.

![foit](public/images/font-display-swap.png)

Ik heb dus de google fonts geinstalleerd en in fontsquirrel een webfont ervan gemaakt. Verder heb ik de fonts in de font-face property geplaats met de font-display.

Want het doe is voordat de pagina klaar is met laden, wordt eerst de systeem fonts gerendered en nadat de pagina wordt geladen wordt de systeem fonts verandert (swap) met de custom fonts.

```css

@font-face {
    font-family: 'Josefin Sans';
    src: url(../fonts/josefinsans-bold-webfont.woff2) format(woff2);
    font-display: swap;
}

@font-face {
    font-family: 'Josefin Sans Regular';
    src: url(../fonts/josefinsans-regular-webfont.woff2) format(woff2);
    font-display: swap;
}

@font-face {
    font-family: 'Gloock';
    src: url(../fonts/gloock-regular-webfont.woff2) format(woff2);
    font-display: swap;
}

@font-face {
    font-family: 'Inter';
    src: url(../fonts/inter-variablefont_slntwght-webfont.woff2) format(woff2);
    font-display: swap;
}

```
Dit is het resultaat nadat ik dit heb gedaan.
![foit](public/images/font-face.png)

### Caching control
Caching control is een methode die wordt gebruikt om de cache-instellingen van een webpagina of een ander bestand op een webserver te beheren. Wanneer een browser een webpagina bezoekt, wordt een kopie van de pagina opgeslagen in de cache van de browser om de laadtijd van toekomstige bezoeken aan die pagina te versnellen...

De code die ik hiervoor had gebruikt:
```javascript
let options = { maxAge: '2y' }
app.use(express.static('public', options))
```
---
## Applicatie online zetten
De laatste onderdeel voor dit opdracht is de app online zetten. Hiervoor heb ik een online webserver gebruikt  die mijn webapp kan hosten. Ik heb `railway.app` gebruikt. Met railway kan ik mijn github account koppelen en elke keer dat ik commit wordt het ook op railway aangepast. 

![Railway](public/images/railway.png)
---
## Bronnen
- https://sass-lang.com/guide
- https://www.youtube.com/watch?v=4XT23X0Fjfk&list=PL4cUxeGkcC9gTxqJBcDmoi5Q2pzDusSL7&ab_channel=TheNetNinja
- https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API
- https://web.dev/why-speed-matters/
- https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display
- https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path
- https://github.com/mishoo/UglifyJS#readme
- https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json
