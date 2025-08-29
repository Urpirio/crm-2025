import * as motion from "motion/react-client";

export default function SubSection_Formulario() {
  return (
    <motion.div
      whileInView={{ opacity: 1, translateX: 0 }}
      initial={{ opacity: 0, translateX: 200 }}
      className="w-1/3 min-w-80"
    >
      <article className="bg-[#E7E7E7] p-10 rounded-2xl ">
        <div>
          <h3 className="text-2xl font-bold">Contáctanos</h3>
          <p className="font-light text-[#4B5563] text-sm">
            Estamos listos para ayudarte a crecer. Envíanos un mensaje y te
            responderemos a la brevedad.
          </p>
        </div>
        <div className="flex flex-col gap-4 my-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="border border-gray-300 bg-white p-2 rounded-md outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm">
              Correo electrónico:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="border border-gray-300 bg-white p-2 rounded-md outline-none"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm">
              Mensaje:
            </label>
            <textarea
              id="message"
              name="message"
              required
              className="border border-gray-300 bg-white p-2 rounded-md resize-none outline-none"
            ></textarea>
          </div>
        </div>
        <button className="w-full p-2 bg-blue-600 text-white rounded-xl cursor-pointer hover:scale-102 transition-all duration-300">
          Enviar mensaje
        </button>
      </article>
    </motion.div>
  );
}
