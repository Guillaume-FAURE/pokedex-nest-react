import "./BaseInfoPokemon.css";
import { PokemonData } from "../routes/FullDataPokemon";

type Props = {
    data: PokemonData | undefined;
};

export default function BaseInfoPokemon({ data }: Props) {
    return (
        <div className="column baseInfoPokemon">
            <div className="row rowIdName">
                <p className="emphasized">#{data?.id}</p>
                <p>
                    Nom : <span className="emphasized">{data?.name}</span>
                </p>
            </div>
            <img src={data?.fullSprite} alt={data?.name} className="mainImg" />
            <p>BaseExperience: {data?.baseExperience}</p>
            {data?.heldItems !== undefined ? (
                <p>{`Held Items : ${data?.heldItems}`}</p>
            ) : null}
            <p>Height : {data?.height}</p>
            <p>Weight : {data?.weight}</p>
            <h4>Types</h4>
            <div className="row">
                {data?.types.map((type, index) => {
                    return (
                        <div key={index} className="typeWrapper">
                            {type.name}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
