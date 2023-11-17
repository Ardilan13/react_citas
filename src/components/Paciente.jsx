import PropTypes from "prop-types";
// import { useEffect } from "react";
const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { id, nombre, propietario, email, alta, sintomas } = paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Estas seguro de eliminar el paciente?");
    if (respuesta) {
      eliminarPaciente(id);
      setPaciente({});
    }
  };
  //escucha cuando el componente esta listo para usarse, se le pasa un array vacio
  // useEffect(() => {
  //   console.log("Componente listo.");
  // }, []);

  return (
    <div className="bg-slate-800 shadow-md rounded-lg py-7 px-5 m-3 font-bold">
      <p className="">
        Nombre: <span className="font-normal">{nombre}</span>
      </p>
      <p className="">
        Propietario: <span className="font-normal">{propietario}</span>
      </p>
      <p className="">
        Email: <span className="font-normal">{email}</span>
      </p>
      <p className="">
        Fecha Alta: <span className="font-normal">{alta}</span>
      </p>
      <p className="">
        Sintomas: <span className="font-normal">{sintomas}</span>
      </p>

      <div>
        <button
          type="button"
          className="bg-lime-500 px-5 py-2 uppercase font-bold text-white rounded-lg mr-2"
          onClick={() => setPaciente(paciente)}
        >
          Editar
        </button>
        <button
          type="button"
          onClick={() => handleEliminar()}
          className="bg-red-600 px-5 py-2 uppercase font-bold text-white rounded-lg"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

Paciente.propTypes = {
  paciente: PropTypes.object.isRequired,
  setPaciente: PropTypes.func.isRequired,
  eliminarPaciente: PropTypes.func.isRequired,
};

export default Paciente;
