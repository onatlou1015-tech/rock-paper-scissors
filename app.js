// Wait for the DOM to be fully loaded
let win = 0;
let lose = 0;
let tie = 0;
document.addEventListener('DOMContentLoaded', function() {


    
    // Get the game container
    const gameContainer = document.querySelector('.game');
    
    // Get the score container
    const scoreContainer = document.querySelector('.score');

    
    // Get all the buttons
    const rockBtn = document.querySelector('.rock');
    const paperBtn = document.querySelector('.paper');
    const scissorsBtn = document.querySelector('.scissors');
    
    // Function to update the game display with images
    function updateGame(playerChoice) {
        // Clear everything inside the game container
        gameContainer.innerHTML = '';
        
        // Create user div with class 'user'
        const userDiv = document.createElement('div');
        userDiv.className = 'user';
        
        // Create computer div with class 'comp'
        const compDiv = document.createElement('div');
        compDiv.className = 'comp';
        
        // Create img elements
        const userImg = document.createElement('img');
        const compImg = document.createElement('img');
        
        // Style the images to fit properly
        userImg.style.width = '100%';
        userImg.style.height = '100%';
        userImg.style.objectFit = 'cover';
        compImg.style.width = '100%';
        compImg.style.height = '100%';
        compImg.style.objectFit = 'cover';
        
        // Set user image based on choice
        if (playerChoice === 'rock') {
            userImg.src = 'img/rock-user.png';
            userImg.alt = 'Rock';
        } else if (playerChoice === 'paper') {
            userImg.src = 'img/paper-user.png';
            userImg.alt = 'Paper';
        } else if (playerChoice === 'scissors') {
            userImg.src = 'img/scissor-user.png';
            userImg.alt = 'Scissors';
        }
        
        // Random choice for computer
        const choices = ['rock', 'paper', 'scissors'];
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        
        // Set computer image
        if (computerChoice === 'rock') {
            compImg.src = 'img/rock-comp.png';
            compImg.alt = 'Rock';
        } else if (computerChoice === 'paper') {
            compImg.src = 'img/paper-comp.png';
            compImg.alt = 'Paper';
        } else if (computerChoice === 'scissors') {
            compImg.src = 'img/scissor-comp.png';
            compImg.alt = 'Scissors';
        }

        if (playerChoice === computerChoice) {
            tie++;
        } else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
                   (playerChoice === 'paper' && computerChoice === 'rock') ||
                   (playerChoice === 'scissors' && computerChoice === 'paper')) {
            win++;
        } else {
            lose++;
        }

        // Update the score display
        document.getElementById('wins').textContent = win;
        document.getElementById('losses').textContent = lose;
        document.getElementById('ties').textContent = tie;
        document.getElementById('totalGames').textContent = win + lose + tie;

        // Append images to their respective divs
        userDiv.appendChild(userImg);
        compDiv.appendChild(compImg);
        
        // Append user and computer divs to game container
        gameContainer.appendChild(userDiv);
        gameContainer.appendChild(compDiv);
    }
    
    // Add click event listeners to buttons
    rockBtn.addEventListener('click', function() {
        updateGame('rock');
    });
    
    paperBtn.addEventListener('click', function() {
        updateGame('paper');
    });
    
    scissorsBtn.addEventListener('click', function() {
        updateGame('scissors');
    });
    
});