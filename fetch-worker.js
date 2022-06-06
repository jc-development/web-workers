self.onmessage = function (e) {
  console.log("e in worker: ", e)

  fetch(e.data)
    .then(res => res.json())
    .then(json => callOther(json))

};

function callOther(array) {
  console.log("called other func in worker: ", array);
  array.forEach(element => {
    self.postMessage(element.title);
  });
}
