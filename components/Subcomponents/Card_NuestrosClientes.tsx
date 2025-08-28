import BackNuestrosClientes from "@/../public/Card_NuestrosClinetes.svg";
import Image from "next/image";
import * as motion from "motion/react-client";

export default function Card_NuestrosClientes() {
  return (
    <motion.article
      whileInView={{ opacity: 1, rotate: -10 }}
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 300 }}
      transition={{
        repeatDelay: 2,
        duration: 0.3,
        repeat: Infinity,
        ease: "linear",
      }}
      className="w-90  justify-center transition-all duration-300 items-center relative flex"
    >
      <Image
        className=" object-cover"
        src={BackNuestrosClientes}
        alt="Nuestros Clientes"
      />
      <div className="absolute w-full h-full flex flex-col gap-5  py-20 px-15 ">
        <p>
          {` "Desde que implementamos este CRM, nuestra eficiencia ha mejorado un
          40%. ¡Es una herramienta imprescindible para nuestro equipo!"`}
        </p>
        <h3>- Flex Lab</h3>
      </div>
    </motion.article>
  );
}
