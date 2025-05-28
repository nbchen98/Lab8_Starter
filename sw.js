// sw.js - This file needs to be in the root of the directory to work,
//         so do not move it next to the other scripts

const CACHE_NAME = 'lab-8-starter';

// Installs the service worker. Feed it some initial URLs to cache
self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      // B6. TODO - Add all of the URLs from RECIPE_URLs here so that they are
      //            added to the cache when the ServiceWorker is installed
      return cache.addAll(self.RECIPE_URLS);
    })
  );
});

// Activates the service worker
self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

// Intercept fetch requests and cache them
self.addEventListener('fetch', function (event) {
  event.respondWith(
    // B7. TODO - Respond to the event by opening the cache using the name we gave
    //            above (CACHE_NAME)
    caches.open(CACHE_NAME).then(function (cache) {
      // B8. TODO - If the request is in the cache, return with the cached version.
      //            Otherwise fetch the resource, add it to the cache, and return
      //            network response.
      return cache.match(event.request).then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request).then(function (networkResponse) {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});