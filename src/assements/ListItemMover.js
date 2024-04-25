import React, { useState } from "react";

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

  const initialList = ["A", "B", "C", "D", "E"];
  const [list, setList] = useState([...initialList]);
  const [newPositions, setNewPositions] = useState(generateRandomPositions());
  const [previousPositions, setPreviousPositions] = useState([]);
  const [previousList, setPreviousList] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);

  return (
    <div className="container border border-dark rounded">
      <h2 className="mt-3 mb-3">3. List Item Mover</h2>
      <div className="row fs-4">
        <div className="col-4 text-center">
          <p><b>Initial List:</b></p>
          <ul className="list-group mb-3">
            {initialList.map((item, index) => (
              <li key={index} className="list-group-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
        {buttonClicked && (
          <>
            <div className="col-4 text-center">
              <p><b>Previous Positions:</b></p>
              <ul className="list-group mb-2">
                {previousList.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-4 text-center">
              <p><b>Updated Positions:</b></p>
              <ul className="list-group">
                {list.map((item, index) => (
                  <li key={index} className="list-group-item">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
      <div className="d-flex justify-content-center mb-3">
        <button onClick={handleMoveClick} className="btn btn-success fs-4">
          Move Items
        </button>
      </div>
    </div>
  );
}

export default ListItemMover;
