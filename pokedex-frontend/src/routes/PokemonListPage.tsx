import { useState } from "react";
import { SmallDataPokemon } from "../components/SmallDataPokemon";
import "./PokemonListPage.css";
import arrowForward from "../assets/arrowForward.png";

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
            <div className="navPage">
                <div
                    key={`arrowLeft${idPage}`}
                    className={`arrowPage`}
                    onClick={() => {
                        controller.abort();
                        pokemonlist.slice(0, pokemonlist.length);
                        idPage > 1
                            ? setIdPage(idPage - 1)
                            : setIdPage(89 + idPage);
                    }}
                >
                    <img
                        src={arrowForward}
                        alt="arrowForward"
                        className="imageReverse"
                        width={`50px`}
                        height={`50px`}
                    />
                </div>
                <h4>{idPage}/90</h4>
                <div
                    key={`arrowRight${idPage}`}
                    className={`arrowPage`}
                    onClick={() => {
                        controller.abort();
                        pokemonlist.slice(0, pokemonlist.length);
                        idPage < 90
                            ? setIdPage(idPage + 1)
                            : setIdPage(idPage - 89);
                    }}
                >
                    <img
                        src={arrowForward}
                        alt="arrowBackward"
                        width={`50px`}
                        height={`50px`}
                    />
                </div>
            </div>
            <div className="pokemonList">{pokemonlist}</div>
            <div className="navPage">
                <div
                    key={`arrowLeft${idPage}`}
                    className={`arrowPage`}
                    onClick={() => {
                        controller.abort();
                        pokemonlist.slice(0, pokemonlist.length);
                        idPage > 1
                            ? setIdPage(idPage - 1)
                            : setIdPage(89 + idPage);
                    }}
                >
                    <img
                        src={arrowForward}
                        alt="arrowForward"
                        className="imageReverse"
                        width={`50px`}
                        height={`50px`}
                    />
                </div>
                <h4>{idPage}/90</h4>
                <div
                    key={`arrowRight${idPage}`}
                    className={`arrowPage`}
                    onClick={() => {
                        controller.abort();
                        pokemonlist.slice(0, pokemonlist.length);
                        idPage < 90
                            ? setIdPage(idPage + 1)
                            : setIdPage(idPage - 89);
                    }}
                >
                    <img
                        src={arrowForward}
                        alt="arrowBackward"
                        width={`50px`}
                        height={`50px`}
                    />
                </div>
            </div>
        </>
    );
}