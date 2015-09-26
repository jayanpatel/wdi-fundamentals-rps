    ////////////////////////////////////////////////
    /*   Provided Code - Please Don't Edit   */
    ////////////////////////////////////////////////
        
    'use strict';

    function getInput() {
        console.log("Please choose either 'rock', 'paper', or 'scissors'.")
        return prompt();
    }
    function randomPlay() {
        var randomNumber = Math.random();
        if (randomNumber < 0.33) {
            return "rock";
        } else if (randomNumber < 0.66) {
            return "paper";
        } else {
            return "scissors";
        }
    }
    ////////////////////////////////////////////////
    /*           Write Your Code Below            */
    ////////////////////////////////////////////////

    function getPlayerMove(move) {
        if(move == null || move == undefined)
          return getInput()
        else
          return move
    }

    function getComputerMove(move) {
      // Write an expression that operates on a variable called `move`
      // If a `move` has a value, your expression should evaluate to that value.
      // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
        
      if(move == null || move == undefined)
        return randomPlay();
      else
        return move;
    }

    function getWinner(playerMove, computerMove) {
        var winner;
        
        if((playerMove === 'rock' && computerMove === 'scissors') || (playerMove === 'scissors' && computerMove === 'paper') || (playerMove === 'paper' && computerMove === 'rock'))
        {
            winner = 'player';
        }

        else if((computerMove === 'rock' && playerMove === 'scissors') || (computerMove === 'scissors' && playerMove === 'paper') || (computerMove === 'paper' && playerMove === 'rock'))
        {
            winner = 'computer';
        }
        else
        {
            winner = 'tie';
        }
        return winner;
    }

    function playToFive() {
      console.log('Let\'s play Rock Paper Scissors');
      var playerWins = 0;
      var computerWins = 0;
      // This function should continue to play Rock Paper Scissors until either the
      // player or the computer has won five times.
      // After each 'round', display some text in the console indicating who played
      // what, who won, and what the current scoreboard looks like.
      // For example,

      /* YOUR CODE HERE */

      while((playerWins <= 5) || (computerWins <= 5)) 
      {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);

        if(winner == 'player')
          playerWins++;
        
        if(winner == 'computer')
          computerWins++;

        console.log('Player chose ' + playerMove + ' while Computer chose ' + computerMove);
        console.log('The score is currently player: ' + playerWins + ' to computer: ' + computerWins + '\n');
      }

      return [playerWins, computerWins];
    }
