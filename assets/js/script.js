const $log = document.getElementById("log");
const $list = document.getElementById("list");
const $habilidades_list = document.getElementById("habilidades_list");
let habilidadesArray = [
  "HTML",
  "CSS",
  "Python",
  "Ruby",
  "Ruby on Rails",
  "Javascript",
  "PHP",
  "Mysql",
  "Postgresql",
  "R",
];
const logStatus = () => {
  if ($log.innerText === "Log In") {
    console.log($log.innerHTML);
    $log.innerText = "Log Out";
    $li = document.createElement("li");
    $li.innerHTML = '<a class="nav-link" href="#">Agregar</a>';
    $list.appendChild($li);
  } else {
    $log.innerText = "Log In";
    $list.lastElementChild.remove();
  }
};
const addHabilidades = () => {
  let add = habilidadesArray
    .map(
      (lang, index) =>
        `<li id="${index}-${lang}" class="list-group-item  color-contraste-fondo">${lang}</li>`
    )
    .join("");
  $habilidades_list.innerHTML = add;
};
$log.addEventListener("click", () => logStatus());
document.addEventListener("DOMContentLoaded", addHabilidades);
