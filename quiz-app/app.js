let displayQuestion = document.querySelector('.question');
let displayChoice = document.querySelector('.choice');
let nextQuestion = document.querySelector('.next-question');
let previousQuestion = document.querySelector('.previous-question');

class Question {
	constructor(text, choices, answer) {
		this.text = text;
		this.choices = choices;
		this.answer = answer;
	}
}
class Quiz extends Question {
	constructor(quizList, text, choices, answer) {
		super(text, choices, answer);
		this.score = 0;
		this.currentIndex = 0;
		this.quizList = quizList;
	}
	checkAnswer(e) {
		let count = 0;
			if (this.quizList[this.currentIndex].answer == this.quizList[this.currentIndex].choices[e.target.dataset.id]) {
				count += this.score++;
				console.log(`Your score is ${count}`);
				return count;
			} else if (this.quizList[this.currentIndex].answer != this.quizList[this.currentIndex].choices[e.target.dataset.id]) {
				return `Sorry, Something's wrong!!!`;
			}
	}
	displayQuestions() {
		if ((this.quizList).length == this.currentIndex) {
			displayQuestion.style.display = 'none';
			return displayChoice.innerHTML = `
				<div>Your score is: ${this.score}</div>
			`;
		} else {
			displayQuestion.innerText = `${this.quizList[this.currentIndex].text} ?`;
			displayChoice.innerHTML = `
			<li data-id="${0}">${this.quizList[this.currentIndex].choices[0]}</li>
			<button class="submit-btn" data-id="${0}">Submit</button>
			<li data-id="${1}">${this.quizList[this.currentIndex].choices[1]}</li>
			<button class="submit-btn" data-id="${1}">Submit</button>
			`
		}
		JSON.parse(localStorage.getItem('list'));
	}
}

var generalKnowledge = [
	new Question('who is the Current CEO of Google', ['Sundar Pichai', 'Tim Cook'], 'Sundar Pichai'),
	new Question('who is the national father of india', ['Stephen Hawkins', 'Mahatma Gandhi'], 'Mahatma Gandhi'),
	new Question('where is the biggest statue in world', ['Switzerland', 'India'], 'India'),
	new Question('where is the bussiest port in world', ['Manchester', 'New York'], 'New York'),
	new Question('where is the longest railway platform in Asia', ['Gorakhpur (India)', 'Kollam (India)'], 'Gorakhpur (India)')
];

var science = [
	
];

localStorage.setItem('list', JSON.stringify(generalKnowledge));
console.log(generalKnowledge);

var q2 =  new Quiz(generalKnowledge ,'who is the pm of india', ['Narendra Modi', 'Rahul Gandhi'], 'Narendra Modi');
q2.displayQuestions();
displayChoice.addEventListener("click", q2.checkAnswer.bind(q2), function(e) {
	if (e.target.classList.contains('submit-btn')) {
		q2.currentIndex++;
		q2.checkAnswer();
		q2.displayQuestions();
	}
})
displayChoice.addEventListener('click', function(e) {
	if (e.target.classList.contains('submit-btn')) {
		q2.currentIndex++;
		q2.displayQuestions();
	}
})
