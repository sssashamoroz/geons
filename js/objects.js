const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight); //Set the size of the window
renderer.setPixelRatio(window.devicePixelRatio); //Set Resoltuion of the Render

//resize the window and re-render when viewport changes.
window.addEventListener('resize', function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
});



renderer.setClearColor("#FFFFFF")
document.body.appendChild( renderer.domElement );

const geometry_rect = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial( { color: 0xFFFFFF} );
const cube = new THREE.Mesh( geometry_rect, material );

const geometry_tri = new THREE.TetrahedronGeometry(0.8, 0);
const triangle = new THREE.Mesh( geometry_tri, material);

const geometry_sphere = new THREE.SphereGeometry(0.6, 50, 50);
const sphere = new THREE.Mesh(geometry_sphere, material);


scene.add( cube );
cube.position.set(-3, 0.5, 0);

scene.add( triangle );
triangle.position.set(3, 0.5, 0);

scene.add( sphere );
sphere.position.set(0, 0.5, 0);



const light = new THREE.PointLight(0xFFFFFF, 1, 500);
light.position.set(0, 8, 10);
scene.add( light );

camera.position.z = 5;




function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.005;
    cube.rotation.y += 0.0005;

    triangle.rotation.x -= 0.005;
    triangle.rotation.y -= 0.0005;

    renderer.render( scene, camera );
};

function moveLight(){

    const scroll_pos = document.body.getBoundingClientRect().top;

    light.position.y = (scroll_pos * 0.08)+8;
    camera.position.y = scroll_pos * 0.005;

    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.position.y = (scroll_pos * -0.005)+0.5;


    triangle.rotation.x -= 0.01;
    triangle.rotation.y -= 0.01;
    triangle.position.y = (scroll_pos * -0.003)+0.5;
}

document.body.onscroll = moveLight;

animate();