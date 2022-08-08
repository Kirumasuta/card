function draw_box(){
    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer({ alpha: true });

    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.setClearColor( 0xffffff,0);

    if(document.contains(document.getElementsByTagName('canvas')[0])){
        document.getElementsByTagName('canvas')[0].remove();
    }else{
        document.body.appendChild( renderer.domElement );
    }
    var geometry = new THREE.BoxGeometry( 2, 2, 2);

    var material = new THREE.MeshBasicMaterial( { color: 0xf4f347 } );

    var cube = new THREE.Mesh( geometry, material );

    scene.add( cube );

//cube.position.set(1,1);

    camera.position.z = 25;

    function render() {
        requestAnimationFrame( render );
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render( scene, camera );
    }
    render();
}

