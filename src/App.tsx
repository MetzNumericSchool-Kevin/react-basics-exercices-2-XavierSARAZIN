import { useState } from "react";
import "./App.css";
import Section from "./components/Section.tsx";
import BienvenueAventurier from "./components/BienvenueAventurier.tsx";
import Inventoria from "./components/Inventoria.tsx";
import PotionShop from "./components/PotionShop.tsx";
import Potion from "./components/Potion.tsx";
import potions from "./data/potion.ts";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="container p-5 mb-4 bg-body-tertiary rounded-3">
            {/* Section 1 - Bienvenue */}
            <Section id="1">
                <BienvenueAventurier>
                    Bienvenue <b>Aventurier</b>, ici vous pouvez acheter diverses <u>potions magiques</u> pour vos aventures !
                </BienvenueAventurier>
            </Section>

            {/* Section 2 - Inventoria */}
            <Section id="2">
                <h2>Inventoria</h2>
                <button className="btn btn-primary" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "Fermer Inventoria" : "Ouvrir Inventoria"}
                </button>
                <div className="row mt-5">
                    {isOpen ? <Inventoria /> : (
                        <ul className="list-group list-group-horizontal flex-wrap">
                            <li className="list-group-item list-group-item-info">
                                Inventoria est pour le moment vide ⛺
                            </li>
                        </ul>
                    )}
                </div>
            </Section>

            {/* Section 3 - Boutique de potions */}
            <Section id="exercice3">
                <PotionShop title="Boutique de potion" potions={potions} >
                </PotionShop>
            </Section>

            {/* Section 4 - Ajout de potions (pas modifiée) */}
            <Section id="4">
                <h2 className="mb-5">Ajout de potions</h2>

                <form>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="name">Nom de la potion</label>
                            <input type="text" className="form-control" id="name" />
                        </div>
                    </div>
                    <div className="row mt-3">
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