function clickPoop() {
  alert("Poop!");
}

function clickCngName() {
  var newUserName = prompt("Write your New Name!");
  if (newUserName === null) {
  } else if (newUserName === "") {
    alert("Please Write Something...");
    clickCngName();
  } else {
    changeName(newUserName);
    alert("Successfully Changed!");
  }
}

function clickClrTodos() {
  var answer = confirm("Really?");
  if (!answer) {
  } else {
    clearTodos();
    alert("Successfully Cleared!");
  }
}

function clickInitialize() {
  var answer = confirm("DATA CANNOT BE RECOVERED, Are You Sure?");
  if (!answer) {
  } else {
    clearAll();
    alert("Successfully Initialized!");
  }
}
