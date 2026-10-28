// SPA SPB SPC Rekenaar: offline-cache.
// De pagina zelf: eerst het net (zo krijg je updates), zonder verbinding de bewaarde versie.
// Iconen en lettertypes: uit de cache, en bij de eerste keer online bewaard.
const CACHE = 'spa-rekenaar-v1';
const CORE = ['./', './index.html', './manifest.webmanifest',
  './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png', './icons/apple-touch-icon.png'];
const FONT_HOSTS = ['fonts.googleapis.com', 'fonts.gstatic.com'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function store(request, response){
  if (response && (response.ok || response.type === 'opaque')){
    const copy = response.clone();
    caches.open(CACHE).then(c => c.put(request, copy));
  }
  return response;
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  if (req.mode === 'navigate'){
    const fromNet = fetch(req).then(res => { if (res.ok) store('./index.html', res); return res; });
    const wait = new Promise(resolve => setTimeout(resolve, 3500));
    event.respondWith(
      Promise.race([fromNet.catch(() => null), wait.then(() => null)])
        .then(res => res || caches.match('./index.html').then(hit => hit || fromNet))
    );
    return;
  }

  if (url.origin === self.location.origin || FONT_HOSTS.includes(url.hostname)){
    event.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => store(req, res))));
  }
});
