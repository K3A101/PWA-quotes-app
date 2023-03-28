const CORE_CACHE_NAME = 'cache-v2';
const RUNTIME_CACHE_NAME = 'runtime-cache';
const CORE_ASSETS = [
    '/',
    '/offline',
    '/css/style.css',
    'https://fonts.googleapis.com/css2?family=Gloock&family=Inter:wght@300;400;700&family=Josefin+Sans:wght@300;400;500;700&display=swap',
    'https://fonts.gstatic.com/s/materialsymbolsoutlined/v100/kJEhBvYX7BgnkSrUwT8OhrdQw4oELdPIeeII9v6oFsI.woff2'
    

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
                        if (cacheName !== CORE_CACHE_NAME) {
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
    })
   )

   
    console.log('fetch event', event);
});
// self.addEventListener('fetch', (event) => {
//     const path = new URL(event.request.url).pathname

//     if (event.request.headers.get('accept').includes('text/html')) {
//         event.respondWith(
//             caches.open(RUNTIME_CACHE_NAME)
//                 .then(cache => cache.match(event.request))
//                 .then(response => response || fetchAndCache(event.request))
//                 .catch(() => caches.open(CORE_CACHE_NAME)
//                     .then(cache => cache.match('/offline')))
//         )
//     } else if (CORE_ASSETS.includes(path)) {
//         event.respondWith(
//             caches.open(CORE_CACHE_NAME)
//                 .then(cache => cache.match(path))
//         )
//     }
// })

// function fetchAdnCache(request) {
//     return fetch(request)
//         .then(response => {
//             const clone = response.clone()
//             caches.open(RUNTIME_CACHE_NAME)
//                 .then(cache => cache.put(request, clone))

//             return response
//         })
// }
