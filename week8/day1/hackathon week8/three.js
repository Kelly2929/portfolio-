const loader = new THREE.ObjectLoader();

loader.load(
	// resource URL
	"models/json/example.json",

	// onLoad callback
	// Here the loaded data is assumed to be an object
	function ( obj ) {
		// Add the loaded object to the scene
		scene.add( obj );
	},

	// onProgress callback
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},

	// onError callback
	function ( err ) {
		console.error( 'An error happened' );
	}
);


// Alternatively, to parse a previously loaded JSON structure
const object = loader.parse( a_json_object );

scene.add( object );