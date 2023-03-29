import * as React from 'react';

import './style.css';

export default function App() {
  const [pokimon, setPokimon] = React.useState([]);
  const [currentPg, setCurrentPg] = React.useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPg, setNexttPg] = React.useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [prevPg, setPrevPg] = React.useState(
    'https://pokeapi.co/api/v2/pokemon'
  );

  fetch(currentPg)
    .then((e) => {
      return e.json();
    })
    .then((e) => {
      setNexttPg(e.next);
      setPrevPg(e.previous)
      setPokimon(e.results.map((e) => e));
    });
  return;
}
