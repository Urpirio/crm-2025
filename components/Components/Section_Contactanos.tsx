
import SubSection_Formulario from "../Subcomponents/SubSection_Formulario";
import SubSection_PrimerPaso from "../Subcomponents/SubSection_PrimerPaso";

export default function Section_Contactanos() {
  return (
    <section className="flex flex-col bg-blue-600 py-10 lg:px-30">
      <h2 className="lg:text-5xl text-3xl font-semibold text-center text-white">Contactanos</h2>
      <div className="flex flex-wrap w-full justify-around mt-10 items-center gap-5">
        <SubSection_PrimerPaso />
        <SubSection_Formulario />
      </div>
    </section>
  );
}
