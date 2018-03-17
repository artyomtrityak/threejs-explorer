import React from "react";
import * as THREE from "three";
import fontData from "three/examples/fonts/helvetiker_regular.typeface.json";

export default class LinesAndTextsScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: null,
      camera: null,
      line: null,
      initialized: false
    };
    this.animate = this.animate.bind(this);
  }

  componentDidMount() {
    const width = window.innerWidth;
    const height = 600;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(10, 10, 70);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);

    const text1 = this.getText1();
    scene.add(text1);

    this.setState({
      scene,
      text1,
      camera,
      renderer,
      initialized: true
    });

    this.containerRef.appendChild(renderer.domElement);
    // Start animation loop
    this.animate();
  }

  getText1() {
    const font = new THREE.Font(fontData);
    const geometry = new THREE.TextGeometry("Text 1", {
      font: font,
      size: 20,
      height: 4,
      curveSegments: 5
    });
    const material = new THREE.MeshBasicMaterial({ color: 0x00FF00 });

    return new THREE.Mesh(geometry, material);
  }

  animate() {
    requestAnimationFrame(this.animate);
    if (!this.state.initialized) {
      return;
    }
    const { renderer, scene, camera, text1 } = this.state;

    text1.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  render() {
    return <div ref={r => (this.containerRef = r)} />;
  }
}
