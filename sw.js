importScripts('/cache-polyfill-master/index.js');

<<<<<<< HEAD
var CACHE_NAME = 'my-site-cache-v1',
    urlsToCache = [
        '/',
        '/styles/main.css',
        '/scripts/jquery-ui.min.js',
        '/scripts/jquery-1.11.3.js'
    ];
=======
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/jquery-ui.min.js',
  '/scripts/jquery-1.11.3.js'
];
>>>>>>> origin/master

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
            console.log("got dat cache open, son! ayyy");
            return cache.addAll(urlsToCache);
        })
    );
});
<<<<<<< HEAD

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
=======
self.addEventListener('fetch', function(event) {
    event.respondWith(new Response("What's good with ya world?"));
>>>>>>> origin/master
});