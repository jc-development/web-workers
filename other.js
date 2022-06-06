import createWorker from 'offscreen-canvas/create-worker'

const canvas = document.querySelector('canvas');

const worker = createWorker(canvas, './webgl-worker.js', e => {
  // Messages from the worker
  console.log({e})
})

const button = document.querySelector('button#can-vas')

button.addEventListener('click', () => {
  worker.post({ message: 'update' })
})