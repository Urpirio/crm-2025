import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import * as motion from "motion/react-client";

export default function SubSection_PrimerPaso() {
  return (
    <motion.div
      whileInView={{ opacity: 1, translateX: 0 }}
      initial={{ opacity: 0, translateX: -200 }}
      className="flex w-1/3 flex-col gap-5"
    >
      <div className="flex flex-col gap-5">
        <h3 className="text-6xl text-white">
          El primer paso hacia el crecimiento <br /> de tu negocio
        </h3>
        <p className="font-light text-white">
          Estamos listos para ayudarte a llevar tu negocio al siguiente nivel.
          Ya sea que tengas preguntas sobre nuestro software, quieras solicitar
          una demostración o simplemente necesites orientación, nuestro equipo
          de expertos está aquí para ti.
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <article className="flex items-center gap-4">
          <MdOutlineEmail className="text-2xl text-white" />
          <div>
            <h3 className="font-semibold text-mg text-white/40">
              Correo asistencia{" "}
            </h3>
            <span className="font-light text-white">
              correouracloud@uracloud.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-4">
          <FiPhone className="text-2xl text-white" />
          <div>
            <h3 className="font-bold text-mg text-white/40">
              Número de teléfono URACLOUD
            </h3>
            <span className="font-light text-white">+1 809 452 4563</span>
          </div>
        </article>
      </div>
    </motion.div>
  );
}
