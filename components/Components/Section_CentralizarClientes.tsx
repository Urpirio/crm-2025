import Card_CentralizaClientes from "../Subcomponents/Card_CentralizaClientes";
import * as motion from "motion/react-client";

export default function Section_CentralizarClientes() {
  return (
    <section className="lg:px-30 py-10 flex flex-col gap-10 justify-center items-center border-2">
      <motion.h2
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="lg:text-5xl text-3xl font-semibold mb-4 w-[60%] min-w-80"
      >
        Centraliza tus clientes, potencia a tu equipo, impulsa tus ventas
      </motion.h2>
      <div className="flex flex-wrap  gap-5 lg:justify-between justify-center border ">
        <Card_CentralizaClientes />
      </div>
    </section>
  );
}
