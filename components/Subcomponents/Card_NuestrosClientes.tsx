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
      className=" w-70  justify-center transition-all duration-300 items-center relative flex"
    >
      <Image
        className=" h-full z-10 absolute w-full object-contain"
        src={BackNuestrosClientes}
        alt="Nuestros Clientes"
      />
      <div className=" w-full h-full flex z-20 flex-col gap-5  pb-20 pt-30 px-15 ">
        <p className="text-xs">
          {` ${client.opinion}`}
        </p>
        <h3>{client.client}</h3>
      </div>
    </motion.article>
  ));

  return <>{Cards}</>;
}
