function checkAnswers() {
    const answers = {
        question1: document.getElementById('question1').value.trim().toLowerCase(),
        question2: document.getElementById('question2').value.trim().toLowerCase(),
        question3: document.getElementById('question3').value.trim().toLowerCase()
    };

    const correctAnswers = {
        question1: 'plebejusok',
        question2: 'levantei',
        question3: 'városi önkormányzat'
    };

    let correctCount = 0;

    if (answers.question1 === correctAnswers.question1) {
        correctCount++;
    }
    if (answers.question2 === correctAnswers.question2) {
        correctCount++;
    }
    if (answers.question3 === correctAnswers.question3) {
        correctCount++;
    }

    const resultElement = document.getElementById('result');
    resultElement.textContent = `Helyes válaszok száma: ${correctCount} / 3`;
}
