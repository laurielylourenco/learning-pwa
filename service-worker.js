self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open('minha-pwa-v1').then(function(cache) {
        return cache.addAll([
          '/learning-pwa',
          '/learning-pwa/index.html',
          '/learning-pwa/manifest.json',
          '/learning-pwa/free-wi.png'
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
  