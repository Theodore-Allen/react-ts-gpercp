import * as React from 'react';

import './style.css';

export default function App() {
  fetch('https://pokeapi.co/api/v2/pokemon').then((e) => console.log(e));

  return null;
}
