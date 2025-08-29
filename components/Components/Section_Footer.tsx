import Link from "next/link";
export default function Section_Footer() {
  return (
    <footer className="py-10 px-5  lg:px-30 bg-blue-600 flex flex-col gap-10">
      <section className="flex  flex-wrap gap-5 min-w-70 px-5 bg-white w-full justify-between lg:px-10 py-5  rounded-2xl items-center">
        <h3 className="lg:text-4xl text-2xl lg:w-1/2   font-normal">
          Empieza a transformar tu negocio hoy
        </h3>
        <button className="bg-blue-600 text-white py-3 px-5 rounded-2xl">
          Solicita una demo gratuita
        </button>
      </section>
      <section className="flex  flex-wrap gap-10 w-full  text-white">
        <div className="flex  flex-col gap-5 min-w-70">
          <h4 className="font-bold">URACLOUD</h4>
          <nav className="flex flex-col gap-2 ">
            <Link
              href=""
              className="font-extralight hover:opacity-80 transition-all duration-300 cursor-pointer"
            >
              Inicio
            </Link>
            <Link
              href=""
              className="font-extralight hover:opacity-80 transition-all duration-300 cursor-pointer"
            >
              Sobre Nosotros
            </Link>
            <Link
              href=""
              className="font-extralight hover:opacity-80 transition-all duration-300 cursor-pointer"
            >
              Contactanos
            </Link>
            <Link
              href=""
              className="font-extralight hover:opacity-80 transition-all duration-300 cursor-pointer"
            >
              Reseñas
            </Link>
          </nav>
        </div>
        <div className="flex flex-col gap-5 min-w-80">
          <h4 className="font-bold">Ayuda</h4>
          <nav className="flex flex-col gap-2">
            <Link
              href=""
              className="font-extralight hover:opacity-80 transition-all duration-300 cursor-pointer"
            >
              Soporte al cliente
            </Link>
            <Link
              href=""
              className="font-extralight hover:opacity-80 transition-all duration-300 cursor-pointer"
            >
              Terminos y condiciones
            </Link>
            <Link
              href=""
              className="font-extralight hover:opacity-80 transition-all duration-300 cursor-pointer"
            >
              Politica de privacidad
            </Link>
          </nav>
        </div>
      </section>
    </footer>
  );
}
