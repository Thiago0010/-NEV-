import './manifesto.css';

export default function Manifesto() {
  return (
    <section className="section manifesto" id="manifesto">
      <div className="container manifesto__grid">
        <p className="eyebrow">Manifesto</p>
        <h2 className="section-title manifesto__statement">
          Boa engenharia não se anuncia. <br />
          Ela simplesmente <em>funciona</em>, com uma naturalidade que parece
          óbvia — mesmo sendo o resultado de milhares de decisões
          deliberadas.
        </h2>
        <p className="section-lede manifesto__lede">
          Na [NEV]², cada projeto começa pela pergunta errada de sempre —
          "o que dá para construir?" — e termina na certa: "o que essa
          empresa realmente precisa que exista?"
        </p>
      </div>
    </section>
  );
}
