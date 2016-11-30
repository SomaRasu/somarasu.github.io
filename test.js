// If 'navigation.serviceworker' is available, go 'head and wind it up!
// ( or try to )
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/' // scope == origin, so it'll be registered wherever you go
    }).then(function(reg) {
        console.log('Yoooooo!', reg); // it worked! :D
    }).catch(function(err) {
        console.log('Fuuuuuck!', err); // it didnt work D:
    });
}

