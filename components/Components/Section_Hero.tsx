import Logo_Crm from "@/../public/Logo_Crm.svg";
import Image from "next/image";
import Screens_Crm from "@/../public/Screen_Crm.svg";
import * as motion from "motion/react-client";

export default function Section_Hero() {
  return (
    <section
      // style={{
      //   background: "radial-gradient(#007AFF,#007AFF,white,white)",
      // }}
      className="pt-40 pb-10 bg-radial from-[#007AFF] via-white to-white gap-10 flex flex-col items-center justify-center min-h-screen"
    >
      <div className="flex flex-col items-center gap-5 ">
        <h1 className="text-7xl font-semibold mb-4 jflex justify-center items-center gap-2">
          <span>Es hora de darle una mejor </span>
          <div className="flex items-center gap-4">
            <span>organización a tu</span>
            <div className="border z-0 bg-white rounded-2xl rotate-[-50deg] p-1 border-gray-300 shadow-2xs">
              <Image
                src={Logo_Crm}
                alt="Logo"
                className="h-10 w-10 object-contain border rounded-2xl"
              />
            </div>
            <span>empresa</span>
          </div>
        </h1>
        <p className="w-1/2 min-w-90 text-center font-light text-2xl ">
          El futuro de tu negocio está en tus manos. Con URACLOUD , no solo
          organiza datos, optimiza cada interacción y potencias tus ventas.
        </p>
        <button className="bg-blue-700 text-xl shadow-2xs hover:scale-105 transition-all duration-300 cursor-pointer text-white py-2 px-10 rounded-3xl">
          Contáctanos
        </button>
      </div>
      <motion.div
        whileHover={{ opacity: 1, scale: 1 }}
        initial={{  opacity: 0,scale: 0.9 }}
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
