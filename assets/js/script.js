$log = document.getElementById("log");
$list = document.getElementById("list");
const logStatus = () => {
  if ($log.innerText === "Log In") {
    console.log($log.innerHTML);
    $log.innerText = "Log Out";
    $li = document.createElement("li");
    $li.innerHTML = '<a class="nav-link" href="#">Add</a>';
    $list.appendChild($li);
  } else {
    $log.innerText = "Log In";
    $list.lastElementChild.remove();
  }
};
$log.addEventListener("click", () => logStatus());
