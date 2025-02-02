// Game Data
const poems = [
  {
      title: "The Road Not Taken",
      author: "Robert Frost",
      text: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveler, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, as just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same,

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence:
Two roads diverged in a wood, and I—
I took the one less traveled by,
And that has made all the difference.`,
      questions: [
          {
              question: "What is the stylistic device used in the phrase 'Two roads diverged in a yellow wood'?",
              options: ["Metaphor", "Simile", "Personification", "Imagery"],
              answer: "Imagery",
              difficulty: "medium",
              hint: "Think about the descriptive language used.",
              learnMore: "Imagery is the use of vivid language to evoke sensory experiences. Learn more <a href='https://literarydevices.net/imagery/' target='_blank'>here</a>."
          },
          {
              question: "What does the 'road' symbolize in this poem?",
              options: ["Travel", "Choices", "Adventure", "Destiny"],
              answer: "Choices",
              difficulty: "easy",
              hint: "Consider what the traveler is doing.",
              learnMore: "A symbol is an object or idea that represents something else. Learn more <a href='https://literarydevices.net/symbolism/' target='_blank'>here</a>."
          },
          {
              question: "What is the stylistic device in the phrase 'wanted wear'?",
              options: ["Personification", "Simile", "Metaphor", "Alliteration"],
              answer: "Personification",
              difficulty: "medium",
              hint: "Consider how the road is described.",
              learnMore: "Personification gives human qualities to non-human things. Learn more <a href='https://literarydevices.net/personification/' target='_blank'>here</a>."
          }

      ]
  },
  {
      title: "I Wandered Lonely as a Cloud",
      author: "William Wordsworth",
      text: `I wandered lonely as a cloud
That floats on high o'er vales and hills,
When all at once I saw a crowd,
A host, of golden daffodils;
Beside the lake, beneath the trees,
Fluttering and dancing in the breeze.

Continuous as the stars that shine
And twinkle on the milky way,
They stretched in never-ending line
Along the margin of a bay:
Ten thousand saw I at a glance,
Tossing their heads in sprightly dance.

The waves beside them danced; but they
Out-did the sparkling waves in glee:
A poet could not but be gay,
In such a jocund company:
I gazed—and gazed—but little thought
What wealth the show to me had brought:

For oft, when on my couch I lie
In vacant or in pensive mood,
They flash upon that inward eye
Which is the bliss of solitude;
And then my heart with pleasure fills,
And dances with the daffodils.`,
      questions: [
          {
              question: "What is the stylistic device used in the line 'I wandered lonely as a cloud'?",
              options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
              answer: "Simile",
              difficulty: "easy",
              hint: "Think of the words used to compare the poet to the cloud.",
              learnMore: "Similes compare two things using 'like' or 'as'. Learn more <a href='https://literarydevices.net/simile/' target='_blank'>here</a>."

          },
          {
              question: "What is the effect of using the phrase 'fluttering and dancing' to describe the daffodils?",
              options: ["Metaphor", "Hyperbole", "Personification", "Imagery"],
              answer: "Personification",
              difficulty: "medium",
              hint: "Are the daffodils acting like they are alive?",
              learnMore: "Personification gives human qualities to non-human things. Learn more <a href='https://literarydevices.net/personification/' target='_blank'>here</a>."
          },
          {
              question: "What stylistic device is used to describe the daffodils in the line 'Continuous as the stars that shine'?",
              options: ["Simile", "Personification", "Hyperbole", "Metaphor"],
              answer: "Simile",
              difficulty: "medium",
              hint: "Think of the words used to compare the daffodils to the stars",
              learnMore: "Similes compare two things using 'like' or 'as'. Learn more <a href='https://literarydevices.net/simile/' target='_blank'>here</a>."
          }
      ]
  }
];


// Game Data
const questions = [
  {
      question: "The wind whispered through the trees.",
      options: ["Metaphor", "Simile", "Personification", "Alliteration"],
      answer: "Personification",
      difficulty: "easy",
      image: "images/wind.jpg",
      hint: "Think about human qualities given to non-human things.",
      learnMore: "Personification gives human qualities to non-human things. Learn more <a href='https://literarydevices.net/personification/' target='_blank'>here</a>."
  },
  {
      question: "Her smile was as bright as the sun.",
      options: ["Metaphor", "Simile", "Hyperbole", "Onomatopoeia"],
      answer: "Simile",
      difficulty: "easy",
      hint: "Look for words like 'as' or 'like'.",
      learnMore: "Similes compare two things using 'like' or 'as'. Learn more <a href='https://literarydevices.net/simile/' target='_blank'>here</a>."
  },
  {
      question: "The city never sleeps.",
      options: ["Metaphor", "Simile", "Personification", "Irony"],
      answer: "Personification",
      difficulty: "medium",
      hint: "Does the city have human qualities?",
      learnMore: "Personification gives human qualities to non-human things. Learn more <a href='https://literarydevices.net/personification/' target='_blank'>here</a>."
  },
  {
      question: "Peter Piper picked a peck of pickled peppers.",
      options: ["Alliteration", "Assonance", "Consonance", "Onomatopoeia"],
      answer: "Alliteration",
      difficulty: "easy",
      hint: "Focus on the repeated beginning sounds.",
      learnMore: "Alliteration is the repetition of initial consonant sounds. Learn more <a href='https://literarydevices.net/alliteration/' target='_blank'>here</a>."
  },
  {
      question: "Time is a thief.",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      answer: "Metaphor",
      difficulty: "medium",
      hint: "Is time directly compared to a thief?",
      learnMore: "Metaphor directly compares two unlike things without 'like' or 'as'. Learn more <a href='https://literarydevices.net/metaphor/' target='_blank'>here</a>."
  },
  {
      question: "The stars winked at me.",
      options: ["Metaphor", "Simile", "Personification", "Alliteration"],
      answer: "Personification",
      difficulty: "easy",
      hint: "Are stars acting like humans?",
      learnMore: "Personification gives human qualities to non-human things. Learn more <a href='https://literarydevices.net/personification/' target='_blank'>here</a>."
  },
  {
      question: "The thunder grumbled like an old man.",
      options: ["Metaphor", "Simile", "Personification", "Onomatopoeia"],
      answer: "Simile",
      difficulty: "medium",
      hint: "Look for words like 'as' or 'like'.",
      learnMore: "Similes compare two things using 'like' or 'as'. Learn more <a href='https://literarydevices.net/simile/' target='_blank'>here</a>."
  },
  {
      question: "The flowers danced in the breeze.",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      answer: "Personification",
      difficulty: "easy",
      hint: "Are the flowers acting like they can dance?",
      learnMore: "Personification gives human qualities to non-human things. Learn more <a href='https://literarydevices.net/personification/' target='_blank'>here</a>."
  },
  {
      question: "The moon was a ghostly galleon tossed upon cloudy seas.",
      options: ["Metaphor", "Simile", "Personification", "Alliteration"],
      answer: "Metaphor",
      difficulty: "hard",
      hint: "Is the moon directly compared to a ship?",
      learnMore: "Metaphor directly compares two unlike things without 'like' or 'as'. Learn more <a href='https://literarydevices.net/metaphor/' target='_blank'>here</a>."
  },
  {
      question: "The firework exploded with a loud 'boom!'",
      options: ["Metaphor", "Simile", "Onomatopoeia", "Hyperbole"],
      answer: "Onomatopoeia",
      difficulty: "medium",
      audio: "audio/boom.mp3",
      hint: "What is the word that sounds like the noise?",
      learnMore: "Onomatopoeia uses words to imitate sounds. Learn more <a href='https://literarydevices.net/onomatopoeia/' target='_blank'>here</a>."
  },
  {
      question: "The old house groaned under the weight of the storm.",
      options: ["Metaphor", "Simile", "Personification", "Alliteration"],
      answer: "Personification",
      difficulty: "medium",
      hint: "Does the house have human qualities?",
      learnMore: "Personification gives human qualities to non-human things. Learn more <a href='https://literarydevices.net/personification/' target='_blank'>here</a>."
  },
  {
      question: "He is as stubborn as a mule.",
      options: ["Metaphor", "Simile", "Hyperbole", "Irony"],
      answer: "Simile",
      difficulty: "easy",
      hint: "Look for words like 'as' or 'like'.",
      learnMore: "Similes compare two things using 'like' or 'as'. Learn more <a href='https://literarydevices.net/simile/' target='_blank'>here</a>."
  },
  {
      question: "The car purred as it started.",
      options: ["Metaphor", "Simile", "Personification", "Onomatopoeia"],
      answer: "Onomatopoeia",
      difficulty: "easy",
      audio: "audio/car.mp3",
      hint: "What is the word that sounds like the noise?",
      learnMore: "Onomatopoeia uses words to imitate sounds. Learn more <a href='https://literarydevices.net/onomatopoeia/' target='_blank'>here</a>."
  },
  {
      question: "Her bag weighed a ton.",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      answer: "Hyperbole",
      difficulty: "medium",
      hint: "Is this an exaggeration?",
      learnMore: "Hyperbole is an exaggeration not meant to be taken literally. Learn more <a href='https://literarydevices.net/hyperbole/' target='_blank'>here</a>."
  },
  {
      question: "The cake was a fluffy cloud.",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      answer: "Metaphor",
      difficulty: "medium",
      hint: "Is the cake directly compared to a cloud?",
      learnMore: "Metaphor directly compares two unlike things without 'like' or 'as'. Learn more <a href='https://literarydevices.net/metaphor/' target='_blank'>here</a>."
  },
  {
      question: "The snake hissed menacingly.",
      options: ["Metaphor", "Simile", "Onomatopoeia", "Hyperbole"],
      answer: "Onomatopoeia",
      difficulty: "medium",
      audio: "audio/hiss.mp3",
      hint: "What is the word that sounds like the noise?",
      learnMore: "Onomatopoeia uses words to imitate sounds. Learn more <a href='https://literarydevices.net/onomatopoeia/' target='_blank'>here</a>."
  },
  {
      question: "The leaves whispered secrets to each other.",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      answer: "Personification",
      difficulty: "medium",
      hint: "Are the leaves acting like they can talk?",
      learnMore: "Personification gives human qualities to non-human things. Learn more <a href='https://literarydevices.net/personification/' target='_blank'>here</a>."
  },
  {
      question: "The news hit him like a ton of bricks.",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      answer: "Simile",
      difficulty: "medium",
      hint: "Look for words like 'as' or 'like'.",
      learnMore: "Similes compare two things using 'like' or 'as'. Learn more <a href='https://literarydevices.net/simile/' target='_blank'>here</a>."
  },
  {
      question: "Life is a roller coaster.",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      answer: "Metaphor",
      difficulty: "medium",
      hint: "Is life directly compared to a roller coaster?",
      learnMore: "Metaphor directly compares two unlike things without 'like' or 'as'. Learn more <a href='https://literarydevices.net/metaphor/' target='_blank'>here</a>."
  },
  {
      question: "The crowd was a sea of faces.",
      options: ["Metaphor", "Simile", "Personification", "Hyperbole"],
      answer: "Metaphor",
      difficulty: "medium",
      hint: "Is the crowd directly compared to the sea?",
      learnMore: "Metaphor directly compares two unlike things without 'like' or 'as'. Learn more <a href='https://literarydevices.net/metaphor/' target='_blank'>here</a>."
  }
];


// Game State
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timerInterval;
let filteredQuestions = [];
let players = [];
let currentPlayerIndex = 0;
let currentPoem = null; // Add currentPoem variable
let poemReadingTime = 5; // Time in seconds to read poem


// DOM Elements
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score");
const feedbackDisplay = document.getElementById("feedback");
const timerDisplay = document.getElementById("timer");
const gameContainer = document.getElementById("game");
const startButton = document.getElementById("start-button");
const playAgainButton = document.getElementById("play-again-button");
const hintButton = document.getElementById("hint-button");
const learnMoreButton = document.getElementById("learn-more-button");
const saveButton = document.getElementById("save-button");
const loadButton = document.getElementById("load-button");
const exportButton = document.getElementById("export-button");
const randomizeCheckbox = document.getElementById("randomize");
const themeSelector = document.getElementById("theme");
const progressBar = document.getElementById("progress-bar");
const poemSelection = document.getElementById("poem-selection")
const poemTextDisplay = document.getElementById("poem-text-display");


// Timer Functions
function startTimer() {
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  switch (currentQuestion.difficulty) {
      case "easy":
          timeLeft = 15;
          break;
      case "medium":
          timeLeft = 10;
          break;
      case "hard":
          timeLeft = 5;
          break;
      default:
          timeLeft = 10;
  }

  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
  timerInterval = setInterval(() => {
      timeLeft--;
      timerDisplay.textContent = `Time Left: ${timeLeft}s`;

      if (timeLeft <= 0) {
          clearInterval(timerInterval);
          feedbackDisplay.textContent = "Time's up!";
          disableOptionButtons();
          nextButton.style.display = "block";
      }
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  timerDisplay.textContent = `Time Left: ${timeLeft}s`;
}


// Question Loading
function loadQuestion() {
   resetTimer(); // Reset timer before loading the question
  updateProgressBar();
// Check if a poem was selected
  if (currentPoem) {
      // Delay the timer start to let the player read the poem
      setTimeout(() => {
          startTimer();
          startQuestionLoad();
      }, poemReadingTime * 1000);
  } else {
       startTimer(); // If no poem, start the timer immediately
       startQuestionLoad();
  }
}
// Start question load
function startQuestionLoad()
{
   const currentQuestion = filteredQuestions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = "";

  // Display image if available
  if (currentQuestion.image) {
      const image = document.createElement("img");
      image.src = currentQuestion.image;
      image.style.width = "100%";
      image.style.maxWidth = "300px";
      optionsContainer.appendChild(image);
  }

  // Play audio if available
  if (currentQuestion.audio) {
      const audio = new Audio(currentQuestion.audio);
      audio.play();
  }

  // Display options
  currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
      button.addEventListener("click", () => checkAnswer(option));
      optionsContainer.appendChild(button);
  });
}


function disableOptionButtons() {
  const optionButtons = optionsContainer.querySelectorAll('.option');
  optionButtons.forEach(button => {
      button.disabled = true;
  });
}


// Answer Checking
function checkAnswer(selectedOption) {
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  clearInterval(timerInterval);

  disableOptionButtons();

  if (selectedOption === currentQuestion.answer) {
      score += timeLeft;
      feedbackDisplay.textContent = `Correct! +${timeLeft} bonus points!`;
      playCorrectSound(); // Play correct answer sound
  } else {
      feedbackDisplay.textContent = `Incorrect! The correct answer is ${currentQuestion.answer}.`;
      new Audio("audio/incorrect.mp3").play();
  }

  scoreDisplay.textContent = `Score: ${score}`;
  nextButton.style.display = "block";
}

// Play correct sound
function playCorrectSound() {
  const correctSound = new Audio("audio/sfx.mp3");
  correctSound.play();
}

// Next Question
function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < filteredQuestions.length) {
      loadQuestion();
      nextButton.style.display = "none";
      feedbackDisplay.textContent = "";
  } else {
      endGame();
  }
}

// End Game
function endGame() {
  clearInterval(timerInterval);

  // Play celebratory music
  const victoryMusic = new Audio("audio/victory.mp3");
  victoryMusic.play();

  // Display final score
  const finalScore = `Game Over! Your final score is ${score}/${filteredQuestions.length * 15}.`;
  alert(finalScore);

  // Generate and display assessment report
  const assessmentReport = generateAssessmentReport(score, filteredQuestions.length);
  questionText.textContent = finalScore;
  optionsContainer.innerHTML = `<div id="report">${assessmentReport}</div>`;
  nextButton.style.display = "none";
  feedbackDisplay.textContent = "";

  // Show "Play Again" button
  playAgainButton.style.display = "block";

  // Save high score
  saveHighScore(score);
  displayLeaderboard();

  // Check and display achievements
  const unlockedAchievement = checkAchievements();
  if (unlockedAchievement) {
      alert(`Congratulations! You unlocked: ${unlockedAchievement}`);
  }
}

// Assessment Report
function generateAssessmentReport(score, totalQuestions) {
  const maxScore = totalQuestions * 15;
  const percentage = (score / maxScore) * 100;
  let report = `<h3>Assessment Report</h3>`;
  report += `<p>You scored ${score} out of ${maxScore}.</p>`;
  report += `<p>That's ${percentage.toFixed(2)}%!</p>`;

  if (percentage >= 90) {
      report += `<p>🎉 Excellent work! You're a stylistic devices master! 🎉</p>`;
  } else if (percentage >= 70) {
      report += `<p>👍 Great job! You have a good understanding of stylistic devices. 👍</p>`;
  } else if (percentage >= 50) {
      report += `<p>👌 Not bad! Keep practicing to improve your skills. 👌</p>`;
  } else {
      report += `<p>📚 Keep learning! You'll get better with more practice. 📚</p>`;
  }

  return report;
}

// Progress Bar
function updateProgressBar() {
  const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
  progressBar.style.width = `${progress}%`;
}

// High Scores
function saveHighScore(score) {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  highScores.push(score);
  highScores.sort((a, b) => b - a);
  localStorage.setItem("highScores", JSON.stringify(highScores.slice(0, 5)));
}

function displayLeaderboard() {
  const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  const leaderboard = highScores.map((score, index) => `${index + 1}. ${score}`).join("<br>");
  optionsContainer.innerHTML += `<h3>Leaderboard</h3>${leaderboard}`;
}

// Achievements
const achievements = [
  { name: "Novice", condition: score => score >= 50 },
  { name: "Expert", condition: score => score >= 100 },
  { name: "Master", condition: score => score >= 150 }
];

function checkAchievements() {
  let unlockedAchievement = null;
  for (const achievement of achievements) {
      if (achievement.condition(score)) {
          unlockedAchievement = achievement.name;
      }
  }
  return unlockedAchievement;
}

// Event Listeners for Hint and Learn More
hintButton.addEventListener("click", () => {
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  if (currentQuestion.hint) {
      feedbackDisplay.textContent = `Hint: ${currentQuestion.hint}`;
  } else {
      feedbackDisplay.textContent = "No hint available for this question.";
  }
});

learnMoreButton.addEventListener("click", () => {
  const currentQuestion = filteredQuestions[currentQuestionIndex];
  if (currentQuestion.learnMore) {
      // Create a temporary container
      const container = document.createElement('div');
      container.innerHTML = currentQuestion.learnMore;

      const link = container.querySelector('a');
      if (link) {
          window.open(link.href, '_blank');
      } else {
          feedbackDisplay.innerHTML = currentQuestion.learnMore;
      }
  } else {
      feedbackDisplay.textContent = "No learn more information available for this question.";
  }
});

// Export Results
exportButton.addEventListener("click", () => {
  const doc = new jsPDF();
  doc.text("Your Game Results", 10, 10);
  doc.text(`Score: ${score}/${filteredQuestions.length * 15}`, 10, 20);
  doc.save("game-results.pdf");
});

// Themes
themeSelector.addEventListener("change", () => {
  const selectedTheme = themeSelector.value;
  document.body.className = selectedTheme;
  document.querySelector(".container").className = `container ${selectedTheme}`;
});

// Start Game
startButton.addEventListener("click", () => {
  const difficulty = document.getElementById("difficulty").value;
  const selectedPoemIndex = poemSelection.value;

  if (selectedPoemIndex !== "default") {
      currentPoem = poems[selectedPoemIndex];
      filteredQuestions = currentPoem.questions;
      poemTextDisplay.textContent = `${currentPoem.title} by ${currentPoem.author}\n\n${currentPoem.text}`;
  } else {
      currentPoem = null;
      filteredQuestions = difficulty === "all" ? questions : questions.filter(q => q.difficulty === difficulty);
      poemTextDisplay.textContent = "";
  }
  if (document.getElementById("randomize").checked) {
      filteredQuestions = shuffleArray(filteredQuestions);
  }
 currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  gameContainer.style.display = "block";
  startButton.style.display = "none";
  loadQuestion();
});

// Play Again
playAgainButton.addEventListener("click", () => {
  resetGame();
  startButton.click();
});

// Utility Functions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function resetGame() {
  currentQuestionIndex = 0;
  score = 0;
  scoreDisplay.textContent = `Score: ${score}`;
  gameContainer.style.display = "none";
  startButton.style.display = "block";
  playAgainButton.style.display = "none";
  progressBar.style.width = "0%";
  poemTextDisplay.textContent = "";
  currentPoem = null;
}

// Event listener for the "Next" button
nextButton.addEventListener("click", nextQuestion);

// Populate Poem Select Dropdown
function populatePoemSelect() {
  poems.forEach((poem, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.text = poem.title;
      poemSelection.add(option);
  });
}

// Call the Function
populatePoemSelect();