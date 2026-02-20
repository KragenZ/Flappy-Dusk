// Flappy Bird Dusk Edition — Service Worker
// v1.3.0

const CACHE_NAME = 'flappy-dusk-v1.3.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@700;900&display=swap'
];

// Install — cache all core assets
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Activate — clean up old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — network first, fallback to cache
self.addEventListener('fetch', e => {
  // Skip non-GET and cross-origin requests we don't care about
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(res => {
        // Cache fresh responses for our own assets
        if (res.ok && (e.request.url.startsWith(self.location.origin) || e.request.url.includes('fonts.googleapis'))) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      })
      .catch(() => caches.match(e.request))
  );
});

// Background sync for score posting (future use)
self.addEventListener('sync', e => {
  if (e.tag === 'sync-scores') {
    // Placeholder for future leaderboard sync
    console.log('[SW] Background sync triggered');
  }
});