const CACHE_NAME = 'smart-cube-timer-app';
const urlsToCache = [
	'/smart-cube-timer/_nuxt/014eb26e19287dde78c2.js',
	'/smart-cube-timer/_nuxt/1cdff5d915bb734d9258.js',
	'/smart-cube-timer/_nuxt/226ca32f0bc19645a48b.js',
	'/smart-cube-timer/_nuxt/3617b9b6e65b191c2ece.js',
	'/smart-cube-timer/_nuxt/3818d809f436cd50b681.js',
	'/smart-cube-timer/_nuxt/3ba2a2a3701cfec88094.js',
	'/smart-cube-timer/_nuxt/3da524aa0dd4ab8c7672.js',
	'/smart-cube-timer/_nuxt/434608f2096d5f4a255f.js',
	'/smart-cube-timer/_nuxt/55f12be3842ad9d6dea1.js',
	'/smart-cube-timer/_nuxt/8a9e40973068757395eb.js',
	'/smart-cube-timer/_nuxt/9ad52d12ce89cc97dae8.js',
	'/smart-cube-timer/_nuxt/9bffe2ae2748021ee2cf.js',
	'/smart-cube-timer/_nuxt/e2cf93ac92b38b807478.js',
	'/smart-cube-timer/_nuxt/f442665a101f4d3baa01.js',
	'/smart-cube-timer/_nuxt/fc9f76150f4be72eba19.js',
	'/smart-cube-timer/_nuxt/LICENSES',
	'/smart-cube-timer/faq/index.html',
	'/smart-cube-timer/icons/cube-114x114.png',
	'/smart-cube-timer/icons/cube-120x120.png',
	'/smart-cube-timer/icons/cube-144x144.png',
	'/smart-cube-timer/icons/cube-152x152.png',
	'/smart-cube-timer/icons/cube-16x16.png',
	'/smart-cube-timer/icons/cube-180x180.png',
	'/smart-cube-timer/icons/cube-192x192 .png',
	'/smart-cube-timer/icons/cube-32x32.png',
	'/smart-cube-timer/icons/cube-512x512.png',
	'/smart-cube-timer/icons/cube-57x57.png',
	'/smart-cube-timer/icons/cube-60x60.png',
	'/smart-cube-timer/icons/cube-72x72.png',
	'/smart-cube-timer/icons/cube-76x76.png',
	'/smart-cube-timer/icons/cube-96x96.png',
	'/smart-cube-timer/solves/index.html',
	'/smart-cube-timer/stats/cll',
	'/smart-cube-timer/stats/index.html',
	'/smart-cube-timer/stats/oll',
	'/smart-cube-timer/stats/pll',
	'/smart-cube-timer/.nojekyll',
	'/smart-cube-timer/200.html',
	'/smart-cube-timer/faq',
	'/smart-cube-timer/icon.png',
	'/smart-cube-timer/icons',
	'/smart-cube-timer/index.html',
	'/smart-cube-timer/manifest.json',
	'/smart-cube-timer/solves',
	'/smart-cube-timer/stats',
	'/smart-cube-timer/sw.js',
	'/smart-cube-timer/UTILS_all_filenames_output.txt',
	'/smart-cube-timer/UTILS_get-all-files-in-directory.js',
	'/smart-cube-timer/_nuxt',
];

self.addEventListener('install', (event) => {
	// Perform install steps
	event.waitUntil(
		caches.open(CACHE_NAME).then((cache) => {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', (event) => {
	event.respondWith(
		caches.match(event.request).then((response) => {
			// Cache hit - return response
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
