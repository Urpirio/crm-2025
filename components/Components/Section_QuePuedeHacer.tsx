import Card_ListQuePuedeHacer from "../Subcomponents/Card_ListQuePuedeHacer";
import Image from "next/image";
import Stats_CRM from "@/../public/Stats_CRM.svg";
import * as motion from "motion/react-client";

export default function Section_QuePuedeHacer() {
  return (
    <section className="py-10  lg:px-30 flex flex-col items-center overflow-hidden" id="que-puede-hacer">
      <div className="text-center flex justify-center flex-col items-center gap-4 mb-8 ">
        <h2 className="lg:text-5xl text-3xl font-semibold">
          ¿Qué puede hacer URACLOUD por tu negocio?
        </h2>
        <p className="w-[60%] min-w-90 font-light sm:text-xl px-3">
          Transforma la gestión de tu empresa. Con URACLOUD, obtén el control
          total que necesitas para tomar decisiones inteligentes e impulsar tu
          crecimiento.
        </p>
      </div>
      <div className="flex  justify-center items-center  flex-wrap">
        <Card_ListQuePuedeHacer />
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="w-[45%]  min-w-90 lg:flex hidden justify-center items-center "
        >
          <Image
            className="w-[70%] h-[70%] object-contain"
            src={Stats_CRM}
            alt="Descripción de la imagen"
          />
        </motion.div>
      </div>
    </section>
  );
}
