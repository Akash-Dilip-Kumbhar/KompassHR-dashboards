let leaves = JSON.parse(localStorage.getItem("leaves")) || [];
document.getElementById("leaveCount").innerText = leaves.length;

let punch = localStorage.getItem("punchIn");
if(punch){
  document.getElementById("lastPunch").innerText = punch;
}
