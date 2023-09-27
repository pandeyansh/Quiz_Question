const quizForm = document.getElementById('quizForm');
const correctAnswers = ['c', 'c', 'a', 'd', 'b', 'd', 'c', 'b', 'd', 'a']; 
quizForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let score = 0;
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
    quizForm.q5.value,
    quizForm.q6.value,
    quizForm.q7.value,
    quizForm.q8.value,
    quizForm.q9.value,
    quizForm.q10.value
  ];
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });
  alert(`You scored ${score} out of ${correctAnswers.length}`);
});