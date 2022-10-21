const Formulario = document.querySelector('#formulario');
const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const matricula = document.querySelector('#matricula');
const calificacion = document.querySelector('#calificacion');
const errorNombre = document.querySelector('#errorNombre');
const errorMatricula = document.querySelector('#errorMatricula');
const btnSubmit = document.querySelector('#btnSubmit');

// Expresiones Regulares
const NombreExp = /^(([A-za-z]+[\s]{1}[A-za-z]+)|([A-Za-z]+))$/;
const MatriculaExp = /^\d{4}-\d{4}$/;
const CalificacinoExp = /^(([0-9][0-9]{0,1})|100)$/;

// ErrorHandler
const errorField = {
  nombre: false,
  apellido: false,
  matricula: false,
  calificacion: false,
};

// Almacenamieto de estudiantes.
let listadoEstudiantes = [];

// Fn Validacion de campos
const FieldValidation = (field, evt, pattern) => {
  const errorMsg = field.nextElementSibling;
  const validation = pattern.test(evt.target.value);

  if (!validation) {
    field.classList.remove('border-green-600');
    field.classList.add('border-red-600');
    errorMsg.classList.remove('hidden');
    errorField[field.name] = true;
  } else {
    field.classList.remove('border-red-600');
    field.classList.add('border-green-600');
    errorMsg.classList.add('hidden');
    errorField[field.name] = false;
  }
};

// Eventos.
nombre.addEventListener('input', (evt) =>
  FieldValidation(nombre, evt, NombreExp)
);
apellido.addEventListener('input', (evt) =>
  FieldValidation(apellido, evt, NombreExp)
);
matricula.addEventListener('input', (evt) =>
  FieldValidation(matricula, evt, MatriculaExp)
);

calificacion.addEventListener('input', (evt) =>
  FieldValidation(calificacion, evt, CalificacinoExp)
);

class Estudiante {
  constructor(nombre, apellido, matricula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.matricula = matricula;
  }
}

const agregarEstudiante = (Listado = [], nuevoEstudiante = {}) => {
  Listado.push(nuevoEstudiante);
  console.log(Listado);
};

Formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  if (
    matricula.value.trim() === '' ||
    nombre.value.trim() === '' ||
    apellido.value.trim() === ''
  ) {
    alert('Favor llenar todos los campos.');
    return;
  }

  if (
    errorField.nombre ||
    errorField.apellido ||
    errorField.matricula ||
    errorField.calificacion
  ) {
    alert('Favor revisar los campos');
    return;
  }

  const nuevoEstudiante = new Estudiante(
    nombre.value,
    apellido.value,
    matricula.value
  );

  agregarEstudiante(listadoEstudiantes, nuevoEstudiante);
  Formulario.reset();
});