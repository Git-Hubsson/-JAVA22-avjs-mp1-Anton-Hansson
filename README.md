# Rock-Paper-Scissors Game with Highscore Tracking
## Overview
This project is a web-based implementation of the classic game Rock-Paper-Scissors with an integrated highscore system. Players can choose their names, select from rock, paper, or scissors, and compete against a computer opponent. The game keeps track of the player's and the computer's scores, updating them as rounds progress.

## Features
User Interaction: Players enter their names and select their weapons (rock, paper, or scissors) for each round.

Highscore System: Integrates with a Firebase database to record and compare high scores.

Dynamic Gameplay: Each round randomly generates the computer's weapon choice, providing a unique challenge each time.

Score Tracking: Real-time updates of player and computer scores.

Visual Feedback: Utilizes images to represent weapon choices and animate game outcomes.
## Technologies Used
HTML/CSS: For structuring and styling the game interface.

JavaScript: To implement game logic and handle user interactions.

Firebase: For storing and retrieving highscore data.
## Setup
Clone the Repository: git clone https://github.com/Git-Hubsson/-JAVA22-avjs-mp1-Anton-Hansson.git

Install Dependencies: Ensure all necessary dependencies are installed.

Launch the Game: Open the HTML file in a web browser to start playing.
## Highscore Module
compare: Compares the current score with the lowest highscore in the database.

put: Updates the highscore list if the player's score is higher than the existing scores.

get: Retrieves and displays the highscore list.
## Game Flow
The game starts with the player entering their name.

The player selects one of the three weapons: rock, paper, or scissors.

The game displays the chosen weapons and the outcome of each round.

Scores are updated, and the highscore is checked at the end of each game.
