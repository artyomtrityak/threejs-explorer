import React from "react";
import * as THREE from "three";

export default class BasicScene extends React.Component {
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
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    this.containerRef.appendChild(renderer.domElement);

    const cube = this.getCube();
    scene.add(cube);

    const line = this.getLine();
    scene.add(line);

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

  getLine() {
    const material = new THREE.LineBasicMaterial({ color: 0x0000FF });
    const geometry = new THREE.Geometry();
    geometry.vertices.push(new THREE.Vector3(-2, 0, 0));
    geometry.vertices.push(new THREE.Vector3(0, 2, 0));
    geometry.vertices.push(new THREE.Vector3(2, 0, 0));
    return new THREE.Line(geometry, material);
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
