import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {
  //primero va las funciones y demas, antes del return
  // const sumar = (a, b) => {
  //   return a + b;
  // };
  //Luego va el return de ultimo, este debe tener apertura y cierre obligatoriamente
  const localStoragePacientes =
    JSON.parse(localStorage.getItem("pacientes")) ?? [];
  const [pacientes, setPacientes] = useState(localStoragePacientes);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
  }, [pacientes]);

  //elimnar paciente por id
  const eliminarPaciente = (id) => {
    const nuevosPacientes = pacientes.filter((paciente) => paciente.id !== id);
    setPacientes(nuevosPacientes);
  };
  // Los props son los valores que se pasan de un componente a otro, de un padre a un hijo
  return (
    <div className="container mx-auto my-0">
      <Header />
      <div className="md:flex mt-12 mx-4">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      {/* <p>Suma: {sumar(1, 5)}</p> */}
    </div>
  );
  // para poner js dentro del return se usa { }
}

export default App;
