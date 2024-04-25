// App.js
import React from 'react';
import AnagramChecker from './assements/AnagramChecker';
import NumberToWords from './assements/NumberToWord';
import MonetaryFormatter from './assements/MonetaryFormatter';
import ListItemMover from './assements/ListItemMover';
import BodmasEvaluator from './assements/BodmasEvaluator';

function App() {
  return (
    <>
      <h1>Diagonal Internship Assessment</h1>
      <AnagramChecker />
      <BodmasEvaluator />
      <ListItemMover />
      <NumberToWords />
      <MonetaryFormatter/>
    </>
  );
}

export default App;
