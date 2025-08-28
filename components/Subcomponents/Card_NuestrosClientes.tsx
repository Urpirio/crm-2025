import BackNuestrosClientes from "@/../public/Card_NuestrosClinetes.svg";
import Image from "next/image";

export default function Card_NuestrosClientes() {
  return (
    <article className="w-90 justify-center items-center relative flex">
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
    </article>
  );
}
