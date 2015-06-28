importScripts('/cache-polyfill-master/index.js');
self.addEventListener('fetch', function(event) {
    console.log("yo, imma worker");
});