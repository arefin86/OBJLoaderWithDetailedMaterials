			var container, stats, loader;

			var camera, scene, renderer;

			var mesh, lightBall, geometry;


			var directionalLight, pointLight, ambientLight;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			var theta = 0.0;
			var alpha = 0.0;
			var r =100;
			var l = 5000;
			
			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );
				
				center = new THREE.Vector3(0,0,0);
				camera = new THREE.PerspectiveCamera (45, window.innerWidth/window.innerHeight, 1, 10000);
				camera.position.set(0,10,10);
				camera.lookAt(center);
				

				scene = new THREE.Scene();

				// LIGHTS

				ambientLight = new THREE.AmbientLight( 0x111111 );
				//scene.add( ambientLight );

				pointLight = new THREE.PointLight( 0xffffff );
				pointLight.position.z = 10000;
				pointLight.distance = 4000;
				//scene.add( pointLight );

				pointLight2 = new THREE.PointLight( 0xffffff );
				pointLight2.position.z = 1000;
				pointLight2.distance = 2000;
				//scene.add( pointLight2 );

				pointLight3 = new THREE.PointLight( 0xffffff );
				//pointLight3.position.x = -1000;
				//pointLight3.position.z = 1000;
				pointLight3.distance = 1000;
				pointLight3.castShadow = true;
				pointLight3.position.set(0,10000,10000);
				scene.add( pointLight3 );

				directionalLight = new THREE.SpotLight( 0xffffff );
				directionalLight.position.set( 1000, 500, 1000 );
				directionalLight.castShadow = true;
				directionalLight.lookAt(0,0,0);
				//scene.add( directionalLight );

				directionalLight2 = new THREE.DirectionalLight( 0xffffff, 0 );
				directionalLight2.position.set( -1, 1, 0.5 ).normalize();
				//scene.add( directionalLight2 );

				directionalLight3 = new THREE.DirectionalLight( 0xffffff );
				directionalLight3.position.set( -1, 1, 0.5 ).normalize();
				//scene.add( directionalLight3 );


			


				
				var material = new THREE.MeshFaceMaterial();
				material.lightsEnabled - true;
				
			
				

				//

				loader = new THREE.BinaryLoader( true );
				document.body.appendChild( loader.statusDomElement );

				loader.load( { model: "../models/ferrari.js", callback: function( geometry ) { createScene( geometry, material ) } } );
				loader.load( { model: "../models/teapot.js", callback: function( geometry ) { createScene( geometry, material ) } } );
				
				lightBall = new THREE.Mesh(new THREE.SphereGeometry(3,20,20), new THREE.MeshBasicMaterial({color: 0xfff001}));
				scene.add(lightBall);
				lightBall.position.set(l,l,l);
				//

				renderer = new THREE.WebGLRenderer( { maxLights: 8 } );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );

				//

				//renderer.shadowCameraFov = 70;
				//renderer.shadowMapBias = 0.0039;

				//renderer.shadowMapEnabled = true;
				//renderer.shadowMapSoft = true;


				//

				

			}

			function createScene( geometry, material ) {


				mesh1 = new THREE.Mesh( geometry, material );
				mesh1.scale.set(0.01,0.01,0.01);
				mesh1.position.x = 0;
				mesh1.position.y = 0;
				mesh1.position.z = 0;
				
				mesh1.scale.set(1,1,1);
				
				mesh1.castShadow = true;
				mesh1.receiveShadow = true;
				scene.add( mesh1 );

				loader.statusDomElement.style.display = "none";

			}
			
			
			function cameraRevolve(camera){
		
				this.camera = camera;
				camera.lookAt(center);
				camera.position.x = r*Math.cos(theta);
				camera.position.y = r*Math.sin(theta/4);
				camera.position.z = r*Math.sin(theta);
				
				theta +=0.01;
				//if (theta > (Math.PI)*2) {theta = 0;}
				}
				
				function rotateLight(light, lightBall){
				
				this.light = light;
				this.lightBall = lightBall;
				light.position.set(200*Math.cos(alpha),200*Math.sin(alpha/4),200*Math.sin(alpha));
				lightBall.position= light.position;
				//console.log(lightBall.position);
				alpha+=0.05;
				
				}
			//

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {
				
				cameraRevolve(camera);
				rotateLight(pointLight3, lightBall );
				renderer.render( scene, camera );

			}
			