import "./App.css";
import { PokemonListPage } from "./routes/PokemonListPage";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <PokemonListPage />
        </div>
    );
}

export default App;
