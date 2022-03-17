import { PokemonData } from "../routes/FullDataPokemon";

type Props = {
    data: PokemonData | undefined;
};

export default function StatsPokemon({ data }: Props) {
    return (
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
                            width: `${data && data.stats.hp / 2.55}%`,
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
                            width: `${data && data.stats.attack / 2.55}%`,
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
                            width: `${data && data.stats.defense / 2.55}%`,
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
                                data && data.stats.specialAttack / 2.55
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
                                data && data.stats.specialDefense / 2.55
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
                            width: `${data && data.stats.speed / 2.55}%`,
                            height: `100%`,
                            backgroundColor: `#f53006`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
}
