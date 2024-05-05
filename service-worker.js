self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('minha-pwa-v1').then(function(cache) {
        return cache.addAll([
          '/',
          '/index.html',
          '/https://laurielylourenco.github.io/learning-pwa/.json',
          '/free-wi.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  });
  