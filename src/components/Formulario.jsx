import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Error from "./Error";
const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //props es un objeto que contiene todos los props que se le pasan al componente
  //state es el estado del componente, tambien tiene un set state que es el que modifica el state
  const [nombre, setNombre] = useState(""); //Hook es el valor inicial del state, puede ponerse cualquier cosa
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);
  //   setCitas("Hola"); //esto modifica el state
  // Hook no puede ir dentro de un if, for, while, etc
  // Hook no se puede declarar despues de un return

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };

  //escucha cuando el state cambia, se le pasa un array con las variables que se quieren escuchar
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    } else {
      setNombre("");
      setPropietario("");
      setEmail("");
      setAlta("");
      setSintomas("");
    }
  }, [paciente]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //validar
    const input = [nombre, propietario, email, alta, sintomas];
    if (input.includes("")) {
      //includes busca si hay algun campo vacio
      console.log("Hay campos vacios");
      setError(true);
      return;
    }

    setError(false);
    const objetoPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
    };
    //agregar el objeto al state
    if (paciente.id) {
      objetoPaciente.id = paciente.id;
      // map recorre el array y retorna un nuevo array
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === objetoPaciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objetoPaciente.id = generarId();
      setPacientes([objetoPaciente, ...pacientes]);
    }
    // reiniciar el form
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
  };
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg  my-5 text-center">
        Añade Pacientes y <span className="text-lime-500">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit} //onSubmit es un evento que se ejecuta cuando se envia el formulario y este ejecuta una funcion
        className="bg-slate-800 shadow-md rounded-lg py-7 px-5 mb-5"
      >
        {error && <Error>Todos los campos son obligatorios.</Error>}
        <div className="mb-5">
          <label htmlFor="mascota" className="block mb-2 font-bold">
            Nombre Mascota
          </label>
          <input
            className="py-1 px-4 bg-transparent rounded-md w-full border-2"
            type="text"
            id="mascota"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //onChange es un evento que se ejecuta cuando cambia el valor del input y esta cambiando el valor del state
          />
        </div>
        <div className="mb-5">
          <label htmlFor="propietario" className="block mb-2 font-bold">
            Nombre Propietario
          </label>
          <input
            className="py-1 px-4 bg-transparent rounded-md w-full border-2"
            type="text"
            id="propietario"
            placeholder="Nombre del propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 font-bold">
            Email
          </label>
          <input
            className="py-1 px-4 bg-transparent rounded-md w-full border-2"
            type="email"
            id="email"
            placeholder="Email Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="alta" className="block mb-2 font-bold">
            Fecha Alta
          </label>
          <input
            className="py-1 px-4 bg-transparent rounded-md w-full border-2"
            type="date"
            id="alta"
            value={alta}
            onChange={(e) => setAlta(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="sintomas" className="block mb-2 font-bold">
            Sintomas
          </label>
          <textarea
            className="py-1 px-4 bg-transparent rounded-md w-full border-2"
            id="sintomas"
            cols="30"
            rows="10"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          ></textarea>
        </div>
        <input
          type="submit"
          className="text-white bg-lime-500 w-full uppercase font-bold py-2 px-4 rounded-md hover:bg-lime-600 cursor-pointer transition duration-300 ease-in-out"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

Formulario.propTypes = {
  pacientes: PropTypes.array.isRequired,
  paciente: PropTypes.object.isRequired,
  setPacientes: PropTypes.func.isRequired,
  setPaciente: PropTypes.func.isRequired,
};

export default Formulario;
