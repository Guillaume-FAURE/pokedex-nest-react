import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FullDataPokemon.css";
import { MovePokemon } from "./MovePokemon";
import { Triangle } from "react-loader-spinner";
import DescriptionPokemon from "./DescriptionPokemon";

export type PokemonTypes = {
    name: string;
    description: string;
};

export type PokemonAbilities = {
    name: string;
    description: string;
};

export type PokemonStats = {
    hp: number;
    attack: number;
    defense: number;
    specialAttack: number;
    specialDefense: number;
    speed: number;
};
export type PokemonMove = {
    id: number;
    learning: string;
};
export type PokemonLocation = {
    name: string;
    version: string;
};
export type PokemonFirstForm = {
    name: string,
    id: number,
}
export type PokemonForm = {
    name: string,
    level: number,
    id: number,
}
export type PokemonData = {
    id: string;
    name: string;
    fullSprite: string;
    height: number;
    weight: number;
    types: PokemonTypes[];
    abilities: PokemonAbilities[];
    species: string;
    baseExperience: number;
    heldItems: string;
    evolutionChain: string;
    genera: string;
    originGeneration: string;
    habitat: string;
    shape: string;
    color: string;
    flavorText: string;
    stats: PokemonStats;
    moves: PokemonMove[];
    location: PokemonLocation[];
    firstForm: PokemonFirstForm;
    secondForm: PokemonForm[];
    thirdForm: PokemonForm[];
};

export function FullDataPokemon() {
    const { idPokemon } = useParams();
    const [data, setData] = useState<PokemonData>();
    const [spinnerLoading, setSpinnerLoading] = useState(true);

    useEffect(() => {
        const fetcherPokemon = async () => {
            await fetch(`http://localhost:5000/pokemon/${idPokemon}`, {})
                .then((res) => {
                    return res.json();
                })
                .then(
                    (result) => {
                        setData(result);
                        console.log("endfetchpokemon");
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        const fetcherLocationEnconters = async () => {
            await fetch(
                `http://localhost:5000/location-area-encounter/${idPokemon}`,
                {}
            )
                .then((res) => {
                    return res.json();
                })
                .then(
                    (result) => {
                        console.log("beginfetchlocation");
                        setData({ ...data, ...result });
                        console.log("endfetchlocation");
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };

        fetcherPokemon();
        fetcherLocationEnconters();
    }, [idPokemon]);

    useEffect(() => {
        const fetcherSpecies = async () => {
            await fetch(`http://localhost:5000/species/${data?.species}`, {})
                .then((res) => {
                    return res.json();
                })
                .then(
                    (result) => {
                        console.log("beginfetchspecies");
                        setData({ ...data, ...result });
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        fetcherSpecies();
    }, [data?.species]);

    useEffect(() => {
        const fetcherEvolutionChain = async () => {
            await fetch(
                `http://localhost:5000/evolution-chain/${data?.evolutionChain}`,
                {}
            )
                .then((res) => {
                    return res.json();
                })
                .then(
                    (result) => {
                        console.log("beginfetchevolutionchain");
                        setData({ ...data, ...result });
                        console.log("endfetchevolutionchain");
                        if (data?.evolutionChain) {
                            setSpinnerLoading(false);
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        fetcherEvolutionChain();
    }, [data?.evolutionChain]);

    return (
        <>
            {spinnerLoading ? (
                <div className="triangleLoader">
                    <Triangle color="#00BFFF" height={100} width={100} />
                </div>
            ) : (
                <div className={`fullDataPokemon id${idPokemon}`}>
                    <div className="row">
                        <DescriptionPokemon data={data} />
                        <div className="column baseInfoPokemon">
                            <div className="row rowIdName">
                                <p className="emphasized">#{data?.id}</p>
                                <p>
                                    Nom :{" "}
                                    <span className="emphasized">
                                        {data?.name}
                                    </span>
                                </p>
                            </div>
                            <img
                                src={data?.fullSprite}
                                alt={data?.name}
                                className="mainImg"
                            />
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
                                        <div
                                            key={index}
                                            className="typeWrapper"
                                        >
                                            {type.name}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="statsPokemon column">
                        <div className="row stat">
                            <div className="summaryStat">
                                <h4 className="titleStat">HP</h4>
                                {data?.stats.hp}
                            </div>
                            <div className="backStat">
                                <div
                                    className="hpStat"
                                    style={{
                                        width: `${
                                            data && data.stats.hp / 2.55
                                        }%`,
                                        height: `100%`,
                                        backgroundColor: `#f53006`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="row stat">
                            <div className="summaryStat row">
                                <h4 className="titleStat">ATTACK</h4>
                                {data?.stats.attack}
                            </div>
                            <div className="backStat">
                                <div
                                    className="attackStat"
                                    style={{
                                        width: `${
                                            data && data.stats.attack / 2.55
                                        }%`,
                                        height: `100%`,
                                        backgroundColor: `#f53006`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="row stat">
                            <div className="summaryStat">
                                <h4 className="titleStat">DEFENSE</h4>
                                {data?.stats.defense}
                            </div>
                            <div className="backStat">
                                <div
                                    className="defenseStat"
                                    style={{
                                        width: `${
                                            data && data.stats.defense / 2.55
                                        }%`,
                                        height: `100%`,
                                        backgroundColor: `#f53006`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="row stat">
                            <div className="summaryStat">
                                <h4 className="titleStat">HP</h4>
                                {data?.stats.hp}
                            </div>
                            <div className="backStat">
                                <div
                                    className="specialAttackStat"
                                    style={{
                                        width: `${
                                            data &&
                                            data.stats.specialAttack / 2.55
                                        }%`,
                                        height: `100%`,
                                        backgroundColor: `#f53006`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="row stat">
                            <div className="summaryStat">
                                <h4 className="titleStat">SPECIAL DEFENSE</h4>
                                {data?.stats.specialDefense}
                            </div>
                            <div className="backStat">
                                <div
                                    className="specialDefenseStat"
                                    style={{
                                        width: `${
                                            data &&
                                            data.stats.specialDefense / 2.55
                                        }%`,
                                        height: `100%`,
                                        backgroundColor: `#f53006`,
                                    }}
                                ></div>
                            </div>
                        </div>
                        <div className="row stat">
                            <div className="summaryStat">
                                <h4 className="titleStat">SPEED</h4>
                                {data?.stats.speed}
                            </div>
                            <div className="backStat">
                                <div
                                    className="speedStat"
                                    style={{
                                        width: `${
                                            data && data.stats.speed / 2.55
                                        }%`,
                                        height: `100%`,
                                        backgroundColor: `#f53006`,
                                    }}
                                ></div>
                            </div>
                        </div>
                    </div>
                    <div className="movesList">
                        <h4>Moves</h4>
                        {data?.moves.map((move, index) => {
                            return (
                                <MovePokemon
                                    key={index}
                                    idMove={move.id}
                                    learning={move.learning}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </>
    );
}
