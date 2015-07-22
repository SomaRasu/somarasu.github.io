importScripts('/cache-polyfill-master/index.js');

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/jquery-ui.min.js',
  '/scripts/jquery-1.11.3.js'
];

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open(CACHE_NAME).then(function(cache){
           console.log("got dat cache open, son.");
           return cache.addAll(urlsToCache);
        })
    );
});