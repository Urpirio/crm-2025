import Card_CentralizaClientes from "../Subcomponents/Card_CentralizaClientes";

export default function Section_CentralizarClientes() {
  return (
    <section className="px-30 py-10 flex flex-col gap-10">
      <h2 className="text-5xl font-semibold mb-4 w-[60%]">
        Centraliza tus clientes, potencia a tu equipo, impulsa tus ventas
      </h2>
      <div className="flex   gap-5 justify-between ">
        <Card_CentralizaClientes />
      </div>
    </section>
  );
}
