import Card_NuestrosClientes from "../Subcomponents/Card_NuestrosClientes";

export default function Section_NuestrosClientes() {
  return (
    <section className="flex flex-col py-10 px-30 gap-10">
      <h2 className="text-5xl text-center font-semibold">Nuestros clientes lo confirman</h2>
      <div className="flex justify-between">
        <Card_NuestrosClientes />
        <Card_NuestrosClientes />
        <Card_NuestrosClientes />
        <Card_NuestrosClientes />
      </div>
    </section>
  );
}
