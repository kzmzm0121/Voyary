const CACHE = "voyary-v2";

const FILES = [

"/",

"/index.html",

"/style.css",

"/script.js",

"/manifest.json",

"/assets/voyary-icon.png",
"/assets/voyary-earth.png",
"/assets/voyary-logo.png",
"/assets/plane.png",

"/assets/icon-192.png",
"/assets/icon-512.png"

];

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE)

.then(cache=>cache.addAll(FILES))

);

self.skipWaiting();

});

self.addEventListener("activate", event=>{

event.waitUntil(

self.clients.claim()

);

});

self.addEventListener("fetch", event=>{

event.respondWith(

caches.match(event.request)

.then(response=>{

return response || fetch(event.request);

})

);

});
