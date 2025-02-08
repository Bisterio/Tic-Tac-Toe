# Tic Tac Toe

This is a simple **Tic Tac Toe** web application built with **React and TypeScript**.

## Game UI Overview
### **Title**
- Displays the game name: **"Tic Tac Toe"**.
- Updates to **"Player [] is the winner!"** or **"It's a draw!"** when the game ends.

### **Turn Indicator**
- Shows the current player's turn.
- Changes to **"The game has ended"** after the match finishes.

### **Game Board**
- A 3x3 grid where players take turns clicking on cells.
- **Player 1 (X)** goes first, followed by **Player 2 (O)**.
- The game ends when:
  - A player places **three consecutive symbols** in a row, column, or diagonal first is the winner of the game.
  - In case the board is **fully filled** but no winner, the game is considered a draw game.

### **New Game Button**
- Resets the board.
- Updates the score history.

### **Score History**
- Tracks the number of games won by each player.
- Counts the number of **draws**.
