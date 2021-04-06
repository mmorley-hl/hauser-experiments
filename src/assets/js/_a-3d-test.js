// Option 1: Import the entire three.js core library.
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';


var a3dtest = document.querySelectorAll('.a3dtest')


a3dtest.forEach(() => {


   let container;
   var cube = null
   var timeline = null
   var percentage = 0
   var divContainer = document.querySelector('.a3dtest')
   var maxHeight = (divContainer.clientHeight || divContainer.offsetHeight) - window.innerHeight

   let camera, scene, renderer;
   
   let mouseX = 0, mouseY = 0;
   
   let windowHalfX = window.innerWidth / 2;
   let windowHalfY = window.innerHeight / 2;
   
   var object;
   let model;
   var car;
   var object_return;
   
   init();
   animate();
   
   function addCube () {
      cube = new THREE.Mesh( new THREE.BoxGeometry( 5, 250, 5 ), new THREE.MeshNormalMaterial() );
      cube.position.y = 5
      cube.position.z = -100
      scene.add(cube);
  }

  function addModel () {
        // manager
   
       function loadModel() {
   
          object.traverse( function ( child ) {
   
            if ( child.isMesh ) child.material.map = texture;
   
         } );
   
         object.position.y = - 195;
         model = object;
         // scene.add(model);
      }
   
      const manager = new THREE.LoadingManager( loadModel );
      console.log("manager", manager)
      
   
      manager.onProgress = function ( item, loaded, total ) {
   
         console.log( item, loaded, total );
   
      };
   
      // texture
   
      const textureLoader = new THREE.TextureLoader( manager );
      const texture = textureLoader.load( './assets/images/photography/black/Black_001.jpg' );
   
      // model
   
      function onProgress( xhr ) {
   
         if ( xhr.lengthComputable ) {
   
            const percentComplete = xhr.loaded / xhr.total * 100;
            console.log( 'model ' + Math.round( percentComplete, 2 ) + '% downloaded' );
   
         }
   
      }
   
      function onError() {}
   
      const loader = new OBJLoader( manager );
      loader.load( './assets/images/3d/A_011.obj', function ( obj ) {
   
         object = obj;
         model = object;
         console.log("model_test", model)
         console.log("obj_test", obj)
      }, onProgress, onError );
      
  }
   
   function init() {

 
   
      container = document.createElement( 'div' );
      document.body.appendChild( container );
   
      camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 2000 );
      camera.position.z = 250;
   
      // scene
   
      scene = new THREE.Scene();
   
      const ambientLight = new THREE.AmbientLight( 0xcccccc, 0.4 );
      scene.add( ambientLight );
   
      const pointLight = new THREE.PointLight( 0xffffff, 0.8 );
      camera.add( pointLight );
      scene.add( camera );
   
      var loader = new OBJLoader();

      // return a mesh from an obj file   
      function createObject( objFile, objName ) {
          var container = new THREE.Object3D();
          loader.load( objFile , function ( object ) {
              object.name = objName;
            //   container.add( object );
            //   scene.add(object);
            object.position.y = 5
            object.position.z = -100
            scene.add(object);
          })
          return container;
      }
      
      car = createObject('./assets/images/3d/A_011.obj', 'abc123');
      // car.position.y = 10;
      console.log("car", car)

   
      //
      
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio( window.devicePixelRatio );
      renderer.setSize( window.innerWidth, window.innerHeight );
      container.appendChild( renderer.domElement );
   
      document.addEventListener( 'mousemove', onDocumentMouseMove );
   
      //
   
      window.addEventListener( 'resize', onWindowResize );
      addModel()
      // addCube()
      initTimeline()
      console.log("car_inti", car)
      console.log("cube", cube)
      console.log("model", model)
   }
   
   function initTimeline() {
      console.log("car_timeline", car)
      timeline = anime.timeline({
        autoplay: false,
        duration: 4500,
        easing: 'easeOutSine'
      });
      timeline.add({
        targets: car.position,
        x: 100,
        y: 25,
        z: -50,
        duration: 2250,
        update: camera.updateProjectionMatrix()
      })
      timeline.add({
        targets: car.position,
        x: 0,
        y: 0,
        z: 50,
        duration: 2250,
        update: camera.updateProjectionMatrix()
      })
      var value = new THREE.Color(0xFFFCFC)
      var initial = new THREE.Color(0x161216)
      timeline.add({
        targets: initial,
        r: [initial.r, value.r],
        g: [initial.g, value.g],
        b: [initial.b, value.b],
        duration: 4500,
        update: () => {
          renderer.setClearColor(initial);
        }
      }, 0);
    }

    // window resize 
   function onWindowResize() {
   
      windowHalfX = window.innerWidth / 2;
      windowHalfY = window.innerHeight / 2;
   
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
   
      renderer.setSize( window.innerWidth, window.innerHeight );
   
   }
   
   // Mouse move change kamera psoition
   function onDocumentMouseMove( event ) {
   
      mouseX = ( event.clientX - windowHalfX );
      mouseY = ( event.clientY - windowHalfY );
   
   }
   
   function animate() {
   
      requestAnimationFrame( animate );
      render();
   
   }
   
   function render() {
   
      camera.position.x += ( mouseX - camera.position.x ) * .05;
      camera.position.y += ( - mouseY - camera.position.y ) * .05;
   
      camera.lookAt( scene.position );
      percentage = lerp(percentage, scrollY, .08);
      timeline.seek(percentage * (4500 / maxHeight))
      // animate the cube
      car.rotation.x += 0.01;
      car.rotation.y += 0.0125;
      car.rotation.z += 0.012;
      renderer.render( scene, camera );
   
   }

   // linear interpolation function
   function lerp(a, b, t) {
      return ((1 - t) * a + t * b);
   }
})


