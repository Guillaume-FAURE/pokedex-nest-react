import arrowForward from "../assets/arrowForward.png";

type Props = {
    idPage: number;
    controller: AbortController;
    pokemonlist: Array<unknown>;
    setIdPage: Function;
};

export default function NavPage({
    idPage,
    controller,
    pokemonlist,
    setIdPage,
}: Props) {
    return (
        <div className="navPage">
            <div
                key={`arrowLeft${idPage}`}
                className={`arrowPage`}
                onClick={() => {
                    controller.abort();
                    pokemonlist.slice(0, pokemonlist.length);
                    idPage > 1 ? setIdPage(idPage - 1) : setIdPage(89 + idPage);
                }}
            >
                <img
                    src={arrowForward}
                    alt="arrowForward"
                    className="imageReverse"
                    width={`50px`}
                    height={`50px`}
                />
            </div>
            <h4>{idPage}/90</h4>
            <div
                key={`arrowRight${idPage}`}
                className={`arrowPage`}
                onClick={() => {
                    controller.abort();
                    pokemonlist.slice(0, pokemonlist.length);
                    idPage < 90
                        ? setIdPage(idPage + 1)
                        : setIdPage(idPage - 89);
                }}
            >
                <img
                    src={arrowForward}
                    alt="arrowBackward"
                    width={`50px`}
                    height={`50px`}
                />
            </div>
        </div>
    );
}
