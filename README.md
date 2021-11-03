# Pig Dice

#### By _Liz Thomas and Curtis Brooks_

What will happen when a user clicks "Play"?
- Each user will have a turn to roll dice
- On each turn, user will choose to roll dice or hold.
- If user rolls, they get points for 2-6 and can keep rolling, adding to the previous rolls, but if they roll a 1, they lose the points from this turn and it's the next players turn.
- During rolls, user can hold points to their total score before rolling a 1 and the turn ends.
- First player with a total score over 100 wins! Yahoo!


What objects will you need?
 - Dice (currentRoll)
 - PlayerScore (turnTotal, totalScore)

What key-value pairs will each object need to contain in order for the game to work?
- Look above

What functions?
- Roll: Math.floor(Math.random(1,6))
- Scoring: add points to currentPoints based on currentRoll, adds currentPoints to turnTotal, if 1 is rolled, turn is over and turnTotal = 0
- Total Score: adds turnTotal to totalScore, then next turn
- Player Turn: main function 

How will these be triggered throughout the gameplay?
- branching statements


How will information be collected from the user? How will it be displayed?
- two buttons, roll or hold

TITLE

Player1: Current Score                    
Player1: Total Score

Current Roll: 6

Buttons: Roll or Hold

When winner: Yahoo! Player1 wins!


When you have a broad overview of how you want to build your game, identify the simplest behavior, and perhaps what behaviors to tackle after that. Remember to start simple and work one step at a time.

_____________________________

TESTS

Describe: roll()

Test: It will generate a number 1-6 and return that number
Code: Roll()  
Expected Output: 1

Describe: scoring()

Test: It will return values based on currentRoll
Code: scoring(2)  
Expected Output: 2

Test: It will add currentRoll value to turnTotal
Code: scoring(2)  
Expected Output: turnTotal + 2

Test: It will set turnTotal to 0 if 1 is rolled
Code: scoring(1)  
Expected Output: turnTotal = 0

Test: It will end the turn if player chooses to hold or a 1 is rolled
Code: scoring(1 or 2-6)  
Expected Output: next turn

Describe totalScore()

Test: It will add turnTotal to totalScore
Code: totalScore(1)  
Expected Output: totalScore += turnTotal

Describe playerTurn()

Test: It will call totalScore() if player clicks hold button and return totalScore
Code: playerTurn()
Expected Output: totalScore








