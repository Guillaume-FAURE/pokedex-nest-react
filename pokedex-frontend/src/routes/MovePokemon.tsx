import { useState, useEffect } from "react";
import "./MovePokemon.css";

type Props = {
    idMove: number;
    learning: string;
};

type DataPokemon = {
    id: number;
    name: string;
    accuracy: number;
    class: string;
    power: number;
    pp: number;
    priority: number;
    type: string;
};

export function MovePokemon({ idMove, learning }: Props) {
    const [data, setData] = useState<DataPokemon>();

    useEffect(() => {
        const fetcherMoves = async () => {
            if (idMove !== 0) {
                await fetch(`http://localhost:5000/moves/${idMove}`, {})
                    .then((res) => {
                        return res.json();
                    })
                    .then(
                        (result) => {
                            setData(result);
                        },
                        (error) => {
                            console.log(error);
                        }
                    );
            }
        };
        fetcherMoves();
    }, [idMove]);

    return (
        <div className={`moveData id${idMove}`}>
            <div className="row">
                <div className="nameMove moveDescription">{data?.name}</div>
                <div className="idMove moveDescription">id : {data?.id}</div>

                <div className="accuracyMove moveDescription">
                    accuracy :{" "}
                    {data?.accuracy !== undefined ? data.accuracy : "--"}
                </div>
                <div className="classMove moveDescription">{data?.class}</div>
                <div className="powerMove moveDescription">
                    power : {data?.power !== undefined ? data.power : "--"}
                </div>
                <div className="ppMove moveDescription">pp : {data?.pp}</div>
                <div className="typeMove moveDescription">{data?.type}</div>
                <div className="levelMove moveDescription">
                    method : {learning}
                </div>
            </div>
        </div>
    );
}
