/* eslint-disable react/jsx-key */
import Paciente from "./Paciente";
import PropType from "prop-types";
// import { useEffect } from "react";
const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  // useEffect(() => {
  //   if (pacientes.length > 0) {
  //     console.log("Nuevo Paciente.");
  //   }
  // }, [pacientes]);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll">
      {pacientes.length && pacientes ? (
        <>
          <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
          <p className="text-center text-xl mb-10">
            <span className="text-lime-500">Administra</span> Pacientes y Citas
          </p>
          {pacientes.map((paciente) => (
            <Paciente
              paciente={paciente}
              key={paciente.id}
              setPaciente={setPaciente}
              eliminarPaciente={eliminarPaciente}
            />
          ))}{" "}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>
          <p className="text-center text-xl mb-10">
            <span className="text-lime-500">Ingresa</span> Nuevos Pacientes
          </p>
        </>
      )}
    </div>
  );
};

ListadoPacientes.propTypes = {
  pacientes: PropType.array.isRequired,
  setPaciente: PropType.func.isRequired,
  eliminarPaciente: PropType.func.isRequired,
};

export default ListadoPacientes;
