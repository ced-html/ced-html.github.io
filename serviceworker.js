'use strict';
const CACHE_NAME = 'DSX_v1.31:1_cedict';
try {
	self.addEventListener('install', function(event) {
		try {
			event.waitUntil((async function() {
				try {
					const cache = await caches.open(CACHE_NAME);
					
					
					cache.addAll(['/index.html']);
					
					
				} catch (er) {}
			})());
		} catch (er) {}
	});
	self.addEventListener('fetch', function(event) {
		try {
			event.respondWith((async function() {
				try {
					const cache = await caches.open(CACHE_NAME);
					const cachedResponse = await cache.match(event.request);
					if(cachedResponse) return cachedResponse;
					else {
						const fetchResponse = await fetch(event.request);
						cache.put(event.request, fetchResponse.clone());
						return fetchResponse;
					}
				} catch (er) {}
			})());
		} catch (er) {}
	});
} catch (er) {}
