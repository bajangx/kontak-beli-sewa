'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "174c354f9cd5376ad5b92e8e4fcf8448",
"index.html": "b5beb4c438add47952881bdb97596fc7",
"/": "b5beb4c438add47952881bdb97596fc7",
"main.dart.js": "0d1b160123369028f3de0eef7589bb61",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "edab6d9c9cceb9c1188392ca88bf217d",
".git/ORIG_HEAD": "d79a17c7bcb8217a8162938e01455e36",
".git/config": "a88a2e5c117132e48ce9968aa1759211",
".git/objects/61/15cdb4afa045f4f977f28029c9dae316a1fc46": "c4a975092ac177e1c4b9aa29e0208acc",
".git/objects/95/82e7f0b4e8d010f8dd7ee97d4185aefdd292c0": "1ca6c8c8cafceb07d0262419e536e485",
".git/objects/95/a81192687299459a006c7898964eb81139117a": "a0d8e52967655b075d7b926980594a16",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/8bb832c22f5698f7070921411ffbc43708ed2d": "6bcf951df4012e82eacb397b83429348",
".git/objects/58/a1d9dd271d61dfce9b78977d89317fb1a23364": "317a241b3e9a1ee9683d5353eb350c56",
".git/objects/0b/c265d372fdcce2f60e1e65edb3451c1f69ed50": "86b22c3da4bdcd1a22818899d34be69d",
".git/objects/94/88bd8be45b94817e42116bdf96197cf8736417": "73031b7c0d1b755bf74032cb8e4b4c7c",
".git/objects/94/8218209a1bdd4756bad1f5bd5642f822fc479c": "34b31cb5f198081e20741cd28458492d",
".git/objects/94/ad8995cc2a4356f7b6f058f5e9b021e701522f": "38eb5e8c0fb96e31b2ba2916968a6828",
".git/objects/9c/6f5a24404b1d8c70588f638ae4bb26c1cf135a": "2dc2a07485c947993362ee356252d380",
".git/objects/ad/c618bc311a13d5fb9fc6e944755290c05951cb": "7ce13166494f450370f409c1c8372419",
".git/objects/d6/7ed3203390e77b616b7e8ea5c634645530f1be": "ec23597373e4aef4c87823c4c4485356",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/ccc8be145087ad02f3424d6006e825eb0415bb": "bb8e621e786f5577f9715fa61a73d8aa",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f2/a72588352008aaffc7f3b39413bad61dbc3332": "aaba82fb92a0954e53d8e04f0f946379",
".git/objects/e3/7d8bb859864468db29ebc0ca69e42321472815": "ffd589d95913d9f18f6bf5c8215bd0e2",
".git/objects/e4/1786b69a4acbd6a657bffe053f7cedd6508201": "fde6e4a3af117b37332d189de4154c56",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/89/aae6b6afc9a15381aec165494e81e99f93499f": "9c7151550eef40498f44a528a908f173",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/52cdc1a6fde7f0f7b36c495839cc757daeb01b": "5898b82c5588ea4bdc38d549f3216139",
".git/objects/75/87b245f7950fac44d60068728da9e5de51f637": "fac56b3a0f542331f778339553c55bc3",
".git/objects/44/1d3baab4f3bfc1ce251942e420988fac12a8f4": "ac3a2ba50af07d40313ad29d8023a3b1",
".git/objects/44/ed7fc7245aa6f6bbc63befa1da6ecf2489d046": "eb58afa8f7ebc285231314d3d522ebfb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6e/26de76d46d7e4c28d19acb691cc8a4b41b4287": "9ce195e87d87f63da6937cdbbc944c14",
".git/objects/55/468d78b3a9aa4d96084a6458ad21352f7e06d0": "1d45a38d6114a430fa1ca97eed7f1cba",
".git/objects/0f/29d8273a078b2fef68fcda1addd117a54b8cbd": "b9afe4e0a2b0b652ac937340d7b93669",
".git/objects/bf/1e17379061b79ce754892b7b9a8b7e0ff15bc3": "579dc9dbd983fd37c7768d8123b349f8",
".git/objects/d3/7c617388409571ff05caeaba7d35a4fee32032": "782ce33df53a14e937d9f45686999c52",
".git/objects/b8/22a05e36c03c008ae4b31dd8a1918179b4aaee": "3931378451c7d31b14d0ff9e1d975f8b",
".git/objects/b6/b483aa9bdfe57bbfad9d92c49c019aaeb59211": "d764bb22219a4972d1d5424a2578724a",
".git/objects/a9/fd8e62f04c58d0e7258df545ce3378e285b014": "4a835cd3dcd951eb660e6fc262b8e6a4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/42f40dd35398df7d90cfb705a04b54d53d5689": "d3d0c2e98e2a5933e76f032a85ef6ccd",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/b3fde50fe4ee313f1d2944f4ffcec08fa5367e": "a98fe83d3ff8f578b0b6c9e64088a6f0",
".git/objects/e8/15d675e5f662790e2f776b017f62f464403677": "57bed0c6aedf606d1d4d4f61911afc4d",
".git/objects/f1/7d0fb5ac552c9cc55bd62d862d3c5dcd84c548": "2ef34009f9f92ae5b92fb3573ecde8c1",
".git/objects/e0/f08ce3df2734760c061dccf4c30eed463da747": "25053dd6c3d7b6f57c6c66c0f100a7bb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/78/4ecbf85abbe5af9862012f0fc8cbb23b40b51c": "d53f04e91ed5f618d38778368fa9e76f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d647d51c3fea6c63e1946f91f0eaf1cf",
".git/logs/refs/heads/main": "d647d51c3fea6c63e1946f91f0eaf1cf",
".git/logs/refs/remotes/origin/main": "e69c4e5e255e2e767cc144d70342a818",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cfad5da6d4fc0ca6c27fc7d39799f286",
".git/refs/remotes/origin/main": "cfad5da6d4fc0ca6c27fc7d39799f286",
".git/index": "4a30b4e450f34fc0ac3582b8f939f627",
".git/COMMIT_EDITMSG": "77fa5de3e78b7874b0793331227fd81b",
".git/FETCH_HEAD": "b71ad602d088e75c0ed8d5aba561bf97",
"assets/AssetManifest.json": "c8940ea3b56e6399229be753bf378d03",
"assets/NOTICES": "e2196c06ae480e6c5092faa91e1e996e",
"assets/FontManifest.json": "f593844e9cf42f09052deb04ca90e699",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/telegram-logo.png": "2a10e07d117817cb123a23bc9f57c324",
"assets/assets/images/bajang-logo.jpeg": "f101ca260eab9b320760fa8d0671a2f9",
"assets/assets/images/bajang-store-logo.jpeg": "3cd1c84e932c2c37692b49b8ba65de84",
"assets/assets/images/tokopedia-logo.png": "0432036cf4092b4fd9753576b174d6c9",
"assets/assets/images/whatsapp-logo.png": "a07c3d9c61654eb5fb23a43e74f605af",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "ba95810b56f476990ca71d15139d5111",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/TTCommons/TTCommons-Medium.otf": "0c4e0d71a7fff703277f5fbb78116f2a",
"assets/assets/fonts/TTCommons/TTCommons-Regular.otf": "6ba4b187e963c08d4e9d88ddaa78a401",
"assets/assets/fonts/TTCommons/TTCommons-Bold.otf": "94aaab70bb13ab450ff8b18f23a2feaf",
"assets/assets/fonts/TTCommons/TTCommons-DemiBold.otf": "1fc777a023aa56fc4001c2f9ab6a0108"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
