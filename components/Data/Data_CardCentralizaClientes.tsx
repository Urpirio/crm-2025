import { PiUsersThree } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { IoStatsChart } from "react-icons/io5";

export const Data_CardCentralizaClientes = [
  {
    id: 1,
    title: "Terceros",
    description:
      "Conecta con el mundo. Integra fácilmente URACLOUD con otras herramientas que ya usas. Nuestra API abierta y las integraciones pre-diseñadas te permiten un flujo de trabajo sin interrupciones y una visión completa de tu negocio.",
    icon: (
      <div className=" p-2 rounded-2xl">
        <PiUsersThree className="text-4xl text-white" />
      </div>
    ),
  },
  
  {
    id: 2,
    title: "Servicios",
    description:
      "Optimiza cada interacción con tus clientes. Desde la primera llamada hasta el soporte post-venta, URACLOUD te ayuda a ofrecer un servicio excepcional que fideliza y genera confianza.",
    icon: (
      <div className="p-2 rounded-2xl">
        <HiOutlineShoppingBag className="text-4xl text-white" />
      </div>
    ),
  },
  {
    id: 3,
    title: "Reportes",
    description:
      "Toma decisiones inteligentes, no a ciegas. Nuestros reportes y dashboards intuitivos te dan una visión 360° de tu negocio en tiempo real. Analiza tendencias, mide el rendimiento y anticipa el futuro para tomar las mejores decisiones.",
    icon: (
      <div className=" p-2 rounded-2xl">
        <IoStatsChart className="text-4xl text-white" />
      </div>
    ),
  },
];
