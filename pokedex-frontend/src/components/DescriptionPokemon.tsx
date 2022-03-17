import "./DescriptionPokemon.css";
import { PokemonData } from "../routes/FullDataPokemon";
import EvolutionWrapper from "./EvolutionWrapper";

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
            <EvolutionWrapper data={data} />
        </div>
    );
}
