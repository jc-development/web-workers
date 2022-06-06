import insideWorker from "offscreen-canvas/inside-worker";

const worker = insideWorker((e) => {
  if (e.data.canvas) {
    // Draw on the canvas
    console.log('there is a canvas in the webgl-worker: ', e.data.canvas)
  } else if (e.data.message === "move") {
    // Messages from main thread
  } else {
    console.log('um ok')
  }

  console.log({ worker });
});
