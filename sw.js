// Include caching polyfill
importScripts('/cache-polyfill-master/index.js');

// List of files and scripts to cache
var CACHE_NAME = 'my-site-cache-v1',
    urlsToCache = [
        '/',
        '/styles/main.css',
        '/scripts/jquery-ui.min.js',
        '/scripts/jquery-1.11.3.js'
    ];

// When the worker's installed, open the cache and log it in the console.
self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            console.log("got dat cache open, son! ayyy");
            return cache.addAll(urlsToCache);
        })
    );
});

// When making a request (fetch), see if we have cached assets to load first
// If we dont, hit the network.
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            }
        )
    );
});