import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./FullDataPokemon.css";
import { MovePokemon } from "./MovePokemon";
import { Triangle } from "react-loader-spinner";

export function FullDataPokemon() {
    const { idPokemon } = useParams();
    const [id, setId] = useState(idPokemon);
    const [name, setName] = useState("");
    const [fullSprite, setSprite] = useState("");
    const [height, setHeight] = useState(0);
    const [weight, setWeight] = useState(0);
    const [types, setTypes] = useState([{ name: "", description: "" }]);
    const [abilities, setAbilities] = useState([{ name: "", description: "" }]);
    const [moves, setMoves] = useState([{ id: 0, learning: "" }]);
    const [species, setSpecies] = useState("");
    const [baseExperience, setBaseExperience] = useState(0);
    const [heldItems, setHeldItems] = useState("");
    const [evolutionChain, setEvolutionChain] = useState("");
    const [genera, setGenera] = useState("");
    const [originGeneration, setOriginGeneration] = useState("");
    const [habitat, setHabitat] = useState("");
    const [shape, setShape] = useState("");
    const [color, setColor] = useState("");
    const [flavorText, setFlavorText] = useState("");
    const [firstForm, setFirstForm] = useState({ name: "", id: 0 });
    const [secondForm, setSecondForm] = useState([
        { name: "", level: 0, id: 0 },
    ]);
    const [thirdForm, setThirdForm] = useState([{ name: "", level: 0, id: 0 }]);
    const [location, setLocation] = useState([{ name: "", version: "" }]);

    const [spinnerLoading, setSpinnerLoading] = useState(true);

    useEffect(() => {
        const fetcherPokemon = async () => {
            await fetch(`http://localhost:5000/pokemon/${idPokemon}`, {})
                .then((res) => {
                    return res.json();
                })
                .then(
                    (result) => {
                        setId(result.id);
                        setName(result.name);
                        setSprite(result.fullSprite);
                        setHeight(result.height);
                        setWeight(result.weight);
                        setTypes(result.types);
                        setAbilities(result.abilities);
                        setMoves(result.moves);
                        setSpecies(result.species);
                        setBaseExperience(result.baseExperience);
                        setHeldItems(result.heldItems);
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
                        setLocation(result);
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
            await fetch(`http://localhost:5000/species/${species}`, {})
                .then((res) => {
                    return res.json();
                })
                .then(
                    (result) => {
                        console.log("beginfetchspecies");
                        setEvolutionChain(result.evolutionChain);
                        setGenera(result.genera);
                        setOriginGeneration(result.originGeneration);
                        setHabitat(result.habitat);
                        setShape(result.shape);
                        setColor(result.color);
                        setFlavorText(result.flavorText);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        fetcherSpecies();
    }, [species]);

    useEffect(() => {
        const fetcherEvolutionChain = async () => {
            await fetch(
                `http://localhost:5000/evolution-chain/${evolutionChain}`,
                {}
            )
                .then((res) => {
                    return res.json();
                })
                .then(
                    (result) => {
                        console.log("beginfetchevolutionchain");
                        setFirstForm(result.firstForm);
                        setSecondForm(result.secondForm);
                        setThirdForm(result.thirdForm);
                        console.log("endfetchevolutionchain");
                        if (evolutionChain) {
                            setSpinnerLoading(false);
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        fetcherEvolutionChain();
    }, [evolutionChain]);

    return (
        <>
            {spinnerLoading ? (
                <div className="triangleLoader">
                    <Triangle color="#00BFFF" height={100} width={100} />
                </div>
            ) : (
                <div className={`fullDataPokemon id${idPokemon}`}>
                    <div className="row">
                        <div className="column descriptionPokemon">
                            <div className="flavorText descriptionPart">
                                <span className="miniTitle">
                                    Flavor text from Sword-Shield :
                                </span>{" "}
                                {flavorText}
                            </div>
                            <div className="descriptionPart">
                                <span className="miniTitle"> Genera : </span>
                                {genera}
                            </div>
                            <div className="descriptionPart">
                                <span className="miniTitle"> Habitat : </span>
                                {habitat}
                            </div>
                            <div className="descriptionPart">
                                <span className="miniTitle">
                                    {" "}
                                    First Apparition :{" "}
                                </span>
                                {originGeneration}
                            </div>
                            <div className="descriptionPart">
                                <span className="miniTitle"> Shape : </span>
                                {shape}
                            </div>
                            <div className="descriptisecondFormonPart">
                                <span className="miniTitle"> Color : </span>
                                {color}
                            </div>
                            <div className="descriptionPart encounterPart">
                                <span className="miniTitle">
                                    Location to encounter :{" "}
                                </span>
                                <div className="encountersList">
                                    {location &&
                                        location.map((location, index) => {
                                            return (
                                                <div
                                                    className="locationWrapper"
                                                    key={index}
                                                >
                                                    {location.name} :{" "}
                                                    {location.version}
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                            <div className="abilitiesWrapper">
                                <span className="miniTitle"> Abilities : </span>
                                {abilities.map((ability, index) => {
                                    return (
                                        <div
                                            className="abilityWrapper"
                                            key={index}
                                        >
                                            {ability.name}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="evolutionWrapper">
                                {firstForm && (
                                    <img
                                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${firstForm.id}.png`}
                                        alt={name}
                                        className="imgEvolution"
                                    />
                                )}
                                {secondForm && (
                                    <>
                                        <img
                                            src={`https://cdn-icons-png.flaticon.com/512/545/545682.png`}
                                            alt={"arrow"}
                                            className="arrowEvolution"
                                        />
                                        <img
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${secondForm[0].id}.png`}
                                            alt={name}
                                            className="imgEvolution"
                                        />
                                    </>
                                )}
                                {thirdForm && (
                                    <>
                                        <img
                                            src={`https://cdn-icons-png.flaticon.com/512/545/545682.png`}
                                            alt={"arrow"}
                                            className="arrowEvolution"
                                        />

                                        <img
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${thirdForm[0].id}.png`}
                                            alt={name}
                                            className="imgEvolution"
                                        />
                                    </>
                                )}
                            </div>
                        </div>
                        <div className="column baseInfoPokemon">
                            <div className="row rowIdName">
                                <p className="emphasized">#{id}</p>
                                <p>
                                    Nom :{" "}
                                    <span className="emphasized">{name}</span>
                                </p>
                            </div>
                            <img
                                src={fullSprite}
                                alt={name}
                                className="mainImg"
                            />
                            <p>BaseExperience: {baseExperience}</p>
                            {heldItems !== undefined ? (
                                <p>{`Held Items : ${heldItems}`}</p>
                            ) : null}
                            <p>Height : {height}</p>
                            <p>Weight : {weight}</p>
                            <h4>Types</h4>
                            <div className="row">
                                {types.map((type, index) => {
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
                    <div className="movesList">
                        <h4>Moves</h4>
                        {moves.map((move, index) => {
                            return (
                                <MovePokemon
                                    idMove={move.id}
                                    learning={move.learning}
                                />
                            );
                        })}
                        ;
                    </div>
                </div>
            )}
        </>
    );
}
