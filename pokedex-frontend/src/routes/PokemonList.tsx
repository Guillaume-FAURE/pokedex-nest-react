import { SmallDataPokemon } from "../components/SmallDataPokemon";
import "./PokemonList.css";

export function PokemonList() {
    const pokemonlist: Array<unknown> = [];

    for (let i = 1; i < 899; i++) {
        pokemonlist.push(<SmallDataPokemon idPokemon={i} />);
    }

    return <div className="pokemonList">{pokemonlist}</div>;
}
