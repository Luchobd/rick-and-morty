import React from "react";
import "../stylesheet/Principal.css";

function Principal() {
  return (
    <header className="header__container">
      <h1 className="principal__title">Rick and Morty API (Hooks)</h1>

      <form action="" className="form__input">
        <input type="text" placeholder="rick and morty" className="inputText" />
        <button type="button" className="btn__search">
          search
        </button>
      </form>
    </header>
  );
}

export default Principal;
