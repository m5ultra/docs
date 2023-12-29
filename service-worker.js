/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "1.track.html",
    "revision": "2f33c3ce4dc08340d0864fb707829b83"
  },
  {
    "url": "10.utils.html",
    "revision": "313084668d4f58f8e5801869d42269bf"
  },
  {
    "url": "11.loadsh.html",
    "revision": "b544ff6947ee9773ee0a55239c30f9af"
  },
  {
    "url": "12.vscode.html",
    "revision": "7868112e348b177317ace595fa9490da"
  },
  {
    "url": "13.promise.html",
    "revision": "3389eaf2e07320b95e231a0e9401f289"
  },
  {
    "url": "14.tamperMonkey.html",
    "revision": "b9e383a669b53e878e8634d2cfac44c7"
  },
  {
    "url": "15.git.html",
    "revision": "de84de7ff4802aedcff27048016290b3"
  },
  {
    "url": "17.huawei.html",
    "revision": "f636bd03c726785454278bb2d078db18"
  },
  {
    "url": "173635-14729817956499.jpg",
    "revision": "470b442315cd11380c8b3ed51ed18c5f"
  },
  {
    "url": "19.notes.html",
    "revision": "ec38e0a985a0f7d0c11584b259fd1fbd"
  },
  {
    "url": "2.1.array.html",
    "revision": "84d9e405e6cb7e21a3af7f09a03d60df"
  },
  {
    "url": "2.2.this.html",
    "revision": "7acacb60f91c03a2076de1d7b9f540c9"
  },
  {
    "url": "2.3.string.html",
    "revision": "fd0f6b9fad1a8a5593e26f360aba7f65"
  },
  {
    "url": "2.4.regExp.html",
    "revision": "bf652273a8defd88459dca6d51b58837"
  },
  {
    "url": "2.5.browser.html",
    "revision": "57c90d08be524819fc494acf5730ccae"
  },
  {
    "url": "2.js.html",
    "revision": "9058bde30d232eafb794a3d93c44f009"
  },
  {
    "url": "20.Eslint_CommitLint.react.html",
    "revision": "c5b5bc9970166f83b2905513654b38a6"
  },
  {
    "url": "21.vue3_ts_vite.html",
    "revision": "eda6129fdf9a612095caac41ab66560f"
  },
  {
    "url": "3.0.vue.html",
    "revision": "414dc37493131e6d22e0625b57d26780"
  },
  {
    "url": "3.1.vue3.html",
    "revision": "5461ddfcf4270205831cbf7bbcfd810b"
  },
  {
    "url": "4.1_React_Hooks.html",
    "revision": "6eb72b850d678d883bdf01f5745fd556"
  },
  {
    "url": "4.react.html",
    "revision": "0f275ba936df74ba007901a4318eca98"
  },
  {
    "url": "404.html",
    "revision": "fbfbf53b65efb7d5d358ee99d66d821c"
  },
  {
    "url": "5.webpack.html",
    "revision": "1a91c0a17be89aa1d8c15b5d98e0fb6b"
  },
  {
    "url": "6.css.html",
    "revision": "2f99b1b849caf6108968531fb067cb37"
  },
  {
    "url": "7.1_array.html",
    "revision": "cad5f09b9ba9f5b3d5adceaad2ba18cc"
  },
  {
    "url": "7.2_Stack.html",
    "revision": "f8933f433114c04318f2aec6f6170d0f"
  },
  {
    "url": "7.3_Queue.html",
    "revision": "dde8e7fc337388cbf5a300efaf35984b"
  },
  {
    "url": "7.arithmetic.html",
    "revision": "bb8ca59ff295f5f3d3a8e22d87515169"
  },
  {
    "url": "8.browser.html",
    "revision": "6b8cd0d61260dcc0c91bc86600e452e8"
  },
  {
    "url": "9.http.html",
    "revision": "91db04ff614841c5521caac0cd4f1151"
  },
  {
    "url": "assets/css/0.styles.a9377658.css",
    "revision": "882f59b313990313e0b54d2e2ccf2cd3"
  },
  {
    "url": "assets/img/async_defer.14d53726.png",
    "revision": "14d53726ac7c29e41771559ac1927118"
  },
  {
    "url": "assets/img/commitizen.02545ebd.png",
    "revision": "02545ebde070dc6622225d47c81be12c"
  },
  {
    "url": "assets/img/commitLint.281a1c9b.png",
    "revision": "281a1c9b5f32825810f31eff2f617567"
  },
  {
    "url": "assets/img/husky_install.bf0b1d8e.png",
    "revision": "bf0b1d8e72c4ae7bcdae21c466e13219"
  },
  {
    "url": "assets/img/passPrams.f9d0b301.png",
    "revision": "f9d0b301344201e08ba3bb2dc922f503"
  },
  {
    "url": "assets/img/pre-commit-hooks.e2abf788.png",
    "revision": "e2abf788eabdee7b9e7d95a25ad812f7"
  },
  {
    "url": "assets/img/promise_flow.72ab73c3.png",
    "revision": "72ab73c3d3f1fe933fdb614c020316b2"
  },
  {
    "url": "assets/img/prototype.3ee04ff5.png",
    "revision": "3ee04ff512a68800c014b66de0f6b3f2"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/vscode_profile_export.2731a2df.png",
    "revision": "2731a2df92fa90b274200568ba1866fc"
  },
  {
    "url": "assets/js/1.c9f29e7f.js",
    "revision": "f13ef5f94e47ed960a184a772c9a4192"
  },
  {
    "url": "assets/js/11.e30db725.js",
    "revision": "c2caab4ae93e349d0079923b250edc01"
  },
  {
    "url": "assets/js/12.b6d225f1.js",
    "revision": "1aeb07f5a6e5877fd624234df41ba880"
  },
  {
    "url": "assets/js/13.5139ec04.js",
    "revision": "6539d5491e5f3a3bcbf67abb0c8b532f"
  },
  {
    "url": "assets/js/14.d1eb94a9.js",
    "revision": "350d94b6822bb435f307cf0c6fbb8e4a"
  },
  {
    "url": "assets/js/15.ce97b4e3.js",
    "revision": "8c2c110e46b095804f516f029b592ca9"
  },
  {
    "url": "assets/js/16.286b6a45.js",
    "revision": "979bf504881c2dc768088a5ff83e0ca1"
  },
  {
    "url": "assets/js/17.9d383159.js",
    "revision": "de3f7b91819421959e8940016342ea72"
  },
  {
    "url": "assets/js/18.85c68d64.js",
    "revision": "56d742e5a7bfda558b1520167f46cfa3"
  },
  {
    "url": "assets/js/19.9036c898.js",
    "revision": "4370a57a156e0b58ac913e3c49794acd"
  },
  {
    "url": "assets/js/2.38bf07ba.js",
    "revision": "d6a2ab9b426662cf13a162324e26692e"
  },
  {
    "url": "assets/js/20.1a5a13a0.js",
    "revision": "0b6b66fe9163a0988cfc7c4b0c2b45fa"
  },
  {
    "url": "assets/js/21.2c9c7fe2.js",
    "revision": "bd67d0dd17aa86d08331f955023cedfa"
  },
  {
    "url": "assets/js/22.cfdf75fb.js",
    "revision": "5c54fbc3959b8d625943c9c03fa64f87"
  },
  {
    "url": "assets/js/23.6a779820.js",
    "revision": "dcb93de9e4d2563b3b8b7fb84841fdf5"
  },
  {
    "url": "assets/js/24.32aa8719.js",
    "revision": "2c5cd92cdd277fb90b3de9fcf26da1f1"
  },
  {
    "url": "assets/js/25.b0477cf6.js",
    "revision": "4d0fa8cc8ffb01e638b95275f43969c1"
  },
  {
    "url": "assets/js/26.fdff4da6.js",
    "revision": "a8750d260891aa438dc7b5edc15a3662"
  },
  {
    "url": "assets/js/27.e0477ade.js",
    "revision": "c3cfc560b39ecbfe09c12b02cab00159"
  },
  {
    "url": "assets/js/28.1d83c4cf.js",
    "revision": "b95c55f8e36c52bae672e7ddafda8bdd"
  },
  {
    "url": "assets/js/29.ad2f9ec8.js",
    "revision": "c969d1de8fd5b4a302cbe69f908bf3be"
  },
  {
    "url": "assets/js/3.b681fbd7.js",
    "revision": "f3eed509e76adc23692e3d457d3a87d2"
  },
  {
    "url": "assets/js/30.9dfde4e7.js",
    "revision": "64957d918433ab35c88babf573bb9745"
  },
  {
    "url": "assets/js/31.1da6f336.js",
    "revision": "d31eae9932e1fdc9bc6db1c107c7ab3e"
  },
  {
    "url": "assets/js/32.a33318fb.js",
    "revision": "7c18bd4912d834573751198b767a1aff"
  },
  {
    "url": "assets/js/33.ced65601.js",
    "revision": "92cdf44dc222822dbb291b9b32ac39e8"
  },
  {
    "url": "assets/js/34.c490182d.js",
    "revision": "21c01d5f1b341f6339c518d58500a3df"
  },
  {
    "url": "assets/js/35.2f07ff59.js",
    "revision": "0e556df4bfc5e8e1ed836510996a03cc"
  },
  {
    "url": "assets/js/36.9cb55e5e.js",
    "revision": "e8432f902ce38beffb1e774ac8ec7212"
  },
  {
    "url": "assets/js/37.5374fbee.js",
    "revision": "9a76a1772b731145d15ed0eb8915780f"
  },
  {
    "url": "assets/js/38.2177d585.js",
    "revision": "0831c6489f6a8a78aa9edbea352953d8"
  },
  {
    "url": "assets/js/39.20471691.js",
    "revision": "bd4016183004aca33ced4aac24937dcf"
  },
  {
    "url": "assets/js/4.e02d5be5.js",
    "revision": "3d7a5e451b4c24e331ae9ae89ca29e71"
  },
  {
    "url": "assets/js/40.3f62690a.js",
    "revision": "af78e19795b220b753d17663a353e7d9"
  },
  {
    "url": "assets/js/41.45dd72e0.js",
    "revision": "e9288d4e3ed2645d10aecc255d71bfb9"
  },
  {
    "url": "assets/js/42.d49e8092.js",
    "revision": "e19913b0ba6a2ce9e9c5a814d8111041"
  },
  {
    "url": "assets/js/43.e1a27e16.js",
    "revision": "f421c613e2b3294bf4795d9aeb499690"
  },
  {
    "url": "assets/js/44.076ce454.js",
    "revision": "589a3e3b127c42c73dd0a4c0f351c8b8"
  },
  {
    "url": "assets/js/45.b63bf3e1.js",
    "revision": "f5ebaed6e51535ed41d175c8964c8966"
  },
  {
    "url": "assets/js/46.45e58f9e.js",
    "revision": "9652dab44b4e654e8e2de0b01532c1ff"
  },
  {
    "url": "assets/js/47.07128839.js",
    "revision": "86bcf7ead999b9afa464105e5fb4bd1f"
  },
  {
    "url": "assets/js/48.85c4c82e.js",
    "revision": "c146137eeaeecd2690b940331a059c50"
  },
  {
    "url": "assets/js/49.422a0728.js",
    "revision": "1eaa3fc6021cba73d8c120fe0f3b9b78"
  },
  {
    "url": "assets/js/5.bfd8aa63.js",
    "revision": "ddd0368973ed62d3c7fad397c4db60a8"
  },
  {
    "url": "assets/js/50.6a1df3fc.js",
    "revision": "ca04c017a55d009539e4fb9f932cc77d"
  },
  {
    "url": "assets/js/51.9b52e3da.js",
    "revision": "e094aec58710dd327e763c779924240b"
  },
  {
    "url": "assets/js/52.2129f94f.js",
    "revision": "7ebbcb155b031f0e06d5abfc42a561a5"
  },
  {
    "url": "assets/js/53.12e02870.js",
    "revision": "1e4c81e0a91f1c8331494aa57d97e732"
  },
  {
    "url": "assets/js/54.19c5d420.js",
    "revision": "6dbab68bea9894b86694f8862ab2b7aa"
  },
  {
    "url": "assets/js/6.355accc0.js",
    "revision": "6cba538fa75cbb7f5fb35b609b0d5db0"
  },
  {
    "url": "assets/js/7.516b3511.js",
    "revision": "690358f76cfff2bfb49c008315d310df"
  },
  {
    "url": "assets/js/app.671caacf.js",
    "revision": "101df601b9785f55baf3f3961cf5d5b5"
  },
  {
    "url": "assets/js/vendors~docsearch.8ff0dd7b.js",
    "revision": "59011b6b49fbbdc8b1ef721f85efb2ef"
  },
  {
    "url": "assets/js/vendors~flowchart.fcd2dd37.js",
    "revision": "85e6c384db0a4d3194666da18f72387b"
  },
  {
    "url": "async_defer.png",
    "revision": "14d53726ac7c29e41771559ac1927118"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "d51bb08377ffdd6cfc5048df1b2dfd11"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4c014af3155a6046ed12cff5b4139bba"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "21d9fc176279ced5861e54288c3978b4"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "0b3dede44d6493005131ec00e71bcdcb"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "8741b3927ffe0729c0886e36ee003403"
  },
  {
    "url": "imgs/001.jpg",
    "revision": "7bd595c86b76f6ea37e1b51e8f8cb1bc"
  },
  {
    "url": "imgs/002.jpg",
    "revision": "e41344df6d45b3969f392c1e1a2ee1a0"
  },
  {
    "url": "imgs/003.jpg",
    "revision": "a0910f47886405f2280153cfcc07b424"
  },
  {
    "url": "imgs/004.jpg",
    "revision": "02a9b17fd2cf94254fd2cac1c9dde059"
  },
  {
    "url": "imgs/005.jpg",
    "revision": "ed12bce94690e784872c9923cbc32cd4"
  },
  {
    "url": "imgs/006.jpg",
    "revision": "1f0c5ac84be87cf41a9e589c067c29b7"
  },
  {
    "url": "imgs/007.jpg",
    "revision": "ac2fe964ab727804a5a811b452fd5581"
  },
  {
    "url": "imgs/008.jpg",
    "revision": "b85d399532ac24b4c55387439c00517b"
  },
  {
    "url": "imgs/009.jpg",
    "revision": "a4b4fedce4732f460a644bfd13907ac1"
  },
  {
    "url": "imgs/010.jpg",
    "revision": "6a5d64e9f5b95eafcc11c01b9d684a0a"
  },
  {
    "url": "imgs/011.jpg",
    "revision": "8dff57ff7ec4f79c0592f1011ea53dd9"
  },
  {
    "url": "imgs/012.jpg",
    "revision": "872105652fd33a64f72b533ead6d2af6"
  },
  {
    "url": "imgs/013.jpg",
    "revision": "96771c335e1e580b2fd6be319e163a1b"
  },
  {
    "url": "imgs/014.jpg",
    "revision": "37a8313654d413301998aa6ea38506ab"
  },
  {
    "url": "imgs/015.jpg",
    "revision": "be0e5b4565f972ae2bee38c6341fbdf0"
  },
  {
    "url": "imgs/016.jpg",
    "revision": "37a9afd6b10e7b29af71ef7f64de2277"
  },
  {
    "url": "imgs/017.jpg",
    "revision": "b85d399532ac24b4c55387439c00517b"
  },
  {
    "url": "imgs/018.jpg",
    "revision": "bc72b65ca15d366f473450d7c1af6240"
  },
  {
    "url": "imgs/019.jpg",
    "revision": "0e687d7593d491d33e1e7305320a2352"
  },
  {
    "url": "imgs/020.jpg",
    "revision": "abbb071d7ea535b3222a697b9804569d"
  },
  {
    "url": "imgs/021.jpg",
    "revision": "91e7e5c26b09916d2ef738517da08b27"
  },
  {
    "url": "imgs/022.jpg",
    "revision": "907019545c7a02efdda205ca01679185"
  },
  {
    "url": "imgs/023.jpg",
    "revision": "3098326a70e70bfdf604e6397c56f606"
  },
  {
    "url": "imgs/024.jpg",
    "revision": "41616873cf90ce389d43cfa14f6ce546"
  },
  {
    "url": "imgs/025.jpg",
    "revision": "3703b338d641f666bd60eab132dd4392"
  },
  {
    "url": "imgs/026.jpg",
    "revision": "a99334370534aafb75f3d653fb01f99a"
  },
  {
    "url": "imgs/027.jpg",
    "revision": "37a8313654d413301998aa6ea38506ab"
  },
  {
    "url": "imgs/028.jpg",
    "revision": "c29bea948bf1e4c17a789cfeb9b9e8a0"
  },
  {
    "url": "imgs/029.jpg",
    "revision": "df4d3dc11b343450c8298e003b1b9ec0"
  },
  {
    "url": "imgs/030.jpg",
    "revision": "e0e54642be700b3950f538b2f841e110"
  },
  {
    "url": "imgs/031.jpg",
    "revision": "6373ff86ef70fe56bb034578a8970832"
  },
  {
    "url": "imgs/032.jpg",
    "revision": "07adfdd77e3e8f29e7f42eb6dfdf8dd9"
  },
  {
    "url": "imgs/033.jpg",
    "revision": "f4e4233ef709ea1158697c6a3e8772db"
  },
  {
    "url": "imgs/034.jpg",
    "revision": "3b3cec43061315eaa4ac75662efd9b98"
  },
  {
    "url": "imgs/035.jpg",
    "revision": "d9432f78a3c9656e1055e1a16404a6b9"
  },
  {
    "url": "imgs/036.jpg",
    "revision": "4812a3f9eea772cafbf3ce474e325211"
  },
  {
    "url": "imgs/037.jpg",
    "revision": "60be251de4b5ad011dea7ec2afc28855"
  },
  {
    "url": "imgs/038.jpg",
    "revision": "bafa6e14761824e898f3a4b950afc97d"
  },
  {
    "url": "imgs/039.jpg",
    "revision": "c60776b85d4ccf71ee068ab4c6323319"
  },
  {
    "url": "imgs/040.jpg",
    "revision": "835f9667c2b04d755103240d7eeb0d82"
  },
  {
    "url": "imgs/041.jpg",
    "revision": "5c351b1471c88bee10471420c58cf101"
  },
  {
    "url": "imgs/042.jpg",
    "revision": "74e5254823ffb647f40679350997e875"
  },
  {
    "url": "imgs/043.jpg",
    "revision": "59106d45f3b5247e295387e09ea0c8f5"
  },
  {
    "url": "imgs/044.jpg",
    "revision": "bffb6d70fb0bb957688896a4337a565d"
  },
  {
    "url": "imgs/045.jpg",
    "revision": "eb9bbe60b57b461968e0caa1cd2c5dea"
  },
  {
    "url": "imgs/046.jpg",
    "revision": "44d6473ba45804c63e45af3975b3e795"
  },
  {
    "url": "imgs/047.jpg",
    "revision": "02244df24d52ba3d08282ecc9dd2c4ee"
  },
  {
    "url": "imgs/048.jpg",
    "revision": "2befbf8e965124ee89e8c05c1bb2a489"
  },
  {
    "url": "imgs/049.jpg",
    "revision": "066b6127c649608aefa4800b8fbe6945"
  },
  {
    "url": "imgs/050.jpg",
    "revision": "719d58fe53995eb5e66b2dfeccf98760"
  },
  {
    "url": "imgs/051.jpg",
    "revision": "d60b369f44f58bbc0091f49678895833"
  },
  {
    "url": "index.html",
    "revision": "91eff3fdfa46b8e1e246c594c87f008d"
  },
  {
    "url": "logo.jpg",
    "revision": "d6313ed729722202f0a8d56d2f7dfb2e"
  },
  {
    "url": "logo.png",
    "revision": "3d686a3791cbeed17a3b01a578e2d87e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
