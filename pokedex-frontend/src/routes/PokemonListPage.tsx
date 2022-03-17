import { useState } from "react";
import NavPage from "../components/NavPage";
import { SmallDataPokemon } from "../components/SmallDataPokemon";
import "./PokemonListPage.css";

export function PokemonListPage() {
    const [idPage, setIdPage] = useState(1);
    const pokemonlist: Array<unknown> = [];
    const controller = new AbortController();

    for (let i = 10 * (idPage - 1) + 1; i <= 10 * idPage; i++) {
        i < 899
            ? pokemonlist.push(
                  <SmallDataPokemon idPokemon={i} controller={controller} />
              )
            : console.log("all pokemon charged");
    }

    return (
        <>
            <NavPage
                idPage={idPage}
                controller={controller}
                pokemonlist={pokemonlist}
                setIdPage={setIdPage}
            />
            <div className="pokemonList">{pokemonlist}</div>
            <NavPage
                idPage={idPage}
                controller={controller}
                pokemonlist={pokemonlist}
                setIdPage={setIdPage}
            />
        </>
    );
}
