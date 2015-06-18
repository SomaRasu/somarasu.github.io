if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '/'
    }).then(function(reg) {
        console.log('Yoooooo!', reg);
    }).catch(function(err) {
        console.log('Fuuuuuck!', err);
    });
}

