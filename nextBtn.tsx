import * as React from 'react';

export default function NextBtn({ prev, next }) {
  return (
    <div className="nextButtons">
      {prev && <button onClick={prev}>prev</button>}
      {next && <button onClick={next}>Next</button>}
    </div>
  );
}
