const taskOutput = document.querySelector("#todo-list");
const taskInput = document.querySelector("#user-input");
const submitBtn = document.querySelector("#btn-submit");

function submitForm() {
  if (taskInput.value !== "") {
    var text = taskInput.value;
    createTask(text);
    taskInput.value = "";
  } else {
    alert("Enter a task first.");
  }
}

function createTask(task) {
  var checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  var p = document.createElement("p");
  p.innerHTML = task;

  var delBtn = document.createElement("button");
  delBtn.innerHTML = "X";

  var div = document.createElement("div");
  div.append(checkBox, p);

  var li = document.createElement("li");
  li.append(div, delBtn);

  taskOutput.appendChild(li);

  checkBox.addEventListener("change", (event) => {
    if (event.currentTarget.checked) {
      p.style.textDecoration = "line-through";
      p.style.color = "#828282";
    } else {
      p.style.textDecoration = "none";
      p.style.color = "#000";
    }
  });

  deleteTask(delBtn, li);
}

function deleteTask(btn, target) {
  btn.addEventListener("click", () => {
    taskOutput.removeChild(target);
  });
}
