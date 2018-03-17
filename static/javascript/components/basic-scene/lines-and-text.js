import React from "react";
import * as THREE from "three";

export default class LinesAndTextsScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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

    this.setState({
      scene,
      camera,
      renderer,
      initialized: true
    });

    // Start animation loop
    this.animate();
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (!this.state.initialized) {
      return;
    }
    const { renderer, scene, camera } = this.state;
    renderer.render(scene, camera);
  }

  render() {
    return <div ref={r => (this.containerRef = r)} />;
  }
}
