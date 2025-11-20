import * as Three from 'three';

// interface ICameraData {
//     position: number[];
//     rotation: number[];
// }
const THREE_CHANNEL = new BroadcastChannel('THREE:threeChannel');

let camera = null;

const CREATE_RENDER = (canvas) => {
    const { width, height } = canvas;
    const SCENE = new Three.Scene();
    camera = new Three.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 0, 100);

    const RENDERER = new Three.WebGLRenderer({ antialias: true, canvas });

    RENDERER.setAnimationLoop(animate);
    RENDERER.setPixelRatio(2);

    const GEOMETRY = new Three.BoxGeometry(1, 1, 1);
    const MATERIAL = new Three.MeshBasicMaterial({ color: 0x00ff00 });
    const CUBE = new Three.Mesh(GEOMETRY, MATERIAL);

    SCENE.add(CUBE);

    camera.position.z = 5;

    function animate() {
        CUBE.rotation.x += 0.01;
        CUBE.rotation.y += 0.01;
        RENDERER.render(SCENE, camera);
    }
};

self.onmessage = ({ data: { canvas = null } }) => {
    if (canvas) {
        CREATE_RENDER(canvas);
    }
};

THREE_CHANNEL.onmessage = ({ data: { type = '', data = {} } }) => {
    if (type === 'cameraUpdate') {
        const { position = [], rotation = [] } = data;

        camera.position.fromArray(position);
        camera.rotation.fromArray(rotation);
    }
};
