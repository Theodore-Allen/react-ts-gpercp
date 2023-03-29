import * as React from 'react';
import Pokimon from './Pokimon';
export default function PokiList({ pokimons, prev, next }) {
  return pokimons.map((e) => {
    return <Pokimon name={e.name} />;
  });
}
