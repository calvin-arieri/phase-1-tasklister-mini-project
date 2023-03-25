document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const button = document.getElementsByTagName('input')[1]

  button.onclick = function(){
    let newTask =document.getElementById("new-task-description").value;

    document.getElementById("tasks").innerHTML +=
    ' <li> ${newTask}  <button id="clearTask" >x<button> </li>';
    let done = document.getElementById("clear");

    for (let i = 0; i < done; i++){
      done[i].parentNode.style.removeElement()
    }
  }
}

);
