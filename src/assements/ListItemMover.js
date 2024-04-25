import React, { useState } from 'react';

function ListItemMover() {
  function generateRandomPositions() {
    const positions = Array.from({ length: initialList.length }, (_, i) => i);
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }
    return positions;
  }

  function moveItems(list, newPositions) {
    const newList = newPositions.map((position) => list[position]);
    return newList;
  }

  function handleMoveClick() {
    const newList = moveItems(list, newPositions);
    setPreviousPositions([...newPositions]);
    setPreviousList([...list]);
    setList(newList);
    const updatedPositions = generateRandomPositions();
    setNewPositions(updatedPositions);
    setButtonClicked(true);
  }

  const initialList = ['A', 'B', 'C', 'D', 'E'];
  const [list, setList] = useState([...initialList]);
  const [newPositions, setNewPositions] = useState(generateRandomPositions());
  const [previousPositions, setPreviousPositions] = useState([]);
  const [previousList, setPreviousList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div>
      <h2>List Item Mover</h2>
      <p>Initial List:</p>
      <ul>
        {initialList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button onClick={handleMoveClick}>Move Items</button>
      {buttonClicked && (
        <>
          <p>Previous Positions:</p>
          <ul>
            {previousList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p>Updated Positions:</p>
          <ul>
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default ListItemMover;
