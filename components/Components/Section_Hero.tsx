import Logo_Crm from "@/../public/Logo_Crm.svg";
import Image from "next/image";
import Screens_Crm from "@/../public/Screen_Crm.svg";
import * as motion from "motion/react-client";

export default function Section_Hero() {
  return (
    <section className="lg:pt-40 pt-10 pb-10 bg-radial from-[#007AFF] via-white to-white gap-10 flex flex-col items-center justify-center min-h-screen">
      <div className="flex flex-col items-center gap-5 ">
        <h1 className="xl:text-7xl lg:text-5xl text-xl md:text-4xl font-semibold mb-4 flex flex-col justify-center items-center gap-2">
          <span>Es hora de darle una mejor </span>
          <div className="flex items-center gap-4">
            <span>organización a tu</span>
            <motion.div
              whileInView={{ opacity: 1, rotate: -10 }}
              initial={{ rotate: 0, opacity: 0 }}
              animate={{ rotate: 300 }}
              transition={{
                repeatDelay: 2,
                duration: 0.3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="border block z-0 bg-white rounded-2xl rotate-[-50deg] p-1 border-gray-300 shadow-2xs"
            >
              <motion.img
                src={Logo_Crm.src}
                alt="Logo"
                className="h-8 w-8 object-contain  rounded-2xl"
              />
            </motion.div>
            <span>empresa</span>
          </div>
        </h1>
        <p className="w-1/2 min-w-90 text-center font-light lg:text-2xl  text-md">
          El futuro de tu negocio está en tus manos. Con URACLOUD , no solo
          organiza datos, optimiza cada interacción y potencias tus ventas.
        </p>
        <button className="bg-blue-700 lg:text-xl text-md shadow-2xs hover:scale-105 transition-all duration-300 cursor-pointer text-white py-2 px-10 rounded-3xl">
          Contáctanos
        </button>
      </div>
      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.95 }}
        className=" transition-all duration-300 w-full justify-center flex "
      >
        <Image
          src={Screens_Crm}
          alt="Screens"
          className="w-[80%] h-1/2 object-contain border rounded-2xl"
        />
      </motion.div>
    </section>
  );
}
