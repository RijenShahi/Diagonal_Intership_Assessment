import React, { useState } from "react";

function MonetaryFormatter() {
  function formatMonetaryValue(number) {
    if (isNepali) {
      const parts = number.toFixed(2).toString().split(".");
      const integerPart = parts[0];

      let formattedIntegerPart = "";

      // Format the first three digits
      const firstThreeDigits = integerPart.substring(0, integerPart.length - 3);
      if (integerPart.length < 3 || integerPart.length === 3) {
        formattedIntegerPart +=
          firstThreeDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "";
      } else {
        formattedIntegerPart +=
          firstThreeDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ",";
      }

      // Format the remaining digits with commas every two digits
      const remainingDigits = integerPart.substring(integerPart.length - 3);
      formattedIntegerPart += remainingDigits.replace(
        /\B(?=(\d{2})+(?!\d))/g,
        ""
      );

      return formattedIntegerPart + "." + parts[1];
    } else {
      const formatted = number.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return formatted;
    }
  }

  const [number, setNumber] = useState("");
  const [isNepali, setIsNepali] = useState(false);

  function handleInputChange(event) {
    setNumber(parseFloat(event.target.value));
  }

  function handleToggleUnits() {
    setIsNepali(!isNepali);
  }

  return (
    <div className="container border border-dark rounded p-4 mb-3">
      <h2 className="mt-3 mb-3">5. Monetary Formatter</h2>
      <div className="mb-3">
        <input
          type="number"
          value={number}
          onChange={handleInputChange}
          className="form-control mb-2 text-center fs-4"
          placeholder="Enter amount"
        />
      </div>
      <div className="d-flex justify-content-center mb-3">
        <button
          onClick={handleToggleUnits}
          className="btn btn-success fs-4"
          type="button"
        >
          Toggle Units
        </button>
      </div>
      {number && (
        <div className="text-center fs-4">
          <p className="mt-3">{formatMonetaryValue(number)}</p>
          <p ><strong>Format: {isNepali ? "Nepali" : "International"}</strong></p>
        </div>
      )}
    </div>
  );
}

export default MonetaryFormatter;
