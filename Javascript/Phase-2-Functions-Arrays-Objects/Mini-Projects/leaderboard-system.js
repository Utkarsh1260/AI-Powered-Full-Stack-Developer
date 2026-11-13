let prompt = require("prompt-sync")();

let players = [
  { id:34, name: "rahul", score: 50 },
  {id:55, name: "aman", score: 90 },
  { id:60, name: "rohit", score: 30 },
  { id:23, name: "vijay", score: 75 },
];

function addPlayer() {
  let name = prompt("Enter Name: ");
  let score = Number(prompt("Enter Score: "));
  let id = Math.floor(Math.random() * 1000);
  players.push({ id, name, score });
}

//search player by name
function searchPlayer() {
  let name = prompt("Enter player name: ").toLocaleLowerCase();
  let plr = players.filter((n) => n.name === name);
  if (!plr) {
    console.log("Player not found");
    return;
  }
  console.log(plr);
}

//list players score greater than
function greaterScore() {
  let score = Number(prompt("Enter score: "));
  let plr = players.filter((n) => n.score > score);

  if (plr.length === 0) {
    console.log("No players found!");
    return;
  }

  console.log(plr);
}


//list players score less than
function lesserScore() {
  let score = Number(prompt("Enter score: "));
  let plr = players.filter((n) => n.score < score);
  if (plr.length===0) {
    console.log("Player not found");
    return;
  }
  console.log(plr);
}

//remove player
function removePlayer() {
  let name = prompt("Enter player name: ");
  let plr = players.findIndex((n) => n.name === name);
  if (!plr) {
    console.log("Player not found");
    return;
  }
  players.splice(plr, 1);
  console.log("Player removed successfully");
}

//update score
function updateScore(name) {
  let score = Number(prompt("Enter Newscore: "));
  let plr = players.find((n) => n.name === name);
  if (!plr) {
    console.log("Player not found");
    return;
  }

  plr.score = score;
  console.log("Score updated Successfully");
}

//list players rank wise
function rankWise() {
  let plr = players
    .sort((a, b) => b.score - a.score)
    .map((p, index) => {
      return {
        ...p,
        rank: index + 1,
      };
    });
  if (!plr) {
    console.log("Player not found");
    return;
  }

  console.log(plr);
}

// Display all players
function displayPlayers() {
  if (players.length === 0) {
    console.log("No players available!");
    return;
  }

  console.log(players);
}

let choice;

while (choice !== 0) {

  console.log(`
  ===== PLAYER MANAGEMENT SYSTEM =====

  1. Add Player
  2. Search Player
  3. Players With Greater Score
  4. Players With Lesser Score
  5. Remove Player
  6. Update Player Score
  7. Display All Players
  8. Display Players Rank-wise
  0. Exit

  ====================================
  `);

  choice = Number(prompt("Select an operation: "));

  switch (choice) {

    case 1:
      addPlayer();
      break;

    case 2:
      searchPlayer();
      break;

    case 3:
      greaterScore();
      break;

    case 4:
      lesserScore();
      break;

    case 5:
      removePlayer();
      break;

    case 6:
let name=prompt("Enter player name: ").toLowerCase();
      updateScore(name);
      break;

    case 7:
      displayPlayers();
      break;

    case 8:
      rankWise();
      break;

    case 0:
      console.log("Exiting Player Management System. Goodbye!");
      break;

    default:
      console.log("Invalid choice! Please try again.");
  }
}