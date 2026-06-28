const CACHE_NAME = "voyary-v1";

const urlsToCache = [
  "./",
  "./index.html",
  "./style.css",
  "./script.js",

  "./assets/voyary-icon.png",
  "./assets/voyary-earth.png",
  "./assets/voyary-logo.png",
  "./assets/plane.png",

  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

self.addEventListener("install", event => {

  event.waitUntil(

    caches.open(CACHE_NAME)

      .then(cache => cache.addAll(urlsToCache))

  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)

      .then(response => {

        return response || fetch(event.request);

      })

  );

});
