let result = document.getElementById("result");
let cal = document.getElementById("cal");
let status = "";

function edit(elem) {
  if (result.value === "0"){
    result.value = elem.value;
  }else {
    result.value = result.value + elem.value;
  }
  }

function calc() {
  result.value = new Function("return " + result.value)();
  status = "";
}

function reset() {
  result.value = "";
  status = "";
}

function number() {
  status = "";
}

function enzan(){
  if (status == "calBtn"){
    result.value = result.value.slice(0, -1)
  }else {
  status = "calBtn";
  }
}