import { Data_CardCentralizaClientes } from "../Data/Data_CardCentralizaClientes";
import * as motion from "motion/react-client";

export default function Card_CentralizaClientes() {
  const Cards = Data_CardCentralizaClientes.map(
    ({ id, title, description, icon }) => (
      <motion.article
        whileInView={{ opacity: 1, translateY: 0 }}
        initial={{ opacity: 0 , translateY: 100 }}
        key={id}
        className="flex flex-col border justify-between items-start gap-2 w-[30%] min-w-70 bg-[#F0F2F5] p-5 rounded-xl shadow-2xl shadow-gray-100/50 border-gray-200"
      >
        <div className="border border-primary rounded-2xl p-1 bg-primary">
          {icon}
        </div>
        <h2 className="text-xl font-bold mt-2">{title}</h2>
        <p className="  text-sm font-light">{description}</p>
      </motion.article>
    )
  );
  return Cards;
}
