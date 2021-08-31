import React from "react";
import "./css/styles.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import logo from "../images/pokemon-logo.svg";
import Loader from "react-loader-spinner";
import PokemonCard from "./PokemonCard";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoader: false,
      data: [],
      limit: 9,
    };
  }

  componentDidMount() {
    this.pokemonsFetch()
  }

  /**
   * Realiza la peticion para la
   * carga del grupo de pokemones
   */
  async pokemonsFetch() {

    this.setState({
      isLoader: true,
      error: null
    })

    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${this.state.limit}`);
    const dataToJson = await data.json();
    const dataPromises = dataToJson.results.map((pokemon) => this.pokemonFetch(pokemon.url));

    try {
      await Promise.all(dataPromises).then((data) => {
        this.setState({
          data,
          limit: this.state.limit + 9,
          isLoader: false
        });
      });
    } catch (error) {
      this.setState({
        error: error
      });
    }
  }

  /**
   * Realiza la peticion a la API
   * para traer la informacion
   * de cada pokemon de forma
   * individual
   * 
   * @param {string} url 
   * @returns PokemonToJson
   */
  async pokemonFetch(url) {
    const pokemon = await fetch(`${url}`);
    const pokemonToJson = await pokemon.json();
    return pokemonToJson;
  }

  render() {
    return (
      <div className="container">
        <header>
          <a
            href="https://github.com/Alejandro-Repizo/Poke-api-react.git"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <figure>
            <img className="logo" src={logo} alt="logo" width="180" />
          </figure>
        </header>

        <section>
          <div className="subcontainer">
            {this.state.data.map((pokemon) => (
              <PokemonCard pokemon={pokemon} key={pokemon.id} />
            ))}

            <div className="button__container">
              <button onClick={() => this.pokemonsFetch()} className="button">
                {!this.state.isLoader ? (
                  "Load more"
                ) : (
                  <Loader type="ThreeDots" color="#FFFFFF" height={20} width={70} />
                )}
              </button>
            </div>
            
          </div>
        </section>
      </div>
    );
  }
}

export default App;
