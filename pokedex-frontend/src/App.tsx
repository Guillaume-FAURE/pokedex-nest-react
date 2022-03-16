import "./App.css";
import { PokemonList } from "./routes/PokemonList";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div className="fullDataEmplacement"></div>
            <PokemonList />
        </div>
    );
}

export default App;
