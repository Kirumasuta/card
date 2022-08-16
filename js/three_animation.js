var scene = new THREE.Scene();
var speed = 0.02;
var camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000 );
camera.position.z = 25;
var renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

renderer.setClearColor( 0xffffff,0);
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    // this function need to run every time to do a change on the camera
    camera.updateProjectionMatrix();
});

const cube = new THREE.BoxGeometry(2,2,2);
const material_cube = new THREE.MeshBasicMaterial( { color: 0xf4f347} );
const mesh_cube = new THREE.Mesh(cube,material_cube);
scene.add( mesh_cube );

const light = new THREE.PointLight(0xffffff, 1, 500);
light.position.set(10, 0, 25);
scene.add(light);

function render() {
    requestAnimationFrame( render );
    mesh_cube.rotation.x += speed;
    mesh_cube.rotation.y += speed;
    renderer.render( scene, camera );
}
render();