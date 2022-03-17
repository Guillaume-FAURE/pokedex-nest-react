import "./DescriptionPokemon.css";
import { PokemonData } from "./FullDataPokemon";

type Props = {
    data: PokemonData | undefined;
};
export default function DescriptionPokemon({ data }: Props) {
    return (
        <div className="column descriptionPokemon">
            <div className="flavorText descriptionPart">
                <span className="miniTitle">
                    Flavor text from Sword-Shield :
                </span>{" "}
                {data?.flavorText}
            </div>
            <div className="descriptionPart">
                <span className="miniTitle"> Genera : </span>
                {data?.genera}
            </div>
            <div className="descriptionPart">
                <span className="miniTitle"> Habitat : </span>
                {data?.habitat}
            </div>
            <div className="descriptionPart">
                <span className="miniTitle"> First Apparition : </span>
                {data?.originGeneration}
            </div>
            <div className="descriptionPart">
                <span className="miniTitle"> Shape : </span>
                {data?.shape}
            </div>
            <div className="descriptisecondFormonPart">
                <span className="miniTitle"> Color : </span>
                {data?.color}
            </div>
            <div className="descriptionPart encounterPart">
                <span className="miniTitle">Location to encounter : </span>
                <div className="encountersList">
                    {data?.location &&
                        data.location.map((location, index) => {
                            return (
                                <div className="locationWrapper" key={index}>
                                    {location.name} : {location.version}
                                </div>
                            );
                        })}
                </div>
            </div>
            <div className="abilitiesWrapper">
                <span className="miniTitle"> Abilities : </span>
                {data?.abilities.map((ability, index) => {
                    return (
                        <div className="abilityWrapper" key={index}>
                            {ability.name}
                        </div>
                    );
                })}
            </div>
            <div className="evolutionWrapper">
                {data?.firstForm && (
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${firstForm.id}.png`}
                        alt={data?.name}
                        className="imgEvolution"
                    />
                )}
                {data?.secondForm && (
                    <>
                        <img
                            src={`https://cdn-icons-png.flaticon.com/512/545/545682.png`}
                            alt={"arrow"}
                            className="arrowEvolution"
                        />
                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${secondForm[0].id}.png`}
                            alt={data?.name}
                            className="imgEvolution"
                        />
                    </>
                )}
                {data?.thirdForm && (
                    <>
                        <img
                            src={`https://cdn-icons-png.flaticon.com/512/545/545682.png`}
                            alt={"arrow"}
                            className="arrowEvolution"
                        />

                        <img
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${thirdForm[0].id}.png`}
                            alt={data?.name}
                            className="imgEvolution"
                        />
                    </>
                )}
            </div>
        </div>
    );
}
