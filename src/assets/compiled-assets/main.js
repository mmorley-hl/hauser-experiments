/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
var SITE;SITE =
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/css/index.scss":
/*!***********************************!*\
  !*** ./src/assets/css/index.scss ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://SITE/./src/assets/css/index.scss?");

/***/ }),

/***/ "./src/assets/js/_a-3d-test.js":
/*!*************************************!*\
  !*** ./src/assets/js/_a-3d-test.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ \"./node_modules/three/examples/jsm/loaders/OBJLoader.js\");\n// Option 1: Import the entire three.js core library.\n\n\n\n\nvar a3dtest = document.querySelectorAll('.a3dtest')\n\n\na3dtest.forEach(() => {\n\n\n   let container;\n   var cube = null\n   var timeline = null\n   var percentage = 0\n   var divContainer = document.querySelector('.a3dtest')\n   var maxHeight = (divContainer.clientHeight || divContainer.offsetHeight) - window.innerHeight\n\n   let camera, scene, renderer;\n   \n   let mouseX = 0, mouseY = 0;\n   \n   let windowHalfX = window.innerWidth / 2;\n   let windowHalfY = window.innerHeight / 2;\n   \n   var object;\n   let model;\n   var car;\n   var object_return;\n   \n   init();\n   animate();\n   \n   function addCube () {\n      cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry( 5, 250, 5 ), new three__WEBPACK_IMPORTED_MODULE_0__.MeshNormalMaterial() );\n      cube.position.y = 5\n      cube.position.z = -100\n      scene.add(cube);\n  }\n\n  function addModel () {\n        // manager\n   \n       function loadModel() {\n   \n          object.traverse( function ( child ) {\n   \n            if ( child.isMesh ) child.material.map = texture;\n   \n         } );\n   \n         object.position.y = - 195;\n         model = object;\n         // scene.add(model);\n      }\n   \n      const manager = new three__WEBPACK_IMPORTED_MODULE_0__.LoadingManager( loadModel );\n      console.log(\"manager\", manager)\n      \n   \n      manager.onProgress = function ( item, loaded, total ) {\n   \n         console.log( item, loaded, total );\n   \n      };\n   \n      // texture\n   \n      const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader( manager );\n      const texture = textureLoader.load( './assets/images/photography/black/Black_001.jpg' );\n   \n      // model\n   \n      function onProgress( xhr ) {\n   \n         if ( xhr.lengthComputable ) {\n   \n            const percentComplete = xhr.loaded / xhr.total * 100;\n            console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );\n   \n         }\n   \n      }\n   \n      function onError() {}\n   \n      const loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader( manager );\n      loader.load( './assets/images/3d/A_011.obj', function ( obj ) {\n   \n         object = obj;\n         model = object;\n         console.log(\"model_test\", model)\n         console.log(\"obj_test\", obj)\n      }, onProgress, onError );\n      \n  }\n   \n   function init() {\n\n \n   \n      container = document.createElement( 'div' );\n      document.body.appendChild( container );\n   \n      camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );\n      camera.position.z = 250;\n   \n      // scene\n   \n      scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\n   \n      const ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.AmbientLight( 0xcccccc, 0.4 );\n      scene.add( ambientLight );\n   \n      const pointLight = new three__WEBPACK_IMPORTED_MODULE_0__.PointLight( 0xffffff, 0.8 );\n      camera.add( pointLight );\n      scene.add( camera );\n   \n      var loader = new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_1__.OBJLoader();\n\n      // return a mesh from an obj file   \n      function createObject( objFile, objName ) {\n          var container = new three__WEBPACK_IMPORTED_MODULE_0__.Object3D();\n          loader.load( objFile , function ( object ) {\n              object.name = objName;\n            //   container.add( object );\n            //   scene.add(object);\n            object.position.y = 5\n            object.position.z = -100\n            scene.add(object);\n          })\n          return container;\n      }\n      \n      car = createObject('./assets/images/3d/A_011.obj', 'abc123');\n      // car.position.y = 10;\n      console.log(\"car\", car)\n\n   \n      //\n      \n      renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\n      renderer.setPixelRatio( window.devicePixelRatio );\n      renderer.setSize( window.innerWidth, window.innerHeight );\n      container.appendChild( renderer.domElement );\n   \n      document.addEventListener( 'mousemove', onDocumentMouseMove );\n   \n      //\n   \n      window.addEventListener( 'resize', onWindowResize );\n      addModel()\n      // addCube()\n      initTimeline()\n      console.log(\"car_inti\", car)\n      console.log(\"cube\", cube)\n      console.log(\"model\", model)\n   }\n   \n   function initTimeline() {\n      console.log(\"car_timeline\", car)\n      timeline = anime.timeline({\n        autoplay: false,\n        duration: 4500,\n        easing: 'easeOutSine'\n      });\n      timeline.add({\n        targets: car.position,\n        x: 100,\n        y: 25,\n        z: -50,\n        duration: 2250,\n        update: camera.updateProjectionMatrix()\n      })\n      timeline.add({\n        targets: car.position,\n        x: 0,\n        y: 0,\n        z: 50,\n        duration: 2250,\n        update: camera.updateProjectionMatrix()\n      })\n      var value = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xFFFCFC)\n      var initial = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x161216)\n      timeline.add({\n        targets: initial,\n        r: [initial.r, value.r],\n        g: [initial.g, value.g],\n        b: [initial.b, value.b],\n        duration: 4500,\n        update: () => {\n          renderer.setClearColor(initial);\n        }\n      }, 0);\n    }\n\n    // window resize \n   function onWindowResize() {\n   \n      windowHalfX = window.innerWidth / 2;\n      windowHalfY = window.innerHeight / 2;\n   \n      camera.aspect = window.innerWidth / window.innerHeight;\n      camera.updateProjectionMatrix();\n   \n      renderer.setSize( window.innerWidth, window.innerHeight );\n   \n   }\n   \n   // Mouse move change kamera psoition\n   function onDocumentMouseMove( event ) {\n   \n      mouseX = ( event.clientX - windowHalfX );\n      mouseY = ( event.clientY - windowHalfY );\n   \n   }\n   \n   function animate() {\n   \n      requestAnimationFrame( animate );\n      render();\n   \n   }\n   \n   function render() {\n   \n      camera.position.x += ( mouseX - camera.position.x ) * .05;\n      camera.position.y += ( - mouseY - camera.position.y ) * .05;\n   \n      camera.lookAt( scene.position );\n      percentage = lerp(percentage, scrollY, .08);\n      timeline.seek(percentage * (4500 / maxHeight))\n      // animate the cube\n      car.rotation.x += 0.01;\n      car.rotation.y += 0.0125;\n      car.rotation.z += 0.012;\n      renderer.render( scene, camera );\n   \n   }\n\n   // linear interpolation function\n   function lerp(a, b, t) {\n      return ((1 - t) * a + t * b);\n   }\n})\n\n\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_a-3d-test.js?");

/***/ }),

/***/ "./src/assets/js/_a-test-paralax.js":
/*!******************************************!*\
  !*** ./src/assets/js/_a-test-paralax.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! locomotive-scroll */ \"./node_modules/locomotive-scroll/dist/locomotive-scroll.esm.js\");\n\nif(document.querySelector('[data-scroll-container]')){\n\n   const scroll = new locomotive_scroll__WEBPACK_IMPORTED_MODULE_0__.default({\n      el: document.querySelector('[data-scroll-container]'),\n      smooth: true\n  });\n}\n\n\nconst a_part1 = document.querySelectorAll(\".a-test-paralax__part1\");\nconst a_part2 = document.querySelectorAll(\".a-test-paralax__part2\");\nconst a_part3 = document.querySelectorAll(\".a-test-paralax__part3\");\nconst a_part4 = document.querySelectorAll(\".a-test-paralax__part4\");\n\n// gsap.to(\".paralax_001\", {\n//     yPercent: 100,\n//     ease: \"none\",\n//     scrollTrigger: {\n//       trigger: \".paralax_001\",\n//       // start: \"top bottom\", // the default values\n//       // end: \"bottom top\",\n//       scrub: false\n//     }, \n//   });\n\n// gsap.to(\".paralax_002\", {\n//     yPercent: -50,\n//     ease: \"none\",\n//     scrollTrigger: {\n//       trigger: \".paralax_002\",\n//       // start: \"top bottom\", // the default values\n//       // end: \"bottom top\",\n//       scrub: true\n//     }, \n//   });\n// gsap.to(\".paralax_003\", {\n//     yPercent: 10,\n//     ease: \"none\",\n//     scrollTrigger: {\n//       trigger: \".paralax_003\",\n//       // start: \"top bottom\", // the default values\n//       // end: \"bottom top\",\n//       scrub: true\n//     }, \n//   });\n// gsap.to(\".paralax_004\", {\n//     yPercent: 30,\n//     ease: \"none\",\n//     scrollTrigger: {\n//       trigger: \".paralax_004\",\n//       // start: \"top bottom\", // the default values\n//       // end: \"bottom top\",\n//       scrub: true\n//     }, \n//   });\n// gsap.to(\".paralax_005\", {\n//     yPercent: 10,\n//     ease: \"none\",\n//     scrollTrigger: {\n//       trigger: \".paralax_005\",\n//       // start: \"top bottom\", // the default values\n//       // end: \"bottom top\",\n//       scrub: true\n//     }, \n//   });\n\ndocument.addEventListener(\"mousemove\", (e) => {\n     let x = e.clientX * 100 / window.innerWidth - 50;\n     let y = e.clientY * 100 / window.innerHeight - 50;\n\n\n     a_part1.forEach((elem) => {\n        elem.style.transform = `rotate(${x + 18}deg)`;\n     })\n     a_part2.forEach((elem) => {\n        elem.style.transform = `rotate(${x - 18}deg)`;\n     })\n     a_part3.forEach((elem) => {\n        elem.style.transform = `translate(${x - 15}px, ${y}px)`;\n     })\n     a_part4.forEach((elem) => {\n        elem.style.transform = `translate(${x + 15}px, ${-y * 0.5}px)`;\n     })\n     \n})\n\n//# sourceURL=webpack://SITE/./src/assets/js/_a-test-paralax.js?");

/***/ }),

/***/ "./src/assets/js/_a-test-solo.js":
/*!***************************************!*\
  !*** ./src/assets/js/_a-test-solo.js ***!
  \***************************************/
/***/ (function() {

eval("const a_part1 = document.querySelectorAll(\".a-test-solo__part1\");\nconst a_part2 = document.querySelectorAll(\".a-test-solo__part2\");\nconst a_part3 = document.querySelectorAll(\".a-test-solo__part3\");\n\ndocument.addEventListener(\"mousemove\", (e) => {\n     let x = e.clientX * 100 / window.innerWidth - 50;\n     let y = e.clientY * 300 / window.innerHeight - 150;\n\n\n     a_part1.forEach((elem) => {\n        elem.style.transform = `rotate(${x + 12}deg)`;\n     })\n     a_part2.forEach((elem) => {\n        elem.style.transform = `rotate(${x - 12}deg)`;\n     })\n     a_part3.forEach((elem) => {\n        elem.style.transform = `translate(${x - 15}px,${y - 15}px)`;\n     })\n     \n})\n\n//# sourceURL=webpack://SITE/./src/assets/js/_a-test-solo.js?");

/***/ }),

/***/ "./src/assets/js/_a-test.js":
/*!**********************************!*\
  !*** ./src/assets/js/_a-test.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\n\nconst a_part1 = document.querySelectorAll(\".a-test__part1\");\nconst a_part2 = document.querySelectorAll(\".a-test__part2\");\nconst a_part3 = document.querySelectorAll(\".a-test__part3\");\nconst a_part4 = document.querySelectorAll(\".a-test__part4\");\n\ndocument.addEventListener(\"mousemove\", (e) => {\n     let x = e.clientX * 100 / window.innerWidth - 50;\n     let y = e.clientY * 100 / window.innerHeight - 50;\n\n\n     a_part1.forEach((elem) => {\n        elem.style.transform = `rotate(${x + 18}deg)`;\n     })\n     a_part2.forEach((elem) => {\n        elem.style.transform = `rotate(${x - 18}deg)`;\n     })\n     a_part3.forEach((elem) => {\n        elem.style.transform = `translate(${x - 15}px, ${y}px)`;\n     })\n     a_part4.forEach((elem) => {\n        elem.style.transform = `translate(${x + 15}px, ${-y * 0.5}px)`;\n     })\n     \n})\n\n//# sourceURL=webpack://SITE/./src/assets/js/_a-test.js?");

/***/ }),

/***/ "./src/assets/js/_carousel.js":
/*!************************************!*\
  !*** ./src/assets/js/_carousel.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ \"./node_modules/flickity/js/index.js\");\n/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst carousel = document.querySelectorAll('.carousel')\n\ncarousel.forEach((elem) => {\n\n\tlet arrows = false\n\n\tif (elem.classList.contains('carousel--arrows')) {\n\t\tarrows = true\n\t}\n\n\twindow.addEventListener('DOMContentLoaded', () => {\n\n\t\tconst flkty = new (flickity__WEBPACK_IMPORTED_MODULE_0___default())(elem, {\n\t\t\tprevNextButtons: arrows,\n\t\t\timagesLoaded: true,\n\t\t\tgroupCells: true,\n\t\t\tcellAlign: 'left',\n\t\t\twrapAround: true,\n\t\t\tcontain: true,\n\t\t})\n\n\t\tsetTimeout(() => {\n            flkty.resize()\n        }, 500)\n\n\t})\n\n})\n\n//# sourceURL=webpack://SITE/./src/assets/js/_carousel.js?");

/***/ }),

/***/ "./src/assets/js/_color_switch.js":
/*!****************************************!*\
  !*** ./src/assets/js/_color_switch.js ***!
  \****************************************/
/***/ (function() {

eval("let colorswitch = document.querySelectorAll('.themeingbutton').forEach((elem) => {\n\telem.onclick = (e) => {\n\t\tlet themeWrapper = document.querySelector('.theme-wrapper')\n\t\tif (themeWrapper.classList.contains('theme-dark')) {\n\t\t\tthemeWrapper.classList.remove('theme-dark')\n\t\t\tthemeWrapper.classList.add('theme-light')\n\t\t} else {\n\t\t\tthemeWrapper.classList.remove('theme-light')\n\t\t\tthemeWrapper.classList.add('theme-dark')\n\t\t} \n\t}\n  })\n\n//# sourceURL=webpack://SITE/./src/assets/js/_color_switch.js?");

/***/ }),

/***/ "./src/assets/js/_cursor.js":
/*!**********************************!*\
  !*** ./src/assets/js/_cursor.js ***!
  \**********************************/
/***/ (function() {

eval("const cursor = document.querySelector('.cursor')\nif (cursor) {\n\n\tcursor.style.opacity = 1\n\n\twindow.onmousemove = (e) => {\n\t\trequestAnimationFrame(() => {\n\t\t\tcursor.style.opacity = 1\n\t\t\tlet x = `${(e.pageX - scrollX - 40)}px`,\n\t\t\t\ty = `${(e.pageY - scrollY - 40)}px`\n\t\t\tcursor.style.setProperty('--top', y)\n\t\t\tcursor.style.setProperty('--left', x)\n\t\t})\n\t}\n\n\t// window.onmouseenter = (e) => {\n\t// \tconsole.log(\"enter\", e)\n\t// \trequestAnimationFrame(() => {\n\t// \t\tcursor.style.opacity = 1\n\t// \t})\n\t// }\n\n\twindow.onmouseout = (e) => {\n\t\trequestAnimationFrame(() => {\n\t\t\tcursor.style.opacity = 0\n\t\t})\n\t}\n\n\t//todo window events or speciefic events\n\tdocument.addEventListener('click', () => {\n\t\tcursor.classList.add(\"expand\")\n\t\tsetTimeout(() => {\n\t\t\tcursor.classList.remove(\"expand\")\n\t\t}, 600)\n\t})\n}\n\n//# sourceURL=webpack://SITE/./src/assets/js/_cursor.js?");

/***/ }),

/***/ "./src/assets/js/_dots.js":
/*!********************************!*\
  !*** ./src/assets/js/_dots.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ \"./node_modules/gsap/index.js\");\n/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsap/ScrollTrigger */ \"./node_modules/gsap/ScrollTrigger.js\");\n\n\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger);\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray(\".panel\").forEach((panel, i) => {\n  gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_1__.ScrollTrigger.create({\n    trigger: panel,\n    start: \"top top\", \n    pin: true, \n    pinSpacing: false ,\n  });\n});\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_red_002\", {\n    scrollTrigger: {\n      trigger: \".red\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    x: 600,\n    y: 200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_red_003\", {\n    scrollTrigger: {\n      trigger: \".red\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    x: -600,\n    y: 200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_red_004\", {\n    scrollTrigger: {\n      trigger: \".red\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    x: 600,\n    y: -200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_red_005\", {\n    scrollTrigger: {\n      trigger: \".red\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    x: -600,\n    y: -200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\n\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_orange_006\", {\n    scrollTrigger: {\n      trigger: \".orange\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n      // markers: {startColor: \"green\", endColor: \"red\", fontSize: \"12px\"}\n    },\n    // scaleX: 0.5,\n    // scaleY: 0.5,\n    x: -170,\n    y: -200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_orange_007\", {\n    scrollTrigger: {\n      trigger: \".orange\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    // scaleX: 0.5,\n    // scaleY: 0.5,\n    x: 170,\n    y: -200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_orange_008\", {\n    scrollTrigger: {\n      trigger: \".orange\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    // scaleX: 0.5,\n    // scaleY: 0.5,\n    x: 170,\n    y: 200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_orange_009\", {\n    scrollTrigger: {\n      trigger: \".orange\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    // scaleX: 0.5,\n    // scaleY: 0.5,\n    x: -170,\n    y: 200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_orange_102\", {\n    scrollTrigger: {\n      trigger: \".orange\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    // scaleX: 0.5,\n    // scaleY: 0.5,\n    x: -170,\n    y: 200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_orange_202\", {\n    scrollTrigger: {\n      trigger: \".orange\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    // scaleX: 0.5,\n    // scaleY: 0.5,\n    x: 170,\n    y: 200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_orange_302\", {\n    scrollTrigger: {\n      trigger: \".orange\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\",\n    },\n    // scaleX: 0.5,\n    // scaleY: 0.5,\n    x: -170,\n    y: -200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".circle_orange_402\", {\n    scrollTrigger: {\n      trigger: \".orange\",\n      scrub: true,\n      start: \"top top\",\n      end: \"bottom bottom\"\n    },\n    // scaleX: 0.5,\n    // scaleY: 0.5,\n    x: 170,\n    y: -200,\n    transformOrigin: \"left center\", \n    ease: \"none\"\n  });\n\n  \n// scroll down arrow animation\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".arrow\", {y: 12, ease: \"power1.inOut\", repeat: -1, yoyo: true});\ngsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(\".to_top_button\", {y: 8, ease: \"power1.inOut\", repeat: -1, yoyo: true});\n\n\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_dots.js?");

/***/ }),

/***/ "./src/assets/js/_h-test.js":
/*!**********************************!*\
  !*** ./src/assets/js/_h-test.js ***!
  \**********************************/
/***/ (function() {

eval("const h_part1 = document.querySelectorAll(\".h-test__part1\");\nconst h_part2 = document.querySelectorAll(\".h-test__part2\");\nconst h_part3 = document.querySelectorAll(\".h-test__part3\");\nconst h_part4 = document.querySelectorAll(\".h-test__part4\");\n\ndocument.addEventListener(\"mousemove\", (e) => {\n     let x = e.clientX * 100 / window.innerWidth - 50;\n     let x_3 = e.clientX * 200 / window.innerWidth - 50;\n     let y = e.clientY * 300 / window.innerHeight - 250;\n\n\n     h_part1.forEach((elem) => {\n         \n        elem.style.transform = `rotate(${x}deg)`;\n     })\n     h_part2.forEach((elem) => {\n      \n        elem.style.transform = `rotate(${x}deg)`;\n     })\n     h_part3.forEach((elem) => {\n      \n        elem.style.transform = `translate(${x_3}px,${y}px)`;\n      //   elem.style.transform = `translateY(${y}px)`;\n     })\n     h_part4.forEach((elem) => {\n        elem.style.transform = `translateX(${x + 15}px)`;\n     })\n     \n})\n\n//# sourceURL=webpack://SITE/./src/assets/js/_h-test.js?");

/***/ }),

/***/ "./src/assets/js/_header.js":
/*!**********************************!*\
  !*** ./src/assets/js/_header.js ***!
  \**********************************/
/***/ (function() {

eval("// import Headroom from \"headroom.js\";\n// grab an element\n// var scroll_direction = document.querySelector(\".has-scroll-init\");\n// var htmlelm = document.querySelector(\"html\");\n// // console.log(\"scroll_direction\", scroll_direction.dataset.direction)\n// console.log(\"htmlelm\", htmlelm)\n\n\n// window.onscroll = () => {\n// \tconsole.log(\"scroll_direction\")\n// }\n\n\n\n\n// // construct an instance of Headroom, passing the element\n// var headroom = new Headroom(myElement);\n// // initialise\n// headroom.init();\n\n//# sourceURL=webpack://SITE/./src/assets/js/_header.js?");

/***/ }),

/***/ "./src/assets/js/_headroom.js":
/*!************************************!*\
  !*** ./src/assets/js/_headroom.js ***!
  \************************************/
/***/ (function() {

eval("// // if you're using a bundler, first import:\n// import Headroom from \"headroom.js\";\n// // grab an element\n// var myElement = document.querySelector(\"header\");\n// // construct an instance of Headroom, passing the element\n// var headroom  = new Headroom(myElement);\n// // initialise\n// headroom.init();\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/_headroom.js?");

/***/ }),

/***/ "./src/assets/js/_mapbox.js":
/*!**********************************!*\
  !*** ./src/assets/js/_mapbox.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const mapboxgl = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n\nvar places = {\n\t\"type\":\"FeatureCollection\",\n\t\"features\":[\n\t   \t{\n\t\t  \"type\":\"Feature\",\n\t\t  \"properties\":{\n\t\t\t \"description\":\"<strong>Frankfurter K??che</strong><p><a href=\\\"http://www.restaurant-frankfurter-kueche.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 86, 60314 Frankfurt am Main</p>\",\n\t\t\t \"icon\":\"Restaurants\"\n\t\t  },\n\t\t  \"geometry\":{\n\t\t\t \"type\":\"Point\",\n\t\t\t \"coordinates\":[\n\t\t\t\t8.704224783467328,\n\t\t\t\t50.111681170124484\n\t\t\t ]\n\t\t  }\n\t   \t},\n\t   \t{\n\t\t\"type\":\"Feature\",\n\t\t\"properties\":{\n\t\t   \"description\":\"<strong>'Das Leben ist Sch??n</strong><p><a href=\\\"http://www.daslebenistschoen.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 198, 60314 Frankfurt am Main</p>\",\n\t\t   \"icon\":\"Restaurants\"\n\t\t},\n\t\t\"geometry\":{\n\t\t   \"type\":\"Point\",\n\t\t   \"coordinates\":[\n\t\t\t 8.723497812302732,\n\t\t\t 50.11535621512961\n\t\t   ]\n\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>'Soul Food Factory East</strong><p><a href=\\\"http://www.soul-food-factory.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 124, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.711172127644243,\n\t\t\t\t50.11132723047215\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Saravini</strong><p><a href=\\\"http://www.saravini-frankfurt.de/mittagskarte/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 119, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t 8.710194527644237,\n\t\t\t\t 50.11172910920639\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>'The Tasty Toast</strong><p>Osthafenplatz 4, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71285928352579,\n\t\t\t\t50.11090767357005\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Stones</strong><p><a href=\\\"https://www.stonesfood.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 125, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.712307297113504,\n\t\t\t\t50.11246691431603\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Tawaraya</strong><p>Hanauer Landstra??e 131, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71320475654297,\n\t\t\t\t50.11222598741672\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Cocothai</strong><p><a href=\\\"https://www.cocothaifrankfurtammain.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 151, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71526672770677,\n\t\t\t\t50.112919324067384\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Urfa</strong><p><a href=\\\"https://www.urfa-grill-pizzeria.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 133, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.713368798870526,\n\t\t\t\t50.11229886602847\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Aroydee</strong><p><a href=\\\"https://www.aroydee.de/Frankfurt\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 72, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.703535627706737,\n\t\t\t\t50.11280334433856\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Goldman</strong><p><a href=\\\"http://www.goldman-restaurant.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 127, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.712951143051455,\n\t\t\t\t50.11208490623492\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Oosten</strong><p><a href=\\\"https://oosten-frankfurt.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Mayfarthstra??e 4, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.702709870034257,\n\t\t\t\t50.10785792533555\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Gref-V??lsings</strong><p><a href=\\\"https://www.gref-voelsings.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 132, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.7124484565429,\n\t\t\t\t50.1116097900726\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Best-Worscht In Town</strong><p><a href=\\\"https://www.bestworschtintown.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 270, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.72698031236205,\n\t\t\t\t50.1165047893076 \n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Bei Frau Nanna</strong><p><a href=\\\"https://order.beifraunanna.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Ernst-Achilles-Platz 3, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70476983642246,\n\t\t\t\t50.1128814042537\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>LEUCHTENDROTER</strong><p><a href=\\\"http://leuchtendroter.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Lindleystra??e 17, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.718510583561219,\n\t\t\t\t50.11257783263066\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Kahuna Pok?? Bros.</strong><p><a href=\\\"https://kahunapokebros.com/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 160A, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.717488819399943,\n\t\t\t\t50.11311594184854\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Ben's Burger</strong><p><a href=\\\"https://bens-burger.business.site/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 134, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.712697437075015,\n\t\t\t\t50.11151811854781\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Jesse James</strong><p><a href=\\\"http://www.jessejames.eu/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 83, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.705296327706698,\n\t\t\t\t50.11207194717568\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>COMAI East - modern viet kitchen</strong><p><a href=\\\"https://www.comai.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 130, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.7123598408274,\n\t\t\t\t50.11133081012636\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Pizzeria Mille Lire</strong><p><a href=\\\"http://www.pizzeria-mille-lire.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Sonnemannstra??e 71, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Restaurants\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70313924526421,\n\t\t\t\t50.111192054739604\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Coffee Fellows</strong><p><a href=\\\"http://www.coffee-fellows-ostend.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 115, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Cafe??\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709015614425825,\n\t\t\t\t50.11224196267669\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Wiener Feinb??ckerei</strong><p><a href=\\\"https://heberer.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 108, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Cafe??\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70924599781994,\n\t\t\t\t50.111330420991095\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Aniis</strong><p><a href=\\\"http://www.aniis.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 82, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Cafe??\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.704047841198193,\n\t\t\t\t50.11191788713086\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Stock Avenue 81</strong><p><a href=\\\"http://www.melia.com/de/lodgings/deutschland/frankfurt/innside-frankfurt-ostend/restaurants.html\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 81, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Cafe??\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.704830970034363,\n\t\t\t\t50.112325267256004\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>B??ckerei und Konditorei Huck</strong><p><a href=\\\"https://www.baeckerei-huck.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Sonnemannstra??e 81, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Cafe??\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70409040574631,\n\t\t\t\t50.111376848593906\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Frankfurt Pub</strong><p><a href=\\\"http://www.frankfurt-pub.de/\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Hanauer Landstra??e 99, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Cafe??\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.708437927706713,\n\t\t\t\t50.111746607401514\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Eiscaf?? Caf?? a Roma</strong><p>Sonnemannstra??e 51, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Cafe??\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.700960888265074,\n\t\t\t\t50.11085074470636\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Marmion Bar</strong><p><a href=\\\"https://www.marmion-bar.de\\\" target=\\\"_blank\\\" title=\\\"Opens in a new window\\\">Link</a></p><p>Lindleystra??e 17, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Bar-Cafe??\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.718510583561219,\n\t\t\t\t50.11257783263066\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Alnatura Super Natur Markt</strong><p>Hanauer Landstra??e 110, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709294277580927,\n\t\t\t\t50.11124097596751\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Edeka</strong><p>Ferdinand-Happ-Stra??e 59, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.715864727706792,\n\t\t\t\t50.11446867774984\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Lidl</strong><p>Hanauer Landstra??e 219, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.721729185379182,\n\t\t\t\t50.115486293551406\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Rewe</strong><p>Louis-Appia-Passage 7 7, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.705509785379135,\n\t\t\t\t50.112873643153115\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Aldi S??d</strong><p>Hanauer Landstra??e 285, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.724419070034426,\n\t\t\t\t50.11658945000033\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Me.Ta</strong><p>Hanauer Landstra??e 208 -216, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.726406085457684,\n\t\t\t\t50.11562919293627\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>dm</strong><p>Louis-Appia-Passage 6, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Retail\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.705571970034336,\n\t\t\t\t50.11244186549421\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Fitness First</strong><p>Hanauer Landstra??e 148, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Fitness\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71600512770675,\n\t\t\t\t50.11236760526015\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Fitseveneleven east blck</strong><p>Hanauer Landstra??e 120, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Fitness\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.710570127706724,\n\t\t\t\t50.11133183045381\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Fitseveneleven east pink</strong><p>Hanauer Landstra??e 147, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Fitness\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.714824341198113,\n\t\t\t\t50.11278522362572\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Kieser Training</strong><p>Hanauer Landstra??e 291A, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Fitness\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.716392498870569,\n\t\t\t\t50.113392181835025\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Fritz-R??mond-Theater</strong><p>Bernhard-Grzimek-Allee 1, 60316 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.699309256543005,\n\t\t\t\t50.11610529237147\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Romanfabrik</strong><p>Hanauer Landstra??e 186, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.722945141198247,\n\t\t\t\t50.114824976214166\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Kunstverein Familie Montez</strong><p>Honsellstra??e 7, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709860525853374,\n\t\t\t\t50.1089605822416\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Union Halle</strong><p>Hanauer Landstra??e 188, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\"\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.72292931217596,\n\t\t\t\t50.11426644210688\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>25hours</strong><p>Hanauer Landstra??e 127, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.712797538150072,\n\t\t\t\t50.11210810538992\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>INNSIDE</strong><p>Hanauer Landstra??e 81, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.704878827706677,\n\t\t\t\t50.112383305205896, \n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>B&B Hotel Frankfurt City-Ost</strong><p>Hanauer Landstra??e 117, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709716241586767,\n\t\t\t\t50.11160000635536\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>MotelOne</strong><p>Hanauer Landstra??e 142, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.713694256542883,\n\t\t\t\t50.11203960791258\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Moxy</strong><p>Hanauer Landstra??e 162, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71785704495354,\n\t\t\t\t50.11326424062049\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Hampton by Hilton Frankfurt City Centre East</strong><p>Grusonstra??e 4, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70798850585079,\n\t\t\t\t50.112528227125246\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>LINDLEY LINDENBERG</strong><p>Lindleystra??e 17, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Hotels\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.718837104529054,\n\t\t\t\t50.11282985876722\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Die Knoppschachtel</strong><p>Ferdinand-Happ-Stra??e 57, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kita\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.715007013560411,\n\t\t\t\t50.11448051790032\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>EZB Kita</strong><p>Ferdinand-Happ-Stra??e 57, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kita\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.715007013560411,\n\t\t\t\t50.11448051790032\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Kindergarten d. Evangelisch-Luth.</strong><p>R??derbergweg 66, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kita\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.707768964236756,\n\t\t\t\t50.115814262790835\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>FR??BEL-Kindergarten</strong><p>Honsellstra??e 18, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kita\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.709864689196351,\n\t\t\t\t50.110742092904175\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Frankfurter Sparkasse</strong><p>Grusonstra??e 3-5, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Banken\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70621865115999,\n\t\t\t\t50.11208644119723, \n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Europ??ische Zentralbank (EZB)</strong><p>Sonnemannstra??e 20, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Banken\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.70185343846062,\n\t\t\t\t50.10999246042122\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Schwedler See</strong><p>Schwedlerstra??e, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.72247076419106,\n\t\t\t\t50.1126669871857\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Hafenpark</strong><p>Mayfarthstra??e, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Kultur-Freizeit\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.707727030979154,\n\t\t\t\t50.10780485816412\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t\"type\":\"Feature\",\n\t\t\t\"properties\":{\n\t\t\t   \"description\":\"<strong>Tankstelle Esso</strong><p>Hanauer Landstra??e 178, 60314 Frankfurt am Main</p>\",\n\t\t\t   \"icon\":\"Tankstelle\",\n\t\t\t},\n\t\t\t\"geometry\":{\n\t\t\t   \"type\":\"Point\",\n\t\t\t   \"coordinates\":[\n\t\t\t\t8.71785704495354,\n\t\t\t\t50.11326424062049\n\t\t\t   ]\n\t\t\t}\n\t\t},\n\t\t{\n\t\t\t'type': 'Feature',\n\t\t\t'properties': {\n\t\t\t\t'description':\n\t\t'<strong>Make it Mount Pleasant</strong><p><a href=\"http://www.mtpleasantdc.com/makeitmtpleasant\" target=\"_blank\" title=\"Opens in a new window\">Make it Mount Pleasant</a> is a handmade and vintage market and afternoon of live entertainment and kids activities. 12:00-6:00 p.m.</p>',\n\t\t\t\t'icon': 'castle-15'\n\t\t\t},\n\t\t\t'geometry': {\n\t\t\t'type': 'Point',\n\t\t\t'coordinates': [8.71157213340723, 50.11154494192954]\n\t\t\t}\n\t\t},\n\t  \n\t]\n };\n\n const mapPresent = document.querySelectorAll('.maps')\n\n mapPresent.forEach((elem) => {\n\t\n\tvar filterGroup = document.getElementById('filter-group');\n\tmapboxgl.accessToken = 'pk.eyJ1IjoibW1vcmxleWhsIiwiYSI6ImNrbHV5c25kZjBuZm0yd28zYncwdGlnOWcifQ.0ii1h91pTh7MM9NLoIXuEA';\n\t\n\tvar mq = window.matchMedia( \"(min-width: 820px)\" );\n\t\n\tconsole.log('mq', mq)\n\t\n\tif (mq.matches){\n\t\tvar map = new mapboxgl.Map({\n\t\t\tcontainer: 'map', // container ID\n\t\t\tstyle: 'mapbox://styles/mmorleyhl/cklwedd4f59wp17l9wfr2jwx5', // style ID\n\t\t\tcenter: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]\n\t\t\t// starting zoom\n\t\t\tzoom: 16,\n\t\t\tattributionControl: true,\n\t\t\tlogoEnabled: false\n\t\t});\n\t} else {\n\t\tvar map = new mapboxgl.Map({\n\t\t\tcontainer: 'map', // container ID\n\t\t\tstyle: 'mapbox://styles/mmorleyhl/cklwedd4f59wp17l9wfr2jwx5', // style ID\n\t\t\tcenter: [8.71157213340723, 50.11154494192954], // starting position [lng, lat]\n\t\t\t// starting zoom\n\t\t\tzoom: 15,\n\t\t\tattributionControl: true,\n\t\t\tlogoEnabled: false\n\t\t});\n\t};\n\t\n\t\n\t//disable zoom on map\n\tmap.scrollZoom.disable();\n\t\n\t//disable Mobile desktop behavoir\n\tif (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {\n\t\tmap.dragPan.disable();\n\t\t// map.scrollZoom.enable();\n\t\tconst isTouchEvent = e => e.originalEvent && \"touches\" in e.originalEvent;\n\t\tconst isTwoFingerTouch = e => e.originalEvent.touches.length >= 2;\n\t  \n\t\tmap.on(\"dragstart\", event => {\n\t\t  if (isTouchEvent(event) && !isTwoFingerTouch(event)) {\n\t\t\t map.dragPan.disable();\n\t\t  }\n\t\t});\n\t  \n\t\t// Drag events not emited after dragPan disabled, so I use touch event here\n\t\tmap.on(\"touchstart\", event => {\n\t\t\tif (isTouchEvent(event) && isTwoFingerTouch(event)) {\n\t\t\t map.dragPan.enable();\n\t\t  }\n\t\t});\n\t}\n\t// Add zoom and rotation controls to the map.\n\tmap.addControl(new mapboxgl.NavigationControl({\n\t\t// Hide rotation control.\n\t\tshowCompass: false\n\t}), 'bottom-left');\n\t\n\tmap.on('load', function () {\n\t\t// Add a GeoJSON source containing place coordinates and information.\n\t\tmap.addSource('places', {\n\t\t\t'type': 'geojson',\n\t\t\t'data': places,\n\t\t});\n\t\t \n\t\tplaces.features.forEach(function (feature) {\n\t\t\tvar symbol = feature.properties['icon'];\n\t\t\tconsole.log('symbol', symbol)\n\t\t\tvar layerID = 'poi-' + symbol;\n\t\t\tconsole.log('layerID', layerID)\n\t\t\n\t\t\t\n\t\n\t\t// Add a layer for this symbol type if it hasn't been added already.\n\t\t\tif (!map.getLayer(layerID)) {\n\t\t\t\tmap.addLayer({\n\t\t\t\t\t'id': layerID,\n\t\t\t\t\t'type': 'symbol',\n\t\t\t\t\t'source': 'places',\n\t\t\t\t\t\n\t\t\t\t\t'layout': {\n\t\t\t\t\t'icon-image': symbol,\n\t\t\t\t\t'icon-allow-overlap': true,\n\t\t\t\t\t// \"icon-offset\": [\n\t\t\t\t\t// \t\"case\",\n\t\t\t\t\t// \t[\"==\", [\"get\", \"icon\"], \"cafe-15\"],\n\t\t\t\t\t// \t[\"literal\", [5, -19]],\n\t\t\t\t\t// \t[\"literal\", [0, 0]]\n\t\t\t\t\t//   ]\n\t\t\t\t\t},\n\t\t\t\t\t'filter': ['==', 'icon', symbol]\n\t\t\t\t});\n\t\n\t\t\t\t// Change icon size on zoom\n\t\t\t\t// map.on('zoom', () => {\n\t\t\t\t//     const scalePercent = 1 + (map.getZoom() - 8)  * 0.4;\n\t\t\t\t//     const svgElement = symbol.getElement().children[0];\n\t\t\t\t//     svgElement.style.transform = `scale(${scalePercent})`;\n\t\t\t\t//     svgElement.style.transformOrigin = 'bottom';\n\t\t\t\t// });\n\t\t\t\t\n\t\t\t\t// Add checkbox and label elements for the layer.\n\t\t\t\tvar input = document.createElement('input');\n\t\t\t\tinput.type = 'checkbox';\n\t\t\t\tinput.id = layerID;\n\t\t\t\tinput.checked = true;\n\t\t\t\tfilterGroup.appendChild(input);\n\t\t\t\n\t\t\t\tvar label = document.createElement('label');\n\t\t\t\tlabel.setAttribute('for', layerID);\n\t\t\t\tlabel.textContent = symbol;\n\t\t\t\tfilterGroup.appendChild(label);\n\t\t\t\n\t\t\t// When the checkbox changes, update the visibility of the layer.\n\t\t\t\tinput.addEventListener('change', function (e) {\n\t\t\t\t\tmap.setLayoutProperty(\n\t\t\t\t\t\tlayerID,\n\t\t\t\t\t\t'visibility',\n\t\t\t\t\t\te.target.checked ? 'visible' : 'none'\n\t\t\t\t\t);\n\t\t\t\t});\n\t\n\t\t\t\tmap.on('click', layerID, function (e) {\n\t\t\t\t\tvar coordinates = e.features[0].geometry.coordinates.slice();\n\t\t\t\t\tvar description = e.features[0].properties.description;\n\t\t\t\t\t \n\t\t\t\t\t// Ensure that if the map is zoomed out such that multiple\n\t\t\t\t\t// copies of the feature are visible, the popup appears\n\t\t\t\t\t// over the copy being pointed to.\n\t\t\t\t\twhile (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n\t\t\t\t\tcoordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n\t\t\t\t\t}\n\t\t\t\t\t \n\t\t\t\t\tnew mapboxgl.Popup()\n\t\t\t\t\t.setLngLat(coordinates)\n\t\t\t\t\t.setHTML(description)\n\t\t\t\t\t.addTo(map);\n\t\t\t\t});\n\t\t\t\t\t \n\t\t\t\t\t// Change the cursor to a pointer when the mouse is over the places layer.\n\t\t\t\tmap.on('mouseenter', layerID, function () {\n\t\t\t\t\tmap.getCanvas().style.cursor = 'pointer';\n\t\t\t\t});\n\t\t\t\t\t \n\t\t\t\t\t// Change it back to a pointer when it leaves.\n\t\t\t\tmap.on('mouseleave', layerID, function () {\n\t\t\t\t\tmap.getCanvas().style.cursor = '';\n\t\t\t\t});\n\t\t\t}\n\t\t});\n\t\n\t\n\t});\n\t\n\tmap.on('click', 'places', function (e) {\n\t\tvar coordinates = e.features[0].geometry.coordinates.slice();\n\t\tvar description = e.features[0].properties.description;\n\t\t \n\t\t// Ensure that if the map is zoomed out such that multiple\n\t\t// copies of the feature are visible, the popup appears\n\t\t// over the copy being pointed to.\n\t\twhile (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {\n\t\t\tcoordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;\n\t\t}\n\t\t \n\t\tnew mapboxgl.Popup()\n\t\t.setLngLat(coordinates)\n\t\t.setHTML(description)\n\t\t.addTo(map);\n\t});\n\t\t \n\t// Change the cursor to a pointer when the mouse is over the places layer.\n\tmap.on('mouseenter', 'places', function () {\n\t\tmap.getCanvas().style.cursor = 'pointer';\n\t});\n\t\t\n\t// Change it back to a pointer when it leaves.\n\tmap.on('mouseleave', 'places', function () {\n\t\tmap.getCanvas().style.cursor = '';\n\t});\n })\n \n\n//# sourceURL=webpack://SITE/./src/assets/js/_mapbox.js?");

/***/ }),

/***/ "./src/assets/js/_scrollAnker.js":
/*!***************************************!*\
  !*** ./src/assets/js/_scrollAnker.js ***!
  \***************************************/
/***/ (function() {

eval("document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\n    anchor.addEventListener('click', function (e) {\n        e.preventDefault();\n\n        document.querySelector(this.getAttribute('href')).scrollIntoView({\n            behavior: 'smooth'\n        });\n    });\n});\n\n//# sourceURL=webpack://SITE/./src/assets/js/_scrollAnker.js?");

/***/ }),

/***/ "./src/assets/js/_toTopButton.js":
/*!***************************************!*\
  !*** ./src/assets/js/_toTopButton.js ***!
  \***************************************/
/***/ (function() {

eval("const elems = document.querySelectorAll('.to_top_button')\nconst a_test_spacing_value = document.querySelectorAll('.a-test-spacing__value')\nconsole.log('a-test-spacing__value', a_test_spacing_value)\n\nelems.forEach((elem) => {\n\telem.onclick = function(e) {\n\t\te.preventDefault()\n\n\t\twindow.scrollTo({\n\t\t\ttop: 0,\n\t\t\tbehavior: 'smooth'\n\t\t})\n\t}\n})\nconst buttonElems = document.querySelectorAll('.button_test')\n\nwindow.onscroll = (e) => {\n\tif(a_test_spacing_value) {\n\t\ta_test_spacing_value.forEach((elem) => {\n\t\t\tconsole.log('window.pageYOffset', window.pageYOffset)\n\t\t\t// elem.style.transform = `translate(0px, -${window.pageYOffset}px)`;\n\t\t\telem.style.margin = `-${window.pageYOffset}px 0px 0px 0px`;\n\t\t})\n\t}\n\t// console.log(window.pageYOffset)\n\tif (window.pageYOffset > \"650\") {\n\t\t// console.log('button scroll 650 plus')\n\t\tbuttonElems.forEach((elem) => {\n\t\t\t// console.log(\"button\", elem )\n\t\t\telem.classList.remove(\"button_test--hide\");\n\t\t})\n\t} else {\n\t\tconsole.log('button scroll 650 minus')\n\t\tbuttonElems.forEach((elem) => {\n\t\t\t// console.log(\"button\", elem )\n\t\t\telem.classList.add(\"button_test--hide\");\n\t\t})\n\t}\n}\n\n//# sourceURL=webpack://SITE/./src/assets/js/_toTopButton.js?");

/***/ }),

/***/ "./src/assets/js/_wow.js":
/*!*******************************!*\
  !*** ./src/assets/js/_wow.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const WOW = __webpack_require__(/*! wow.js */ \"./node_modules/wow.js/dist/wow.js\");\n\nconst wow = new WOW(\n\t{\n\t  animateClass: 'animated',\n\t  offset:       100,\n\t  mobile:       true,\n\t  callback:     function(box) {\n\t\tconsole.log(\"WOW: animating <\" + box.tagName.toLowerCase() + \">\")\n\t  }\n\t}\n  );\n  wow.init();\n\n//# sourceURL=webpack://SITE/./src/assets/js/_wow.js?");

/***/ }),

/***/ "./src/assets/js/index.js":
/*!********************************!*\
  !*** ./src/assets/js/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/index.scss */ \"./src/assets/css/index.scss\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_cursor.js */ \"./src/assets/js/_cursor.js\");\n/* harmony import */ var _cursor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cursor_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_header.js */ \"./src/assets/js/_header.js\");\n/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mapbox_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_mapbox.js */ \"./src/assets/js/_mapbox.js\");\n/* harmony import */ var _mapbox_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mapbox_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_color_switch.js */ \"./src/assets/js/_color_switch.js\");\n/* harmony import */ var _color_switch_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_color_switch_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _wow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_wow.js */ \"./src/assets/js/_wow.js\");\n/* harmony import */ var _wow_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wow_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _scrollAnker_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_scrollAnker.js */ \"./src/assets/js/_scrollAnker.js\");\n/* harmony import */ var _scrollAnker_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scrollAnker_js__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_carousel.js */ \"./src/assets/js/_carousel.js\");\n/* harmony import */ var _toTopButton_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_toTopButton.js */ \"./src/assets/js/_toTopButton.js\");\n/* harmony import */ var _toTopButton_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_toTopButton_js__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _headroom_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_headroom.js */ \"./src/assets/js/_headroom.js\");\n/* harmony import */ var _headroom_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_headroom_js__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _dots_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_dots.js */ \"./src/assets/js/_dots.js\");\n/* harmony import */ var _a_test_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_a-test.js */ \"./src/assets/js/_a-test.js\");\n/* harmony import */ var _a_test_solo_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_a-test-solo.js */ \"./src/assets/js/_a-test-solo.js\");\n/* harmony import */ var _a_test_solo_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_a_test_solo_js__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _h_test_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_h-test.js */ \"./src/assets/js/_h-test.js\");\n/* harmony import */ var _h_test_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_h_test_js__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _a_test_paralax_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./_a-test-paralax.js */ \"./src/assets/js/_a-test-paralax.js\");\n/* harmony import */ var _a_3d_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_a-3d-test.js */ \"./src/assets/js/_a-3d-test.js\");\n// import css for webpack\n\n// javscript imports\n\n// import './_test.js';\n\n\n\n\n\n\n\n\n// import './_scrollTrigger.js';\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://SITE/./src/assets/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = function() {}
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/assets/js/index.js","vendor"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = function() {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			var executeModules = data[3];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkSITE"] = self["webpackChunkSITE"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = function() {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (function() {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;