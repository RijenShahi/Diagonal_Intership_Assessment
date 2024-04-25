import React, { useState } from 'react';
import * as math from 'mathjs';

function BodmasEvaluator() {
  function evaluateExpression() {
    try {
      const evaluatedResult = math.evaluate(expression);
      setResult(evaluatedResult);
    } catch (error) {
      setResult('Invalid Expression');
    }
  }

  function handleInputChange(event) {
    setExpression(event.target.value);
  }

  function handleEvaluateClick() {
    evaluateExpression();
  }

  const [expression, setExpression] = useState('3 * (2 + 4) + 5^2');
  const [result, setResult] = useState('');

  return (
    <div>
      <h2>BODMAS Evaluator</h2>
      <input type="text" value={expression} onChange={handleInputChange} placeholder="Enter expression" />
      <button onClick={handleEvaluateClick}>Evaluate</button>
      <p>Result: {result}</p>
    </div>
  );
}

export default BodmasEvaluator;
