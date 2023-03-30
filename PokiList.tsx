import * as React from 'react';
import Pokimon from './Pokimon';
export default function PokiList({ pokimons, prev, next }) {
  return pokimons.map((e) => {
     const  [img, setImg] = React.useState();
    fetch(e.url).then(e => {return e.json()}).then(e => setImg(e.sprites.front_default))
    
    return <Pokimon name={e.name} img={img} />;
  });
}
