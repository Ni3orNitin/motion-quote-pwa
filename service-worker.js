self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  // This can be expanded later for offline caching.
});