import { useState, useEffect, useCallback } from "react";
import "./SmallData.css";
import { NavLink } from "react-router-dom";
import { Triangle } from "react-loader-spinner";

type AppProps = {
    idPokemon: number;
};

export function SmallDataPokemon({ idPokemon }: AppProps) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [sprite, setSprite] = useState("");
    const [types, setTypes] = useState([{ name: "", description: "" }]);
    const [spinnerLoading, setSpinnerLoading] = useState(true);

    useEffect(() => {
        const fetcher = async () => {
            await fetch(`http://localhost:5000/pokemon/${idPokemon}`, {})
                .then((res) => {
                    return res.json();
                })
                .then(
                    (result) => {
                        setId(result.id);
                        setName(result.name);
                        setSprite(result.littleSprite);
                        setTypes(result.types);
                        if (idPokemon !== 0) {
                            setSpinnerLoading(false);
                        }
                    },
                    (error) => {
                        console.log(error);
                    }
                );
        };
        fetcher();
    }, [idPokemon]);

    return (
        <>
            {spinnerLoading ? (
                <div>
                    <Triangle color="#00BFFF" height={100} width={100} />
                </div>
            ) : (
                <NavLink
                    key={`${idPokemon}`}
                    className={`${name} smallDataLine`}
                    to={`/pokemon/${idPokemon}`}
                    target="_blank"
                >
                    <div className="idNameWrapper">
                        <div className="idWrapper smallData">
                            <h4>Id : {id}</h4>
                        </div>
                        <div className="nameWrapper smallData">
                            <h4>Name : {name}</h4>
                        </div>
                    </div>
                    <img
                        className="smallData imgSmall"
                        src={sprite}
                        alt={name}
                    />
                    <div className="smallTypeWrapper">
                        <h4>Types :</h4>
                        <div className="typeColumn">
                            {types.map((type, index) => {
                                return (
                                    <div id={`${index}`} className="type">
                                        {type.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </NavLink>
            )}
        </>
    );
}
