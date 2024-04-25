import React, { useState } from 'react';

function AnagramChecker() {
  function checkAnagrams() {
    if (string1.trim() !== '' && string2.trim() !== '') {
      const sortedString1 = string1.replace(/\s/g, '').toLowerCase().split('').sort().join('');
      const sortedString2 = string2.replace(/\s/g, '').toLowerCase().split('').sort().join('');
      setIsAnagram(sortedString1 === sortedString2);
      setDisplayOutput(true);
    } else {
      setDisplayOutput(false);
    }
  }

  function handleInputChange(event, stringNum) {
    const value = event.target.value;
    if (stringNum === 1) {
      setString1(value);
    } else {
      setString2(value);
    }
    setDisplayOutput(false);
  }

  function handleCheckClick() {
    checkAnagrams();
  }

  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [isAnagram, setIsAnagram] = useState(false);
  const [displayOutput, setDisplayOutput] = useState(false);

  return (
    <div>
      <h2>Anagram Checker</h2>
      <input type="text" value={string1} onChange={function(e) { handleInputChange(e, 1) }} placeholder="Enter first string" />
      <input type="text" value={string2} onChange={function(e) { handleInputChange(e, 2) }} placeholder="Enter second string" />
      <button onClick={function() { handleCheckClick() }}>Check Anagram</button>
      {displayOutput && <p>{isAnagram ? 'The strings are anagrams.' : 'The strings are not anagrams.'}</p>}
    </div>
  );
}

export default AnagramChecker;
