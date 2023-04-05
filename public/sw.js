const CORE_CACHE_NAME = 'cache-v3';
const DYNAMIC_CACHE_NAME ='dynamic-cache-v3';
const CORE_ASSETS = [
    '/',
    '/offline',
    '/css/style.min.css',
    'https://fonts.googleapis.com/css2?family=Gloock&family=Inter:wght@300;400;700&family=Josefin+Sans:wght@300;400;500;700&display=swap',
    'https://fonts.gstatic.com/s/gloock/v1/Iurb6YFw84WUY4NJhRakNrc.woff2',
    'https://fonts.gstatic.com/s/inter/v12/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2',
    'https://upload.wikimedia.org/wikipedia/commons/4/4e/Sir_Tim_Berners-Lee_%28cropped%29.jpg'

    

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

//activate service worker

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
})
//fetch event

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
