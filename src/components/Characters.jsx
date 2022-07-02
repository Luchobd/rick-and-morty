import React, { useEffect, useState } from "react";
import Character from "./Character";
import Spinner from "./Spinner";

function ClickPage(props) {
  return (
    <div className="all">
      <div>
        <button onClick={() => props.update(props.current + 1)}>Next</button>
      </div>
      <div>
        <p style={{ fontSize: "2rem" }}>Current:{props.current}</p>
      </div>
      <div>
        <button
          onClick={
            props.current < 2
              ? () => props.update(props.current)
              : () => props.update(props.current - 1)
          }
        >
          Back
        </button>
      </div>
    </div>
  );
}

function Characters() {
  const [characterList, setCharacterList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function fetchData() {
      const url = await fetch(
        `https://rickandmortyapi.com/api/character?page=${pages}`
      );
      const data = await url.json();
      setCharacterList(data.results);
      setLoading(false);
    }
    fetchData();
  }, [pages]);
  return (
    <div>
      <ClickPage current={pages} update={setPages} />

      {loading ? (
        <Spinner />
      ) : (
        <div>
          {characterList.map((character) => {
            return (
              <div key={character.id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Characters;
