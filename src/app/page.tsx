import Section_CentralizarClientes from "../../components/Components/Section_CentralizarClientes";
import Section_Contactanos from "../../components/Components/Section_Contactanos";
import Section_Hero from "../../components/Components/Section_Hero";
import Section_NuestrosClientes from "../../components/Components/Section_NuestrosClientes";
import Section_QuePuedeHacer from "../../components/Components/Section_QuePuedeHacer";


export default function page() {
  return (
    <main className="flex flex-col   items-center ">
      <Section_Hero />
    
      <Section_CentralizarClientes />
      <Section_QuePuedeHacer />
      <Section_Contactanos />
      <Section_NuestrosClientes />
    </main>
  );
}
