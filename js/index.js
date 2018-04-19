var inputVal  = document.querySelector("[data-action=input]"),
    outputVal = document.querySelector("[data-action=output]");

inputVal.onkeyup = function() {
  // outputVal.value = inputVal.value.toString().split("#").join("");
  outputVal.value = inputVal.value.toString().replace(/#/g, '')
};