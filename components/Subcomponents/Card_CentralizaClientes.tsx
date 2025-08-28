import { Data_CardCentralizaClientes } from "../Data/Data_CardCentralizaClientes";

export default function Card_CentralizaClientes() {
  const Cards = Data_CardCentralizaClientes.map(
    ({ id, title, description, icon }) => (
      <article
        key={id}
        className="flex flex-col justify-between items-start gap-2 w-[30%] bg-[#F0F2F5] p-5 rounded-xl shadow-2xl shadow-gray-100/50 border-gray-200"
      >
          <div className="border border-primary rounded-2xl p-1 bg-primary">
            {icon}
          </div>
          <h2 className="text-xl font-bold mt-2">{title}</h2>
          <p className="  text-sm font-light">{description}</p>
      </article>
    )
  );
  return Cards;
}
