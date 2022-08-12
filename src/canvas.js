import GlslCanvas from "glslCanvas";
import { frag } from "./frag";
import image1 from "./assets/textures/image1.jpg";

window.addEventListener("load", () => {
  const createCanvases = () => {
    const canvases = [];

    const canvasArray = [...document.querySelectorAll(".canvas-container")];
    canvasArray.forEach((canvas) => {
      const node = document.createElement("canvas");
      canvas.appendChild(node);
      const sandbox = new GlslCanvas(node);
      sandbox.load(frag);
      sandbox.setUniform("image", image1);
      canvases.push(sandbox);
    });

    return canvases;
  };

  const glslCanvasArray = createCanvases();
});
