let counter = 0;
const counterValueElement = document.getElementById("counterValue");

document.getElementById("counterButton").addEventListener("click", function () {
  counter++;
  counterValueElement.innerText = counter;
});

const sumWorker = new Worker("sum.worker.js");

document.getElementById("sumButton").addEventListener("click", function () {
  sumWorker.postMessage("calculateSum");
  /*
  let add = 0
  for (let i = 0; i < 5000000000; i++) {
  	add += i
  }
  const sumResultElement = document.getElementById('sumResult')
  sumResultElement.innerText = add
  */
});

sumWorker.onmessage = function (event) {
  const sumResultElement = document.getElementById("sumResult");
  sumResultElement.innerText = event.data;
};
