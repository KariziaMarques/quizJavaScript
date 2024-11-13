function nextQuestion(nextPage) {
    // Salvar a resposta no localStorage
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    for (let [name, value] of formData.entries()) {
        localStorage.setItem(name, value);
    }
    // Redirecionar para a próxima página
    window.location.href = nextPage;
}

function previousQuestion(previousPage) {
    // Redirecionar para a página anterior
    window.location.href = previousPage;
}

function finishQuiz() {
    // Salvar a resposta da última pergunta
    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    for (let [name, value] of formData.entries()) {
        localStorage.setItem(name, value);
    }
    // Redirecionar para a página de resultado
    window.location.href = 'resultado.html';
}

window.onload = function() {
    if (window.location.pathname.includes('resultado.html')) {
        // Calcular e exibir o resultado
        let score = 0;
        const totalQuestions = 5;
        
        if (localStorage.getItem('q1') === 'a') score++;
        if (localStorage.getItem('q2') === 'b') score++;
        if (localStorage.getItem('q3') === 'b') score++;
        if (localStorage.getItem('q4') === 'a') score++;
        if (localStorage.getItem('q5') === 'a') score++;
        
        const percentage = (score / totalQuestions) * 100;
        
        document.getElementById('resultado').innerText = `Você acertou ${score} de ${totalQuestions} perguntas (${percentage}%).`;
    }
}
