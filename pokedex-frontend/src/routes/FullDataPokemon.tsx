import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FullDataPokemon.css";
import { MovePokemon } from "./MovePokemon";
import { Triangle } from "react-loader-spinner";
import DescriptionPokemon from "../components/DescriptionPokemon";
import BaseInfoPokemon from "../components/BaseInfoPokemon";
import StatsPokemon from "../components/StatsPokemon";

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
    name: string;
    id: number;
};
export type PokemonForm = {
    name: string;
    level: number;
    id: number;
};
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
                        <BaseInfoPokemon data={data} />
                    </div>
                    <StatsPokemon data={data} />
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
