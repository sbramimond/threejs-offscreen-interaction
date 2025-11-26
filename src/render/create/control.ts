import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

export default function(camera: THREE.Camera, renderer: THREE.WebGLRenderer): OrbitControls | null {
    return new OrbitControls(camera, renderer.domElement);
};
