import Image from "next/image";
import Logo_Crm from "@/../public/Logo_Crm.svg";
import Link from "next/link";
import * as motion from "motion/react-client";
import { IoMenu } from "react-icons/io5";
import { Dispatch, SetStateAction } from "react";
import { IoClose } from "react-icons/io5";

interface Section_Header_Props {
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  MenuOpen: boolean;
}

export default function Section_Header({
  setMenuOpen,
  MenuOpen,
}: Section_Header_Props) {
  return (
    <section className=" w-[100vw] py-5 px-3  lg:px-30 flex flex-col justify-center items-center fixed z-50">
      <motion.header
        animate={{ translateY: 0 }}
        style={{ translateY: -100 }}
        className={`  flex justify-between w-full   items-center p-2 rounded-full ${
          MenuOpen
            ? "bg-white/95 border-gray-200  border shadow-md"
            : "lg:bg-white/95 lg:border-gray-200 lg:border lg:shadow-md"
        } min-w-80 `}
      >
        <div
          className={`flex items-center text-blue-600 lg:w-1/3  ${
            MenuOpen ? "border-0" : "lg:border-0 border-gray-200"
          } p-2 lg:p-2 rounded-4xl bg-white`}
        >
          <Image
            src={Logo_Crm}
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
          {MenuOpen && <span className="font-bold text-lg ml-2">URACLOUD</span>}
        </div>
        <nav className="lg:flex w-1/3 min-w-120 hidden  justify-between">
          <Link href="">Inicio</Link>
          <Link href="">Sobre Nosotros</Link>
          <Link href="">Contactanos</Link>
          <Link href="">Reseñas</Link>
        </nav>
        <div className="  lg:w-1/3 flex justify-end">
          <button className="bg-blue-600 h-12 items-center lg:flex hidden text-white py-2 px-4 rounded-4xl">
            Empieza ahora
          </button>
          <button
            onClick={() => setMenuOpen(!MenuOpen)}
            className="bg-white text-primary flex lg:hidden py-2 px-4 border border-gray-200 p-2 lg:p-2 rounded-4xl"
          >
            {MenuOpen ? (
              <IoClose className="text-4xl" />
            ) : (
              <IoMenu className="text-4xl" />
            )}
          </button>
        </div>
      </motion.header>
      {MenuOpen && (
        <motion.div
          initial={{ opacity: 0, translateY: -20 }}
          animate={{ opacity: 1, height: "auto", translateY: 0 }}
          exit={{ opacity: 0, height: 0, translateY: -20 }}
          className="lg:hidden border mt-90 border-blue-100 shadow-2xs  w-[95%] absolute p-5 rounded-2xl bg-white"
        >
          <motion.nav className="flex flex-col  items-center gap-5 ">
            <Link href="">Inicio</Link>
            <Link href="">Sobre Nosotros</Link>
            <Link href="">Contactanos</Link>
            <Link href="">Reseñas</Link>
            <button className="bg-blue-600 text-white py-2 px-4 rounded-3xl">
              Empieza ahora
            </button>
          </motion.nav>
        </motion.div>
      )}
    </section>
  );
}
