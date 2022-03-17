import { PokemonData } from "../routes/FullDataPokemon";

type Props = {
    data: PokemonData | undefined;
};
export default function EvolutionWrapper({ data }: Props) {
    return (
        <div className="evolutionWrapper">
            {data?.firstForm && (
                <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.firstForm.id}.png`}
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
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.secondForm[0].id}.png`}
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
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.thirdForm[0].id}.png`}
                        alt={data?.name}
                        className="imgEvolution"
                    />
                </>
            )}
        </div>
    );
}
