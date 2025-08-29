import BackNuestrosClientes from "@/../public/Card_NuestrosClinetes.svg";
import Image from "next/image";
import * as motion from "motion/react-client";
import { Data_CardNuestrosClientes } from "../Data/Data_CardNuestrosClientes";

export default function Card_NuestrosClientes() {
  const Cards = Data_CardNuestrosClientes.map((client) => (
    <motion.article
      key={client.id}
      whileInView={{ opacity: 1, rotate: -10 }}
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 300 }}
      transition={{
        repeatDelay: 2,
        duration: 0.3,
        repeat: Infinity,
        ease: "linear",
      }}
      className="xl:w-90 w-80  justify-center transition-all duration-300 items-center relative flex"
    >
      <Image
        className=" h-full z-10 absolute w-full object-contain"
        src={BackNuestrosClientes}
        alt="Nuestros Clientes"
      />
      <div className=" w-full h-full flex z-20 flex-col gap-5  py-20 px-20 ">
        <p className="text-xs">
          {` ${client.opinion}`}
        </p>
        <h3>{client.client}</h3>
      </div>
    </motion.article>
  ));

  return <>{Cards}</>;
}
