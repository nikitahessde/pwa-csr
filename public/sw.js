const CACHE_NAME = 'pwa-ssr-static-v1';

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok && request.url.startsWith('http')) {
    const cache = await caches.open(CACHE_NAME);
    await cache.put(request, response.clone());
  }
  return response;
}

self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  if (request.method !== 'GET') return;

  const isStaticNextAsset = url.pathname.startsWith('/_next/static/');
  const isStyleOrScript = request.destination === 'style' || request.destination === 'script';

  if (isStaticNextAsset || isStyleOrScript) {
    event.respondWith(cacheFirst(request));
  }
});
