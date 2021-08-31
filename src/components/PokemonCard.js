import React from "react"

class PokemonCard extends React.Component {

    render() {
        return (
          <div className="card">
            <div className="card__container_image ">
              <figure>
                <img
                  src={this.props.pokemon.sprites.other["official-artwork"].front_default}
                  alt={this.props.pokemon.name}
                  className="card__image"
                />
              </figure>
            </div>
            <div className="card__container_info">
              <div className="info__basic">
                <h1>
                  <strong>{this.props.pokemon.name}</strong>
                  <span>
                    {this.props.pokemon.stats[0].base_stat} {this.props.pokemon.stats[0].stat.name}
                  </span>
                </h1>
                <span>{this.props.pokemon.base_experience} exp</span>
              </div>

              <ul>
                <li>
                  <p>
                    <strong>{this.props.pokemon.stats[1].base_stat}K</strong>
                  </p>
                  <span>{this.props.pokemon.stats[1].stat.name}</span>
                </li>
                <li>
                  <p>
                    <strong>{this.props.pokemon.stats[3].base_stat}K</strong>
                  </p>
                  <span>{this.props.pokemon.stats[3].stat.name}</span>
                </li>
                <li>
                  <p>
                    <strong>{this.props.pokemon.stats[2].base_stat}K</strong>
                  </p>
                  <span>{this.props.pokemon.stats[2].stat.name}</span>
                </li>
              </ul>
            </div>
          </div>
        );
    }

}

export default PokemonCard