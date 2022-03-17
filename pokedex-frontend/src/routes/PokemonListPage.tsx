import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavPage from "../components/NavPage";
import { SmallDataPokemon } from "../components/SmallDataPokemon";
import "./PokemonListPage.css";

export function PokemonListPage() {
    const [idPage, setIdPage] = useState(1);
    const pokemonlist: Array<unknown> = [];
    const controller = new AbortController();
    const [idInput, setIdInput] = useState(1);

    for (let i = 10 * (idPage - 1) + 1; i <= 10 * idPage; i++) {
        i < 899
            ? pokemonlist.push(
                  <SmallDataPokemon idPokemon={i} controller={controller} />
              )
            : console.log("all pokemon charged");
    }
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setIdInput(parseInt(e.target.value));
    }

    return (
        <>
            <NavPage
                idPage={idPage}
                controller={controller}
                pokemonlist={pokemonlist}
                setIdPage={setIdPage}
            />
            <form>
                <label>
                    Id :
                    <input
                        className="inputId"
                        type="number"
                        name="id"
                        min={1}
                        max={898}
                        defaultValue={1}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <NavLink
                className="inputNav"
                to={`/pokemon/${idInput}`}
                target="_blank"
            >
                <button>Go to Id</button>
            </NavLink>
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
