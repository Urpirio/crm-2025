import Card_CentralizaClientes from "../Subcomponents/Card_CentralizaClientes";
import * as motion from "motion/react-client";

export default function Section_CentralizarClientes() {
  return (
    <section className="px-30 py-10 flex flex-col gap-10 ">
      <motion.h2
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0 }}
        className="text-5xl font-semibold mb-4 w-[60%]"
      >
        Centraliza tus clientes, potencia a tu equipo, impulsa tus ventas
      </motion.h2>
      <div className="flex   gap-5 justify-between ">
        <Card_CentralizaClientes />
      </div>
    </section>
  );
}
