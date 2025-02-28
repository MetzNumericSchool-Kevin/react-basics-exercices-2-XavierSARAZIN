import "./App.css";
import Section from "./components/Section.tsx";
import BienvenueAventurier from "./components/BienvenueAventurier.tsx";

function App() {
  return (
    <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
      <Section id={1}>

        <BienvenueAventurier>
          Bienvenue <b>Aventurier</b>, ici vous pouvez acheter diverses <u>potions magiques</u> pour vos aventures !
        </BienvenueAventurier>
      </Section>

      <Section id={2}>
        <h2>Inventoria</h2>

        <button className="btn btn-primary">Ouvrir Inventoria</button>

        <div className="row mt-5">
          <ul className="list-group list-group-horizontal flex-wrap">
            <li className="list-group-item list-group-item-info">
              Inventoria est pour le moment vide ⛺
            </li>
          </ul>
        </div>
      </Section>

      <Section id={3}>
        <h2 className="mb-5">Boutique de potion</h2>

        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="card col border text-bg-dark bg-dark">
            <div className="card-body">Blabla</div>
            <div className="card-actions">
              <button>Ajouter à Inventoria</button>
            </div>
          </div>
        </div>
      </Section>

      <Section id={4}>
        <h2 className="mb-5">Ajout de potions</h2>

        <form>
          <div className="row">
            <div className="col">
              <label htmlFor="name">Nom de la potion</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <button className="btn btn-primary" type="submit">
                Ajouter à la boutique
              </button>
            </div>
          </div>
        </form>
      </Section>
    </div>
  );
}

export default App;
