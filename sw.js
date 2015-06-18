console.log("yo, imma worker");

self.addEventListener('fetch', function(event) {
    event.respondWith(new Response("What's good, world!"));
});