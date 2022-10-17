const Formulario = document.querySelector("#formulario");
const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
const matricula = document.querySelector("#matricula");
const errorNombre = document.querySelector("#errorNombre");
const errorMatricula = document.querySelector("#errorMatricula");
const btnSubmit = document.querySelector("#btnSubmit");

// Expresiones Regulares
const NombreExp = /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/;
const MatriculaExp = /^\d{4}-\d{4}$/;

// ErrorHandler
const errorField = {
  nombre : false,
  apellido : false,
  matricula : false
}

// Almacenamieto de estudiantes.
let listadoEstudiantes = [];

// Fn Validacion de campos
const FieldValidation = (field, evt, pattern) => {
  const errorMsg = field.nextElementSibling;
  const validation = pattern.test(evt.target.value);
  if (!validation) {
    field.classList.remove("border-green-600");
    field.classList.add("border-red-600");
    errorMsg.classList.remove("hidden");
    errorField[field]=true;
    // btnSubmit.disabled = true;
  } else {
    field.classList.remove("border-red-600");
    field.classList.add("border-green-600");
    errorMsg.classList.add("hidden");
    errorField[field]=false;
    // btnSubmit.disabled = false;
  }
};

// Eventos.
nombre.addEventListener("input", (evt) => FieldValidation(nombre, evt, NombreExp));
apellido.addEventListener("input", (evt) => FieldValidation(apellido, evt, NombreExp));
matricula.addEventListener("input", (evt) => FieldValidation(matricula, evt, MatriculaExp));

class Estudiante {
  constructor(nombre, matricula) {
    this.nombre = nombre;
    this.matricula = matricula;
  }
};

const agregarEstudiante = (Listado = [], nuevoEstudiante = {}) => {
  Listado.push(nuevoEstudiante);
  console.log(Listado);
};

Formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (matricula.value.trim() === "" || nombre.value.trim() === "") return;
  const nuevoEstudiante = new Estudiante(nombre.value, matricula.value);
  agregarEstudiante(listadoEstudiantes, nuevoEstudiante);
  nombre.value = "";
  matricula.value = "";
});
