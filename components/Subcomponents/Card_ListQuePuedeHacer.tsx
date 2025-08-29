import * as motion from "motion/react-client";

export default function Card_ListQuePuedeHacer() {
  const Data_List = [
    {
      title: "Aumento de la rentabilidad:",
      description:
        "Controla costos, optimiza recursos y maximiza tus ganancias con herramientas de análisis en tiempo real.",
    },
    {
      title: "Escalabilidad:",
      description:
        "Crece con tu negocio. URACLOUD es una plataforma rentable que se adapta a tu ritmo, eliminando la necesidad de múltiples sistemas.",
    },
    {
      title: "Visión 360°:",
      description:
        "Accede a datos en tiempo real para tomar decisiones más inteligentes.",
    },
    {
      title: "Automatización:",
      description: "Libérate de tareas repetitivas y reduce errores manuales.",
    },
  ];

  return (
    <div className="w-[45%] min-w-80">
      {Data_List.map((item, index) => {
        if (index === Data_List.length - 1) {
          return (
            <motion.article
              whileInView={{ opacity: 1, translateY: 0 }}
              initial={{ opacity: 0, translateY: 100 }}
              className="flex gap-4 w-full"
              key={index}
            >
              <div className="relative flex w-1/6 justify-center items-start ">
                <div className="bg-blue-600 absolute z-10 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {index + 1}
                </div>
                <div className=" w-[1px] bg-primary"></div>
              </div>
              <div className="flex flex-col  w-5/6">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="font-light text-sm">{item.description}</p>
              </div>
            </motion.article>
          );
        }

        return (
          <motion.article
            whileInView={{ opacity: 1, translateY: 0 }}
            initial={{ opacity: 0, translateY: 100 }}
            className="flex gap-4 w-full"
            key={index}
          >
            <div className="relative flex w-1/6 justify-center items-start ">
              <div className="bg-blue-600 absolute z-10 text-white font-bold rounded-full w-10 h-10 flex items-center justify-center">
                {index + 1}
              </div>
              <div className="h-26 w-[1px] bg-primary"></div>
            </div>
            <div className="flex flex-col  w-5/6">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="font-light text-sm">{item.description}</p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
