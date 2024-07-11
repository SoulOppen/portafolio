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

let proyectos = [
  {
    id: 1,
    url: "https://example.com/proyecto1",
    img: "https://example.com/img/proyecto1.jpg",
    title: "Sistema de Gestión de Biblioteca",
    description:
      "Desarrollo de un sistema para gestionar préstamos y devoluciones en una biblioteca.",
    habilidades: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
  },
  {
    id: 2,
    url: "https://example.com/proyecto2",
    img: "https://example.com/img/proyecto2.jpg",
    title: "Plataforma de E-commerce",
    description:
      "Creación de una plataforma de comercio electrónico para la venta de productos variados.",
    habilidades: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
  },
  {
    id: 3,
    url: "https://example.com/proyecto3",
    img: "https://example.com/img/proyecto3.jpg",
    title: "Red Social para Mascotas",
    description:
      "Diseño y desarrollo de una red social enfocada en mascotas y sus dueños.",
    habilidades: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
  },
  {
    id: 4,
    url: "https://example.com/proyecto4",
    img: "https://example.com/img/proyecto4.jpg",
    title: "Aplicación de Análisis de Datos",
    description:
      "Implementación de una aplicación para el análisis y visualización de datos estadísticos.",
    habilidades: ["Python", "R", "Postgresql"],
  },
  {
    id: 5,
    url: "https://example.com/proyecto5",
    img: "https://example.com/img/proyecto5.jpg",
    title: "Plataforma Educativa Online",
    description:
      "Desarrollo de una plataforma para la impartición de cursos y tutoriales en línea.",
    habilidades: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
  },
  {
    id: 6,
    url: "https://example.com/proyecto6",
    img: "https://example.com/img/proyecto6.jpg",
    title: "Blog Personalizado",
    description:
      "Creación de un blog con funcionalidades avanzadas de personalización y gestión de contenidos.",
    habilidades: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
  },
  {
    id: 7,
    url: "https://example.com/proyecto7",
    img: "https://example.com/img/proyecto7.jpg",
    title: "Aplicación de Gestión de Proyectos",
    description:
      "Desarrollo de una aplicación para la gestión eficiente de proyectos y tareas.",
    habilidades: ["Ruby", "Ruby on Rails", "Postgresql"],
  },
  {
    id: 8,
    url: "https://example.com/proyecto8",
    img: "https://example.com/img/proyecto8.jpg",
    title: "Plataforma de Streaming de Video",
    description:
      "Creación de una plataforma de streaming de video en tiempo real.",
    habilidades: ["HTML", "CSS", "Javascript", "Python", "Mysql"],
  },
  {
    id: 9,
    url: "https://example.com/proyecto9",
    img: "https://example.com/img/proyecto9.jpg",
    title: "Sistema de Reservas de Hotel",
    description:
      "Diseño y desarrollo de un sistema para la gestión de reservas en hoteles.",
    habilidades: ["HTML", "CSS", "Javascript", "PHP", "Mysql"],
  },
  {
    id: 10,
    url: "https://example.com/proyecto10",
    img: "https://example.com/img/proyecto10.jpg",
    title: "Plataforma de Aprendizaje Automático",
    description:
      "Implementación de una plataforma para el aprendizaje automático y la inteligencia artificial.",
    habilidades: ["Python", "R", "Postgresql"],
  },
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
  $mail.value = "";
  $area.value = "";
};
$enviar.addEventListener("click", (e) => send(e));
$confirmar.addEventListener("click", () => confirmar());
$log.addEventListener("click", () => logStatus());
document.addEventListener("DOMContentLoaded", addHabilidades);
