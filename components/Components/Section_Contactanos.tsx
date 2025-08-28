
import SubSection_Formulario from "../Subcomponents/SubSection_Formulario";
import SubSection_PrimerPaso from "../Subcomponents/SubSection_PrimerPaso";

export default function Section_Contactanos() {
  return (
    <section className="flex flex-col bg-blue-600 py-10 px-30">
      <h2 className="text-5xl font-semibold text-center text-white">Contactanos</h2>
      <div className="flex w-full justify-around mt-10 items-center">
        <SubSection_PrimerPaso />
        <SubSection_Formulario />
      </div>
    </section>
  );
}
