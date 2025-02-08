import O from "../assets/O.png";
import X from "../assets/X.png";
import { useState } from "react";
import "./Playground.css";

const Playground = () => {
  const [board, setBoard] = useState<string[]>(Array(9).fill(""));
  const [player, setPlayer] = useState<number>(1);
  const [winner, setWinner] = useState<number>(0);
  const [history, setHistory] = useState<number[]>(Array(3).fill(0));
  const winPatterns = [
    // rows:
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //columns:
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal:
    [0, 4, 8],
    [2, 4, 6],
  ];

  const handleResult = (board: string[]) => {
    for (let pattern of winPatterns) {
      const [a, b, c] = [...pattern]; // get 3 positions from 1 win pattern
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        // if all 3 win positions on the board share the same symbol => win
        if (board[a] === "X") {
          setWinner(1);
          return 1;
        } else if (board[a] === "O") {
          setWinner(2);
          return 2;
        }
      }
      setPlayer(player === 1 ? 2 : 1);
    }
    if (!board.includes("") && winner === 0) {
      // if all positions are filled but winner hasn't been decided => draw
      setWinner(3);
      return 3;
    }
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) {
      return;
    } else {
      const updatedBoard = [...board];
      updatedBoard[index] = player === 1 ? "X" : "O";
      setBoard(updatedBoard);
      handleResult(updatedBoard);
    }
  };

  const handleNewGame = () => {
    handleHistory();
    setBoard(Array(9).fill(""));
    setWinner(0);
    setPlayer(1);
  };

  const handleHistory = () => {
    const updatedHistory = [...history];
    console.log(updatedHistory);
    console.log(winner);
    switch (winner) {
      case 1:
        updatedHistory[1]++;
        setHistory(updatedHistory);
        break;

      case 2:
        updatedHistory[2]++;
        setHistory(updatedHistory);
        break;

      case 3:
        updatedHistory[0]++;
        setHistory(updatedHistory);
        break;
    }
  };

  return (
    <div className="container">
      <div className="header">
        {winner !== 0 ? (
          winner !== 3 ? (
            <h1 className={`winner-${winner}`}>
              Player {winner}{" "}
              {(winner === 1 && `(X)`) || (winner === 2 && "(O)")} is the
              winner!
            </h1>
          ) : (
            <h1 className={`winner-${winner}`}>It's a draw!</h1>
          )
        ) : (
          <h1 className="title">Tic Tac Toe</h1>
        )}
        {player && winner === 0 ? (
          <h2 className={`turn-${player}`}>Player {player} Turn</h2>
        ) : (
          <h2 className={`turn-ended`}>The game has ended</h2>
        )}
      </div>
      <div className="body">
        <div className="board">
          {board.map((cell, index) => (
            <div
              key={index}
              className="cell"
              onClick={() => handleClick(index)}
            >
              {(cell === "X" && <img src={X} alt="X"></img>) ||
                (cell === "O" && <img src={O} alt="O"></img>)}
            </div>
          ))}
        </div>
      </div>
      <div className="footer">
        <button className="new" onClick={() => handleNewGame()}>
          New game
        </button>
        <div className="history">
          <h3>
            <span className="history-player-1">Player 1 win:</span> {history[1]}{" "}
            {history[1] > 1 ? "times" : "time"}
          </h3>
          <h3>
            <span className="history-player-2">Player 2 win:</span> {history[2]}{" "}
            {history[2] > 1 ? "times" : "time"}
          </h3>
          <h3>
            <span className="history-draw">Draw:</span> {history[0]}{" "}
            {history[0] > 1 ? "times" : "time"}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Playground;
