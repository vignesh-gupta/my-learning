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
const geometry = new THREE.CylinderGeometry(1, 1, 2, 10, 10, true, 0, Math.PI );
const material = new THREE.MeshBasicMaterial({
  color: 0xffff00,
  side: THREE.DoubleSide,
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
