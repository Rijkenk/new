const CACHE_NAME = 'mijn-app-cache-v1';
const urlsToCache = [
  'index.html',
    'jquery-2.1.4.min.js',
    'jquery.mobile-1.4.5.min.js',
    'jquery.mobile-1.4.5.min.css',
    'jquery.fullscreen-min.js',
    'localDB.min.js',
    'scoreboard8910.html',
  'manifest.json',
  'img/icon-192.png',
    'img/icon-512.png',
    'img/1B.svg',
    'img/2B.svg',
    'img/3B.svg',
    'img/4B.svg',
    'img/5B.svg',
    'img/6B.svg',
    'img/7B.svg',
    'img/8B.svg',
    'img/9B.svg',
    'img/10B.svg',
    'img/11B.svg',
    'img/12B.svg',
    'img/13B.svg',
    'img/14B.svg',
    'img/14-1Btn.svg',
    'img/15B.svg',
    'img/8910Btn.svg',
  // Voeg hier meer bestanden toe indien nodig
];

// Installatie: cache alle bestanden
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch: serve uit cache wanneer mogelijk
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
