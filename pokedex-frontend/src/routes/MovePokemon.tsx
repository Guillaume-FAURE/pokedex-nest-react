import { useState, useEffect } from "react";
import "./MovePokemon.css";

type AppProps = {
    idMove: number;
    learning: string;
};

export function MovePokemon({ idMove, learning }: AppProps) {
    const [id, setId] = useState(0);
    const [name, setName] = useState("");
    const [accuracy, setAccuracy] = useState(0);
    const [classAttack, setClassAttack] = useState("");
    const [power, setPower] = useState(0);
    const [pp, setPp] = useState(0);
    const [priority, setPriority] = useState(0);
    const [type, setType] = useState("");

    useEffect(() => {
        const fetcherMoves = async () => {
            if (idMove !== 0) {
                await fetch(`http://localhost:5000/moves/${idMove}`, {})
                    .then((res) => {
                        return res.json();
                    })
                    .then(
                        (result) => {
                            setId(result.id);
                            setName(result.name);
                            setAccuracy(result.accuracy);
                            setClassAttack(result.class);
                            setPower(result.power);
                            setPp(result.pp);
                            setPriority(result.priority);
                            setType(result.type);
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
                <div className="nameMove moveDescription">{name}</div>
                <div className="idMove moveDescription">id : {id}</div>

                <div className="accuracyMove moveDescription">
                    accuracy : {accuracy !== undefined ? accuracy : "--"}
                </div>
                <div className="classMove moveDescription">{classAttack}</div>
                <div className="powerMove moveDescription">
                    power : {power !== undefined ? power : "--"}
                </div>
                <div className="ppMove moveDescription">pp : {pp}</div>
                {/* <div className="priorityMove moveDescription">
                    priority : {priority}
                </div> */}
                <div className="typeMove moveDescription">{type}</div>
                <div className="levelMove moveDescription">
                    method : {learning}
                </div>
            </div>
        </div>
    );
}
