import Card_NuestrosClientes from "../Subcomponents/Card_NuestrosClientes";

export default function Section_NuestrosClientes() {
  return (
    <section className="flex flex-col py-10 lg:px-30 gap-10 overflow-hidden " id="reseñas">
      <h2 className="lg:text-5xl text-3xl text-center font-semibold">
        Nuestros clientes lo confirman
      </h2>
      <div className="flex flex-wrap  justify-center lg:justify-between gap-10 w-full">
        <Card_NuestrosClientes />
      </div>
    </section>
  );
}
