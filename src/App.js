import React from 'react';
import AnagramChecker from './assements/AnagramChecker';
import NumberToWords from './assements/NumberToWord';
import MonetaryFormatter from './assements/MonetaryFormatter';
import ListItemMover from './assements/ListItemMover';
import BodmasEvaluator from './assements/BodmasEvaluator';

function App() {
  return (
    <div class="container">
      <h1 class=" mt-5">Diagonal Internship Assessment</h1>
      
      <div class="row mt-5">
        <div class="col">
          <AnagramChecker />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <BodmasEvaluator />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <ListItemMover />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <NumberToWords />
        </div>
      </div>

      <div class="row mt-5">
        <div class="col">
          <MonetaryFormatter/>
        </div>
      </div>

    </div>
  );
}

export default App;
