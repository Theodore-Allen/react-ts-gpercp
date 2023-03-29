import * as React from 'react';
import PokiList from './PokiList';
import NextBtn from './nextBtn';
import './style.css';

export default function App() {
  const [pokimon, setPokimon] = React.useState([]);
  const [currentPg, setCurrentPg] = React.useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPg, setNexttPg] = React.useState();
  const [prevPg, setPrevPg] = React.useState();
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetch(currentPg)
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setNexttPg(e.next);
        setPrevPg(e.previous);
        setPokimon(e.results.map((e) => e));
      });
    setLoading(false);
  }, [currentPg]);
  function HandleNextPg() {
    setCurrentPg(nextPg);
  }
  function HandlePrevPg() {
    setCurrentPg(prevPg);
  }

  if (loading) {
    return <h1>Loading..</h1>;
  }
  return (
    //@ts-expect-error
    <>
      <PokiList pokimons={pokimon} />
      <NextBtn
        prev={prevPg ? HandlePrevPg : null}
        next={nextPg ? HandleNextPg : null}
      />
    </>
  );
}
