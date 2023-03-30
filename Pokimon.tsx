import * as React from 'react';

export default function Pokimon({ name, img }) {
  //@ts-expect-error

  return (
    <>
      <div className="poki-container">
        {name}
        <img src={img} alt="" className="pokiImg" />
      </div>
    </>
  );
}
