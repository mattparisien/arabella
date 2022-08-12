import GlslCanvas from "glslCanvas";

window.addEventListener("load", () => {
  const createCanvases = () => {
    const canvases = [];

    const canvasArray = [...document.querySelectorAll(".canvas-container")];
    canvasArray.forEach((canvas) => {
      const node = document.createElement("canvas");
      canvas.appendChild(node);
      const sandbox = new GlslCanvas(node);
      canvases.push(sandbox);
    });

    return canvases;
  };

  const glslCanvasArray = createCanvases();
});
