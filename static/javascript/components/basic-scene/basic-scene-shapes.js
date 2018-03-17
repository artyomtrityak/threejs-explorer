import React from "react";
import * as THREE from "three";

export default class TreeChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cube: null,
      scene: null,
      camera: null,
      initialized: false
    };
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    this.containerRef.appendChild(renderer.domElement);

    const cube = this.getCube();
    scene.add(cube);

    this.setState({
      scene,
      camera,
      renderer,
      cube,
      initialized: true
    });

    // Start animation loop
    this.animate();
  }

  getCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });

    return new THREE.Mesh(geometry, material);
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (!this.state.initialized) {
      return;
    }
    const { cube, renderer, scene, camera } = this.state;

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  render() {
    return <div ref={r => (this.containerRef = r)} />;
  }
}
