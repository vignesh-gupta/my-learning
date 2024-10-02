import * as THREE from "three";
import * as dat from "lil-gui";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Scene, Camera
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  65,
  window.innerWidth / window.innerHeight
);
camera.position.set(0, 3, 5);
scene.add(camera);

// Lighting
const directionalLight = new THREE.DirectionalLight(0xffffff, 1); // DirectionalLight is a light that gets emitted in a specific direction
directionalLight.position.set(5, 10, 7.5); // x, y, z
scene.add(directionalLight);

const ambient = new THREE.AmbientLight(0x404040); // soft white light - AmbientLight is uniform light all over the scene
scene.add(ambient);

const pointLight = new THREE.PointLight(0xffffff, 30, 1000); // PointLight is a light that gets emitted from a single point in all directions
pointLight.position.set(0, 6, 0);
scene.add(pointLight);

// Light Helper
// const directionalLightHelper = new THREE.DirectionalLightHelper(
//   directionalLight,
//   5
// );
// scene.add(directionalLightHelper);

// const pointLightHelper = new THREE.PointLightHelper(pointLight, 5);
// scene.add(pointLightHelper);

// Texture loader
// const textureLoader = new THREE.TextureLoader();

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
// const geometry = new THREE.CylinderGeometry(1, 1, 2, 10, 10);
// const material = new THREE.MeshStandardMaterial({
//   map: textureLoader.load("./textures/color.jpg"),
//   roughnessMap: textureLoader.load("./textures/roughness.jpg"),
//   normalMap: textureLoader.load("./textures/normal.png"),
//   displacementMap: textureLoader.load("./textures/height.png"),
//   displacementScale: 0.001,
// });
// const cylinder = new THREE.Mesh(geometry, material);
// scene.add(cylinder);

// Load scene from HDRIs'
const rgbeLoader = new RGBELoader();
rgbeLoader.load("/lilienstein_1k.hdr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.background = texture;
  scene.environment = texture;
});

// Load GLTF model
let gltfModel;
const gltfLoader = new GLTFLoader();
gltfLoader.load("/wooden_bag.glb", (gltf) => {
  gltfModel = gltf.scene;
  gltf.scene.position.set(0, -5, -30);
  scene.add(gltf.scene);
});

// Renderer
const canvas = document.querySelector("canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;
renderer.outputEncoding = THREE.sRGBEncoding;

renderer.render(scene, camera);

// Controls - for camera movement
const controls = new OrbitControls(camera, renderer.domElement);
controls.dampingFactor = 0.01; // Inertia of the camera movement and lower the value, the slower the camera movement
controls.enableDamping = true;
// controls.autoRotate = true;

// const clock = new THREE.Clock(); // Clock is used to get the time elapsed since the page loaded

// Animation Loop
function animate() {
  requestAnimationFrame(animate);
  controls.update();

  if (gltfModel) {
    gltfModel.rotation.y += 0.01;
  }

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

// Lil GUI
const gui = new dat.GUI();

// Material settings
// const materialFolder = gui.addFolder("Material");
// materialFolder.add(material, "roughness", 0, 1).name("Roughness");
// materialFolder.add(material, "metalness", 0, 1).name("Metalness");
// materialFolder.addColor(material, "color").name("Color");
// materialFolder.open();

// Mesh settings
// const meshFolder = gui.addFolder("Mesh");
// meshFolder.add(cylinder.position, "x", -3, 3).name("Position X");
// meshFolder.add(cylinder.position, "y", -3, 3).name("Position Y");
// meshFolder.add(cylinder.position, "z", -3, 3).name("Position Z");
// meshFolder.add(cylinder.rotation, "x", -Math.PI, Math.PI).name("Rotation X");
// meshFolder.add(cylinder.rotation, "y", -Math.PI, Math.PI).name("Rotation Y");
// meshFolder.add(cylinder.rotation, "z", -Math.PI, Math.PI).name("Rotation Z");

// Light settings
const directionalLightFolder = gui.addFolder("Directional Light");
directionalLightFolder
  .add(directionalLight.position, "x", -10, 10)
  .name("Directional X");
directionalLightFolder
  .add(directionalLight.position, "y", -10, 10)
  .name("Directional Y");
directionalLightFolder
  .add(directionalLight.position, "z", -10, 10)
  .name("Directional Z");
directionalLightFolder
  .add(directionalLight, "intensity", 0, 10)
  .name("Directional Intensity");
directionalLightFolder
  .addColor(directionalLight, "color")
  .name("Directional Color");

const pointLightFolder = gui.addFolder("Point Light");
pointLightFolder.add(pointLight.position, "x", -10, 10).name("Point X");
pointLightFolder.add(pointLight.position, "y", -10, 10).name("Point Y");
pointLightFolder.add(pointLight.position, "z", -10, 10).name("Point Z");
pointLightFolder.add(pointLight, "intensity", 0, 100).name("Point Intensity");
pointLightFolder.addColor(pointLight, "color").name("Point Color");
