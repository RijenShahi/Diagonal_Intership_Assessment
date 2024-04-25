import React, { useState } from 'react';

function NumberToWord() {
  function numberToWords(number) {
    const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    const teens = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
    const scales = ['', 'Thousand', 'Million', 'Billion', 'Trillion'];

    if (number === 0) {
      return 'Zero';
    }

    function convertGroup(number) {
      const hundreds = Math.floor(number / 100);
      const tensAndOnes = number % 100;
      let result = '';

      if (hundreds > 0) {
        result += ones[hundreds] + ' Hundred';
        if (tensAndOnes > 0) {
          result += ' ';
        }
      }

      if (tensAndOnes === 0) {
        // Do nothing
      } else if (tensAndOnes < 10) {
        result += ones[tensAndOnes];
      } else if (tensAndOnes < 20) {
        result += teens[tensAndOnes - 10];
      } else {
        const tensDigit = Math.floor(tensAndOnes / 10);
        const onesDigit = tensAndOnes % 10;
        result += tens[tensDigit];
        if (onesDigit > 0) {
          result += ' ' + ones[onesDigit];
        }
      }

      return result;
    }

    function splitNumberIntoGroups(number) {
      const groups = [];
      while (number > 0) {
        groups.push(number % 1000);
        number = Math.floor(number / 1000);
      }
      return groups;
    }

    const groups = splitNumberIntoGroups(number);
    let result = '';
    for (let i = groups.length - 1; i >= 0; i--) {
      const group = groups[i];
      if (group !== 0) {
        result += convertGroup(group) + ' ' + scales[i] + ' ';
      }
    }

    return result.trim();
  }

  function handleInputChange(event) {
    const inputNumber = event.target.value;
    // Check if the input is a valid number
    if (!isNaN(inputNumber)) {
      setNumber(inputNumber);
      setIsTyping(true);
    }
  }

  function handleConvertClick() {
    const words = numberToWords(number);
    setWordRepresentation(words);
    setIsTyping(false);
  }

  const [number, setNumber] = useState(0);
  const [wordRepresentation, setWordRepresentation] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  return (
    <div>
      <h2>Number to Words</h2>
      <input type="number" value={number} onChange={handleInputChange} />
      <button onClick={handleConvertClick}>Convert</button>
      {!isTyping && <p>{wordRepresentation}</p>}
    </div>
  );
}

export default NumberToWord;
