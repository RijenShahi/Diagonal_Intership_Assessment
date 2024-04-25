import React, { useState } from "react";
import * as math from "mathjs";

function BodmasEvaluator() {
  function evaluateExpression() {
    try {
      const evaluatedResult = math.evaluate(expression);
      setResult(evaluatedResult);
    } catch (error) {
      setResult("Invalid Expression");
    }
  }

  function handleInputChange(event) {
    setExpression(event.target.value);
  }

  function handleEvaluateClick() {
    evaluateExpression();
  }

  const [expression, setExpression] = useState("3 * (2 + 4) + 5^2");
  const [result, setResult] = useState("");

  return (
    <div className="container border border-dark rounded">
      <h2 className="mt-3 mb-3">2. BODMAS Evaluator</h2>
      <input
        type="text"
        value={expression}
        onChange={handleInputChange}
        placeholder="Enter expression"
        className="form-control mb-2 text-center fs-4"
      />
      <div className="d-flex justify-content-center mb-2">
        <button
          onClick={handleEvaluateClick}
          className="btn btn-success btn-sm fs-4"
        >
          Evaluate
        </button>
      </div>
      <p className="mt-2 fs-3 text-center">Result: {result}</p>
    </div>
  );
}

export default BodmasEvaluator;
