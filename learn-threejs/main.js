import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// Scene, Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 5;
scene.add(camera);

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // DirectionalLight is a light that gets emitted in a specific direction
directionalLight.position.set(5, 10, 7.5); // x, y, z
scene.add(directionalLight);

const ambient = new THREE.AmbientLight(0x404040); // soft white light - AmbientLight is uniform light all over the scene
scene.add(ambient);

const pointLight = new THREE.PointLight(0xff0000, 1, 100); // PointLight is a light that gets emitted from a single point in all directions
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// Light Helper
const directionalLightHelper = new THREE.DirectionalLightHelper(
  directionalLight,
  5
);
scene.add(directionalLightHelper);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 5);
scene.add(pointLightHelper);

// Texture loader
const textureLoader = new THREE.TextureLoader();

// const ambientLightHelper = new THREE.AmbientLightHelper( ambient, 5 );
// scene.add( ambientLightHelper );

// Cube - BoxGeometry
// const box = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: "red" });
// const cube = new THREE.Mesh(box, material);
// scene.add(cube);

// Sphere - SphereGeometry
// const geometry = new THREE.SphereGeometry(1, 10, 10); // radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength
// // phiStart - the angle to start the sphere in the x-z plane
// // phiLength - the angle to sweep the sphere out of the x-z plane
// // thetaStart - the angle to start the sphere in the y-z plane
// // thetaLength - the angle to sweep the sphere out of the y-z plane

// const material = new THREE.MeshBasicMaterial({
//   color: 0xffff00,
//   wireframe: true,
// });
// const sphere = new THREE.Mesh(geometry, material);
// scene.add(sphere);

// Cylinder - CylinderGeometry
const geometry = new THREE.CylinderGeometry(1, 1, 2, 10, 10);
const material = new THREE.MeshStandardMaterial({
  map: textureLoader.load("./textures/color.jpg"),
  roughnessMap: textureLoader.load("./textures/roughness.jpg"),
  normalMap: textureLoader.load("./textures/normal.png"),
  displacementMap: textureLoader.load("./textures/height.png"),
  displacementScale: 0.001,
});
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

// Renderer
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

renderer.render(scene, camera);

// Controls - for camera movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.dampingFactor = 0.01; // Inertia of the camera movement and lower the value, the slower the camera movement
controls.enableDamping = true;
controls.autoRotate = true;

// const clock = new THREE.Clock(); // Clock is used to get the time elapsed since the page loaded

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();

  // cube.rotation.x = clock.getElapsedTime();
  // cube.rotation.y = clock.getElapsedTime();

  renderer.render(scene, camera);
}

animate();

// Resize Event - for responsive design
window.addEventListener("resize", () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
});
