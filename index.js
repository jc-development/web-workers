// const worker = new Worker("fetch-worker.js");
const worker = new Worker(new URL("./fetch-worker.js", import.meta.url));
const button = document.querySelector("button#fetch");
const result = document.querySelector("div");

worker.onmessage = function (event) {
  console.log("Message received from worker: ", event.data);
  let pEl = document.createElement("p");
  pEl.innerText = event.data;
  result.appendChild(pEl);
};

button.onclick = function () {
  console.log("clicked button");
  result.innerText = "";
  worker.postMessage("https://jsonplaceholder.typicode.com/todos");
};

function clickButton() {
  const button = document.querySelector("button");
  button.click();
}