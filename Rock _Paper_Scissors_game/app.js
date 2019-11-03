let userScore = 0;
let computerScore = 0;
// DOM variables
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result>p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice () {
	const choices = ["r","p","s"];
	const randomNumber = (Math.floor(Math.random()*3));
	return choices[randomNumber];
}

function convertToWord(letter){
	if(letter === "r") return "Rock";
	if(letter === "p") return "Paper";
	else return "Scissors";
}

function win(userChoice,computerChoice){
	userScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML =` ${convertToWord(userChoice)} ${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You Win!!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('green-glow');},300)
}

function lose(userChoice,computerChoice){
	computerScore++;
	userScore_span.innerHTML=userScore;
	computerScore_span.innerHTML = computerScore;
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML =` ${convertToWord(userChoice)} ${smallUserWord} looses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('red-glow');},300)
}

function draw(userChoice,computerChoice){
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	result_p.innerHTML =` ${convertToWord(userChoice)} ${smallUserWord} draws to ${convertToWord(computerChoice)}${smallCompWord}`;
	document.getElementById(userChoice).classList.add('gray-glow');
	setTimeout(function(){document.getElementById(userChoice).classList.remove('gray-glow');},300)
}

function game(userChoice){
	//console.log('poop '+userChoice);
	const computerChoice = getComputerChoice();
	// console.log(userChoice);
	// console.log(computerChoice);
	switch(userChoice+computerChoice){
		case "rs":
		case "pr":
		case "sp":
		win(userChoice,computerChoice);
		break;
		case "rp":
		case "ps":
		case "sr":
		lose(userChoice,computerChoice);
		break;
		case "rr":
		case "pp":
		case "ss":
		draw(userChoice,computerChoice);
		break;
	}
}

function main(){

	rock_div.addEventListener("click",function() {
		//console.log("hey you clicked on rock");
		game("r");
	})

	paper_div.addEventListener("click",function() {
		//console.log("hey you clicked on paper");
		game("p");
	})

	scissors_div.addEventListener("click",function() {
		//console.log("hey you clicked on scissors");
		game("s");
	})
}

main();