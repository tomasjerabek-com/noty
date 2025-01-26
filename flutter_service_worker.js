'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7c469aea370d924b48642c1c18d7e2a1",
"version.json": "f0124ed6c986ef65f860ac5bf5f2a632",
"index.html": "3f70a9e2abc960e9596b0581e3cfef05",
"/": "3f70a9e2abc960e9596b0581e3cfef05",
"main.dart.js": "028dfbbcbd58d91633ee4193a05fa166",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "ffdfe70c786c55d5fd33dc2c451612dd",
"icons/Icon-192.png": "17da297db04880a65b1f30c04ce423fa",
"icons/Icon-maskable-192.png": "17da297db04880a65b1f30c04ce423fa",
"icons/Icon-maskable-512.png": "a65cf2a217f0915481f922a1e25e19bd",
"icons/Icon-512.png": "a65cf2a217f0915481f922a1e25e19bd",
"manifest.json": "32bb2dcf71c99c7e5c6dadd56420e52a",
"assets/AssetManifest.json": "e96688853cb59e3d9028377db332295a",
"assets/NOTICES": "d70335a9dc8be106715efe1439600c57",
"assets/FontManifest.json": "3eff1fc1ebe866fbc60676f0dc86e89e",
"assets/AssetManifest.bin.json": "18042926e325a40fd778926c8075f853",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f1c6a6a9f8b0dc3395cc164cb05b8636",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/assets/sounds/B6.mp3": "9ca38e267a6290592304f33613d55202",
"assets/assets/sounds/C2.mp3": "c5c4f9d5b542a53271d329eeb97bdb72",
"assets/assets/sounds/C3.mp3": "db910264e76a8e62ba9e1968c8c2ffe3",
"assets/assets/sounds/B7.mp3": "4cf117008ecafdc3cff1c46ddf2eee29",
"assets/assets/sounds/C1.mp3": "7f3c0b14d484371c447f65246202c351",
"assets/assets/sounds/B5.mp3": "1786c4062c5e9a7e4bf8d04c4c06897f",
"assets/assets/sounds/B4.mp3": "12176d389173350aff6b1456846ab78b",
"assets/assets/sounds/C4.mp3": "e7ff2aecf3350569c0421ce6ae1398d2",
"assets/assets/sounds/B1.mp3": "cfdf0f0da2881c86469b34b555164bb7",
"assets/assets/sounds/C5.mp3": "098af3626778c5918690ae58feb744b8",
"assets/assets/sounds/B3.mp3": "dea5ee5dce13524b64cc3f370498d345",
"assets/assets/sounds/C7.mp3": "99443b1661ae5cbfab8be897742bc53e",
"assets/assets/sounds/C6.mp3": "c63ffece2a2f672a5ee9ba3eb9404b8c",
"assets/assets/sounds/B2.mp3": "1cad197afb527aa59c9fd14a82bb6c87",
"assets/assets/sounds/D5.mp3": "dd4fc46224b1f726d3c5e3f1bcba42e8",
"assets/assets/sounds/E1.mp3": "a13e3f92c36a4e4c890d3b26f577f776",
"assets/assets/sounds/D4.mp3": "011b8659dace6abcf1367c80908a06eb",
"assets/assets/sounds/E2.mp3": "eecfc9364bbd7ed397d5dc9a33e1c1aa",
"assets/assets/sounds/D6.mp3": "5ea7dc9a5d7f1cf98e6f38a1c555fd7d",
"assets/assets/sounds/D7.mp3": "ec9804221219dd9541c023a86e78f804",
"assets/assets/sounds/E3.mp3": "1258493244ca164882e9d8cdc98de96d",
"assets/assets/sounds/E7.mp3": "527e55c69ba9faade29b9c720179b0c9",
"assets/assets/sounds/D3.mp3": "bd672ac5129823db21b0b50203173f6f",
"assets/assets/sounds/D2.mp3": "633f221c15e16c0694ca7ec2ac119520",
"assets/assets/sounds/E6.mp3": "e37bc2f654121b9fb6e425b28de6d60d",
"assets/assets/sounds/E4.mp3": "387e9aa9d3d3f66513c2313d7bb9e788",
"assets/assets/sounds/E5.mp3": "c54e4ece27afe262cd62baedfaeb45a6",
"assets/assets/sounds/D1.mp3": "c3750cf0a77732af028a4cbe9c42ae47",
"assets/assets/sounds/Gb4.mp3": "7dfd1196cc257dbc3827a141899e0250",
"assets/assets/sounds/Eb6.mp3": "5f4d6bab725dafc04d41992fd510732c",
"assets/assets/sounds/Ab2.mp3": "9b935122a104f929d02b57a8a3cd9df4",
"assets/assets/sounds/F4.mp3": "5674fe0949852a81b1f56cf2d6905245",
"assets/assets/sounds/G1.mp3": "cb8c35e91b48d3d6418353f990b7fa2a",
"assets/assets/sounds/F5.mp3": "5fa3e9986ae9147de86ede81fdc22ae2",
"assets/assets/sounds/Ab3.mp3": "2f376a2b60bc1ec61c87117f752d2d9e",
"assets/assets/sounds/Eb7.mp3": "de2055fcd2a8953cb937649ae66d3424",
"assets/assets/sounds/Gb5.mp3": "3decac24a24006fa8aa5d24045aedd8c",
"assets/assets/sounds/Gb7.mp3": "cd26902306cf419929ef048a11aac468",
"assets/assets/sounds/Eb5.mp3": "65e9d060be1bf660e9bcde88881f3e5e",
"assets/assets/sounds/G3.mp3": "8c7e7b2de5329d9c2bc5df1b5de3daa1",
"assets/assets/sounds/Ab1.mp3": "2c5a1b458e1076eb318065f28d8d56f9",
"assets/assets/sounds/F7.mp3": "fc54792abb1f3e7d13778eb8afb5db2f",
"assets/assets/sounds/F6.mp3": "0485c35272bf171a71698bb18b5b4c31",
"assets/assets/sounds/G2.mp3": "5a6240d43da81badc08d7cd5ad37bda0",
"assets/assets/sounds/Eb4.mp3": "179a364ed403dce2ce57f7c5dbd5fb62",
"assets/assets/sounds/Gb6.mp3": "42abec2f27e9544f450a9495c380dd3f",
"assets/assets/sounds/Gb2.mp3": "6bed1b1e24deffd5607207e5a18ae7b6",
"assets/assets/sounds/G6.mp3": "662002b5a58c90b1f6d332fcde290580",
"assets/assets/sounds/Ab4.mp3": "bce4e7c508335e04714d3d639811091e",
"assets/assets/sounds/F2.mp3": "d4f79262ae8b9c69788e9b07251e8d5d",
"assets/assets/sounds/F3.mp3": "aa6233dbde1e090b04abca837c1e0f02",
"assets/assets/sounds/Ab5.mp3": "640c216b7fd90f307fdcd1e4dec6ca91",
"assets/assets/sounds/G7.mp3": "b4121bd8d7d364c30d0397cede3edc02",
"assets/assets/sounds/Eb1.mp3": "6c999bd393dd554f903a6cc12f804318",
"assets/assets/sounds/Gb3.mp3": "bd92ab683c5facfe4dae7bf6af7f2957",
"assets/assets/sounds/Gb1.mp3": "539298f0e2b96e96758c52f682d10f58",
"assets/assets/sounds/Eb3.mp3": "facb22507c8318e9d03ba8392f610a70",
"assets/assets/sounds/Ab7.mp3": "db8328fc25f15f3da9672944a77bfd78",
"assets/assets/sounds/F1.mp3": "7f2a888c6fabe2d480c4f0c57fdcea22",
"assets/assets/sounds/G5.mp3": "f33a4b5b1f0b95f828fdc848317a76e2",
"assets/assets/sounds/G4.mp3": "0deac59ff85ba39326d429a48ad2228c",
"assets/assets/sounds/Ab6.mp3": "5333975a7cbbd89a1944712e70df1b8f",
"assets/assets/sounds/Eb2.mp3": "326ba699e83ec4055d439f8695a00893",
"assets/assets/sounds/Bb3.mp3": "7bef1acc5156b3afa4d4255b24c927a5",
"assets/assets/sounds/Db5.mp3": "16762b673a7c8263253b75d2a1be735d",
"assets/assets/sounds/A3.mp3": "bf0ed300a53198afe15f3ff18e89cff7",
"assets/assets/sounds/A2.mp3": "64036fef7d405265e40992b6735cd9c0",
"assets/assets/sounds/Db4.mp3": "091fddd2907fe004351a778e154e121a",
"assets/assets/sounds/Bb2.mp3": "9be1b403c91c4aeb1e6343f72405216d",
"assets/assets/sounds/Db6.mp3": "949c279015e9a28a9b2c1417f1de59c0",
"assets/assets/sounds/C8.mp3": "39c5bdb6189c40c4551d51efdad46d39",
"assets/assets/sounds/A1.mp3": "a346d03c1ae187fb1c61afef8d2581d1",
"assets/assets/sounds/Db7.mp3": "c7f92d065f2e4c39f176697dc2b9b1f9",
"assets/assets/sounds/Bb1.mp3": "3a29e8556f751628485ebd4a29b74ed1",
"assets/assets/sounds/Bb5.mp3": "5ecf3a254e1f2a3c707eaa8e6036c836",
"assets/assets/sounds/Db3.mp3": "bb02a920fdeb801e983acc898a84703d",
"assets/assets/sounds/A5.mp3": "a780ba385da4f0d2f12def8b340df1db",
"assets/assets/sounds/A4.mp3": "6e313eb2e2dec5a1ef3eb3194fc2a79f",
"assets/assets/sounds/Db2.mp3": "4dd072086e3a7a7095627f242df52668",
"assets/assets/sounds/Bb4.mp3": "219fccadbf4d83a58e7802fdd02bb6d5",
"assets/assets/sounds/Bb6.mp3": "03c36558c18b0f45f5d9223d1c19ddd5",
"assets/assets/sounds/A6.mp3": "9a74942e6dd7c0d35340b013d87a84b8",
"assets/assets/sounds/A7.mp3": "4e787a288bb9b3a95ffbf6c7b212e597",
"assets/assets/sounds/Db1.mp3": "332486a5f9a13675b038cdd47d6f2b2f",
"assets/assets/sounds/Bb7.mp3": "6e4e6c846ccc03818210d4c24d7a7b87",
"assets/assets/fonts/DejaVuSans.ttf": "be189a7e2711cdf2a7f6275c60cbc7e2",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
