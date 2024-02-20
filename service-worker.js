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
    "url": "0.0.interview.html",
    "revision": "02b4b96b03b80d7a958332756ab89993"
  },
  {
    "url": "1.track.html",
    "revision": "383799f0008bed63d583dda9a5568399"
  },
  {
    "url": "10.utils.html",
    "revision": "6379cff5c3e2eeda5d953bbf1db1142d"
  },
  {
    "url": "11.loadsh.html",
    "revision": "56d84f77da0f47fc61c7efd050dfae54"
  },
  {
    "url": "12.vscode.html",
    "revision": "0a7847d373696290c350805b102098da"
  },
  {
    "url": "13.promise.html",
    "revision": "e3ac1fa766074e6623cd5c63ad5ab2c8"
  },
  {
    "url": "14.tamperMonkey.html",
    "revision": "1d3698d91979eb7d86f2d6458c47d815"
  },
  {
    "url": "15.git.html",
    "revision": "c9e415152f55f4e0ba9683600a4a3035"
  },
  {
    "url": "17.huawei.html",
    "revision": "59898dd114323dc4c4205f74a36559c4"
  },
  {
    "url": "173635-14729817956499.jpg",
    "revision": "470b442315cd11380c8b3ed51ed18c5f"
  },
  {
    "url": "19.notes.html",
    "revision": "0b8e47444819475b13ffbf5fbd8a9d1a"
  },
  {
    "url": "2.1.array.html",
    "revision": "1f28028bf7fa2e4a0bb5074c74b5ac7c"
  },
  {
    "url": "2.2.this.html",
    "revision": "af74884570880d2443601159f95f48b9"
  },
  {
    "url": "2.3.string.html",
    "revision": "f343cfe4957d6d076e2545dce53f958a"
  },
  {
    "url": "2.4.regExp.html",
    "revision": "4d32cc6ea3969bc51d2255bd54fe499f"
  },
  {
    "url": "2.5.browser.html",
    "revision": "04f53f0dae73b6c00e13e4b589842892"
  },
  {
    "url": "2.js.html",
    "revision": "10c1ada948f6dc82746f672cfe182729"
  },
  {
    "url": "20.Eslint_CommitLint.react.html",
    "revision": "8c55acff79d9b61caf49b90cc6c17790"
  },
  {
    "url": "21.vue3_ts_vite.html",
    "revision": "9951787ac8131d34ae48e29ef7ff5a16"
  },
  {
    "url": "3.0.vue.html",
    "revision": "5305535bb1e44bc4bf958d8ade28d912"
  },
  {
    "url": "3.1.vue3.html",
    "revision": "c9ee26c46f87139b6e0b7aed603fa098"
  },
  {
    "url": "4.1_React_Hooks.html",
    "revision": "83c8669c41f6ccc0b2ba2797302ce525"
  },
  {
    "url": "4.react.html",
    "revision": "e715b1159259cab05f000bc138c9ab59"
  },
  {
    "url": "404.html",
    "revision": "4b561b61c95b27f5b3608810727071bf"
  },
  {
    "url": "5.webpack.html",
    "revision": "9886f21622915d404e788f918fdadec2"
  },
  {
    "url": "6.css.html",
    "revision": "02258d61f6e0e48b9f3ac861268c5076"
  },
  {
    "url": "7.1_array.html",
    "revision": "8660f803a8dacbef11ef62ed06d11fc9"
  },
  {
    "url": "7.2_Stack.html",
    "revision": "39edbb36a064f1799aa88d1547ef2cd3"
  },
  {
    "url": "7.3_Queue.html",
    "revision": "0194ca36867db65dcf38b620acd4d06a"
  },
  {
    "url": "7.arithmetic.html",
    "revision": "7aec9dbade20374789560f4bb3de7a3d"
  },
  {
    "url": "8.browser.html",
    "revision": "d286de8cf0effcc72d33e741effdc68e"
  },
  {
    "url": "9.http.html",
    "revision": "c883d113d9aacc449825bf5938a266b9"
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
    "url": "assets/js/19.f0c9fba8.js",
    "revision": "c55f3bc1e37509b4808222d4d61da8d3"
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
    "url": "assets/js/25.4c370555.js",
    "revision": "be53681c68b16be9bec1f45e51eeff25"
  },
  {
    "url": "assets/js/26.52a10032.js",
    "revision": "406ca2e504bbd487de16456996e43a35"
  },
  {
    "url": "assets/js/27.96cc4c13.js",
    "revision": "ecf6f64474413bc7dac67928b45937a5"
  },
  {
    "url": "assets/js/28.1d83c4cf.js",
    "revision": "b95c55f8e36c52bae672e7ddafda8bdd"
  },
  {
    "url": "assets/js/29.a3d3441e.js",
    "revision": "d619608a95fea9f465ec071322bd589f"
  },
  {
    "url": "assets/js/3.b681fbd7.js",
    "revision": "f3eed509e76adc23692e3d457d3a87d2"
  },
  {
    "url": "assets/js/30.d66621b4.js",
    "revision": "43d2086d3f021e39e4fbf201f68db529"
  },
  {
    "url": "assets/js/31.3574821e.js",
    "revision": "d96a0664d0da73bedac9b579f758629e"
  },
  {
    "url": "assets/js/32.ac632026.js",
    "revision": "59e5a00632759e3c2ea9e68d6ebfe103"
  },
  {
    "url": "assets/js/33.68367b02.js",
    "revision": "0fbb42e0ef7e79abf8e0e247043cad8d"
  },
  {
    "url": "assets/js/34.74505d3e.js",
    "revision": "a3fad4e1edae9d9d1983009653a2e545"
  },
  {
    "url": "assets/js/35.421c1072.js",
    "revision": "1c07f2916d082af018aeb7c2965bd139"
  },
  {
    "url": "assets/js/36.179a9273.js",
    "revision": "268b43494d3951ac07fb50827daf97ff"
  },
  {
    "url": "assets/js/37.76586512.js",
    "revision": "f279af2e95c1e5c2d4e71c5f615b956c"
  },
  {
    "url": "assets/js/38.8672588a.js",
    "revision": "a5252dc7cd1200c7145ba55e15e594a2"
  },
  {
    "url": "assets/js/39.591fc745.js",
    "revision": "10d91f29d43a56a0030f80db9e513431"
  },
  {
    "url": "assets/js/4.e02d5be5.js",
    "revision": "3d7a5e451b4c24e331ae9ae89ca29e71"
  },
  {
    "url": "assets/js/40.f3438c68.js",
    "revision": "a5581c0c56d2ac6f274c8ccf983a5dd8"
  },
  {
    "url": "assets/js/41.0417ebf0.js",
    "revision": "662a440635f477f0fec5805c30f8c60f"
  },
  {
    "url": "assets/js/42.5cc10975.js",
    "revision": "671dfd7834c92fc3698ebb58483d285a"
  },
  {
    "url": "assets/js/43.047e74d9.js",
    "revision": "409a3c6a8be2178416a438ca99349677"
  },
  {
    "url": "assets/js/44.07cb0762.js",
    "revision": "ffde13cd3aeeba271875c040e91d6230"
  },
  {
    "url": "assets/js/45.41c6c876.js",
    "revision": "b55f669223bd889ef4d605ccd63dd838"
  },
  {
    "url": "assets/js/46.5114cc86.js",
    "revision": "e346c96b5ae1f4d31bc9ab873364061a"
  },
  {
    "url": "assets/js/47.7bf6a6a9.js",
    "revision": "b01bd49ffd361e4a2603862d9d70f361"
  },
  {
    "url": "assets/js/48.ba7ff522.js",
    "revision": "d4f16aec8a364113cd65b32edda76563"
  },
  {
    "url": "assets/js/49.02711d70.js",
    "revision": "ddd7c79c68279922cc45013e5e9dbf43"
  },
  {
    "url": "assets/js/5.bfd8aa63.js",
    "revision": "ddd0368973ed62d3c7fad397c4db60a8"
  },
  {
    "url": "assets/js/50.c4557e04.js",
    "revision": "34f51e014d6591ed77b1cdf6b0050a16"
  },
  {
    "url": "assets/js/51.5fa6042e.js",
    "revision": "b7df50d6d8168324e1480e04216a9c7d"
  },
  {
    "url": "assets/js/52.4d19a492.js",
    "revision": "0b217ae66057f7b95d899e4005af6581"
  },
  {
    "url": "assets/js/53.dc8830ff.js",
    "revision": "48d78d571bc9ec7c18fefd386e8b83e3"
  },
  {
    "url": "assets/js/54.fe198a09.js",
    "revision": "4bbf6f16089d5691fbfdb622909eb26b"
  },
  {
    "url": "assets/js/55.892d546a.js",
    "revision": "e7c591dd11b25f741479362c7c02cdf6"
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
    "url": "assets/js/app.52403f52.js",
    "revision": "25d5ef93c06bf22d8feadcb0f8321a49"
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
    "revision": "aa8741d0f68aaa98192fb181f11773db"
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
