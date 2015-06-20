console.log("yo, imma worker");

this.addEventListener('fetch', function(event) {
    event.respondWith(new Response("What's good, world!"));
});