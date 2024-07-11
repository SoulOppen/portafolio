const $log = document.getElementById("log");
const $list = document.getElementById("list");
const $habilidades_list = document.getElementById("habilidades_list");
const $mail = document.getElementById("InputEmail");
const $area = document.getElementById("tArea");
const $confirmar = document.getElementById("confirmar");
const $enviar = document.getElementById("enviar");
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
    $log.innerText = "Log Out";
    let $li = document.createElement("li");
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
const confirmar = () => {
  const isChecked = $confirmar.checked;
  $enviar.disabled = !isChecked;
};
const send = (e) => {
  e.preventDefault();
  let datos = {
    email: $mail.value,
    consulta: $area.value,
  };
  console.log(datos);
};
$enviar.addEventListener("click", (e) => send(e));
$confirmar.addEventListener("click", () => confirmar());
$log.addEventListener("click", () => logStatus());
document.addEventListener("DOMContentLoaded", addHabilidades);
