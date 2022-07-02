import React from "react";
import "../stylesheet/Character.css";
function Character(props) {
  return (
    <section className="card__container">
      <picture>
        <img
          src={props.character.image}
          alt={props.character.name}
          className=""
        />
      </picture>
      <article>
        <h2>{props.character.name}</h2>

        <p>{props.character.species}</p>
        <p>{props.character.gender}</p>
        <p>{props.character.origin.name}</p>
      </article>
    </section>
  );
}

export default Character;
