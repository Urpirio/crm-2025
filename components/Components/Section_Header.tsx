import Image from "next/image";
import Logo_Crm from "@/../public/Logo_Crm.svg";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function Section_Header() {
  return (
    <section className="w-full py-5 px-30 fixed z-50">
      <motion.header
        animate={{ translateY:0 }}
        style={{ translateY:-100 }}
        className="border flex justify-between items-center p-2  rounded-full bg-white/95 border-gray-200 shadow-md"
      >
        <div className="flex w-1/3">
          <Image
            src={Logo_Crm}
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
        </div>
        <nav className="flex w-1/3 justify-between">
          <Link href="">Inicio</Link>
          <Link href="">Sobre Nosotros</Link>
          <Link href="">Contactanos</Link>
          <Link href="">Reseñas</Link>
        </nav>
        <div className="flex  w-1/3 justify-end">
          <button className="bg-primary text-white py-2 px-4 rounded-3xl">
            Empieza ahora
          </button>
        </div>
      </motion.header>
    </section>
  );
}
