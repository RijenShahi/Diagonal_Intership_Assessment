import React, { useState } from "react";

function AnagramChecker() {
  const [string1, setString1] = useState("");
  const [string2, setString2] = useState("");
  const [isAnagram, setIsAnagram] = useState(false);
  const [displayOutput, setDisplayOutput] = useState(false);

  const checkAnagrams = () => {
    const trimmedString1 = string1.trim().toLowerCase().replace(/\s/g, "");
    const trimmedString2 = string2.trim().toLowerCase().replace(/\s/g, "");

    if (trimmedString1 !== "" && trimmedString2 !== "") {
      const sortedString1 = trimmedString1.split("").sort().join("");
      const sortedString2 = trimmedString2.split("").sort().join("");
      setIsAnagram(sortedString1 === sortedString2);
      setDisplayOutput(true);
    } else {
      setDisplayOutput(false);
    }
  };

  const handleInputChange = (event, stringNum) => {
    const value = event.target.value;
    if (stringNum === 1) {
      setString1(value);
    } else {
      setString2(value);
    }
    setDisplayOutput(false);
  };

  const handleCheckClick = () => {
    checkAnagrams();
  };

  return (
    <div className="container border border-dark rounded">
      <h2 className="mt-3 mb-3">1. Anagram Checker</h2>
      <div className="row mb-2">
        <div className="col">
          <input
            type="text"
            value={string1}
            onChange={(e) => handleInputChange(e, 1)}
            className="form-control mb-2 text-center fs-4"
            placeholder="Enter first string"
          />
        </div>
        <div className="col">
          <input
            type="text"
            value={string2}
            onChange={(e) => handleInputChange(e, 2)}
            className="form-control mb-2 text-center fs-4"
            placeholder="Enter second string"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center mb-2">
        <button
          onClick={handleCheckClick}
          className="btn btn-success btn-sm fs-4"
        >
          Check Anagram
        </button>
      </div>
      {displayOutput && (
        <p className="mt-2 fs-4 text-center">
          {isAnagram
            ? "The strings are anagrams."
            : "The strings are not anagrams."}
        </p>
      )}
    </div>
  );
}

export default AnagramChecker;
