if (localStorage.getItem("bajariladiganIshlar")) {
  let BrowserXotira = localStorage.getItem("bajariladiganIshlar");
  document.querySelector("#taskList").innerHTML = BrowserXotira;
}

function elementQosh(el) {
  document.querySelector("#taskInput").value = "";
  const li = document.createElement("li");
  li.classList = "task-item ";
  li.innerHTML = `${el} <button onclick='deleteItem(this)'> Delete </button> `;

  document.querySelector("#taskList").appendChild(li);
  let todoInfo = document.querySelector("#taskList").innerHTML;
  localStorage.setItem("bajariladiganIshlar", todoInfo);
}

function deleteItem(el) {
  el.parentElement.remove();
  let ekranQiymati = document.querySelector("#taskList").innerHTML;
  localStorage.setItem("bajariladiganIshlar", ekranQiymati);
}
