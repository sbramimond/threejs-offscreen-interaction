import * as THREE from 'three';

import eventHandler from '@/render/aqua/event/eventHandler';
import getRender from '@/render/create/render';

import * as Test from '@/render/test';

declare interface Iaqua {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    update(data: any): void;
}

export default class Aqua implements Iaqua {
    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;
    canvas: HTMLCanvasElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;

        this.init();
    }

    init(): void {
        let {renderer, scene, camera} = getRender(this.canvas);

        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;

        this.update();
    }

    update(data: Record<symbol, any> = {}): void {
        Test.cube(this);
        Test.lineBox(this);
    }

    dispatchEvent(event: string, x: number, y: number): void {
        eventHandler(event, x, y);
    }
}
