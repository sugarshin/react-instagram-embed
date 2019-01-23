import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

const main = () => {
  const meta = document.createElement('meta');
  meta.setAttribute('name', 'viewport');
  meta.setAttribute('content', 'width=device-width, initial-scale=1');
  document.head.appendChild(meta);

  const root = document.body.appendChild(document.createElement('div'));
  ReactDOM.render(<App />, root);
};

main();
