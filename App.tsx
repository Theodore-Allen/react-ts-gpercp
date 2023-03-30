import * as React from 'react';
import PokiList from './PokiList';
import NextBtn from './nextBtn';
import './style.css';

export default function App() {
  const controller = new AbortController();
  const { signal } = controller;

  const [pokimon, setPokimon] = React.useState([]);
  const [currentPg, setCurrentPg] = React.useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [nextPg, setNexttPg] = React.useState();
  const [prevPg, setPrevPg] = React.useState();
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    setLoading(true);

    fetch(currentPg, { signal })
      .then((e) => {
        return e.json();
      })
      .then((e) => {
        setNexttPg(e.next);
        setPrevPg(e.previous);
        setPokimon(e.results.map((e) => e));
      });
  }, [currentPg]);
  React.useEffect(() => {
    setLoading(false);
  }, [pokimon]);
  function HandleNextPg() {
    setCurrentPg(nextPg);
  }
  function HandlePrevPg() {
    setCurrentPg(prevPg);
  }

  if (loading === true) {
    return (
      <div className="spinner">
        <div className="loadingio-spinner-spinner-hpuc1q5sojp">
          <div className="ldio-i9cgptvqnca">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    //@ts-expect-error
    <>
      <div className="container">
      <PokiList pokimons={pokimon} />
      </div>
      
      <NextBtn
          prev={prevPg ? HandlePrevPg : null}
          next={nextPg ? HandleNextPg : null}
        />
       
  
    </>
  );
}
