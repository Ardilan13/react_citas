import PropType from "prop-types";
const Error = ({ children }) => {
  //children es el contenido que se pasa entre las etiquetas del componente
  return (
    <div className="bg-red-600 text-white text-center font-bold rounded-md uppercase py-2 mb-5">
      <p>{children}</p>
    </div>
  );
};

Error.propTypes = {
  children: PropType.string.isRequired,
};

export default Error;
