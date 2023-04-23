import { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import Card from "../card/Card";
import "./container.css";

export default function ContainerRickAndMorty({ count }) {
  const [listCard, setListCard] = useState(null);
  useEffect(() => {
    let ignore = false;
    fetch(`https://rickandmortyapi.com/api/character/?page=${count}`)
      .then((list) => list.json())
      .then((json) => {
        if (!ignore) {
          setListCard(json.results);
        }
      });

    return () => {
      ignore = true;
    };
  }, [count]);

  return (
    <main className="container">
      {listCard === null ? (
        <Loader />
      ) : (
        listCard.map((list) => (
          <Card
            key={list.id}
            name={list.name}
            avatar={list.image}
            gender={list.gender}
            species={list.species}
            status={list.status}
            origin={list.origin}
          />
        ))
      )}
    </main>
  );
}
