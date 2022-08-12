import GlslCanvas from "glslCanvas";

window.addEventListener("load", () => {
  const appendCanvases = () => {
    const nodes = [];

    const canvasArray = [...document.querySelectorAll(".canvas-container")];
    canvasArray.forEach((canvas) => {
      const node = document.createElement("canvas");
      canvas.appendChild(node);
      nodes.push(node);
    });

    return nodes;
  };

  const createGlslCanvases = (canvasArray) => {
    const canvases = [];

    canvasArray.forEach((canvas) => {
      const sandbox = new GlslCanvas(canvas);
      canvases.push(sandbox);
    });
    return canvases;
  };

  const canvasList = appendCanvases();
  const glslCanvasList = createGlslCanvases(canvasList);
  console.log(glslCanvasList);
});
