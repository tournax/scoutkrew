const CACHE = "scoutkrew-shell-v1";

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(CACHE).then(async (cache) => {
      const cached = await cache.match(event.request);
      try {
        const fresh = await fetch(event.request);
        if (event.request.method === "GET" && fresh.ok) {
          cache.put(event.request, fresh.clone());
        }
        return fresh;
      } catch (err) {
        if (cached) return cached;
        throw err;
      }
    })
  );
});
