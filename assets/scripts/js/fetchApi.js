const apiUrl = 'https://batman-api.sayna.space/questions'

const start = document.getElementById('quiz-btn')
const popUp = document.getElementById('pop-up-box')
const closePopUpBtn = document.querySelector('.close')
const resultTitre = document.getElementById('result-titre')
const resultText = document.getElementById('result')
const restart = document.getElementById('restart')
const imageIndex = [3,4,5,10,11,18,12,19,20,21,7,14]

let i = 0
let score = 0
var question
var totalQuiz = 0

// Fonction pour récupérer des données JSON à partir de l'API quiz
function fetchQuiz(questionIndex) {
fetch(apiUrl)
    .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
    return response.json()
    })
    .then(data => {
    if (questionIndex >= 0 && questionIndex < data.length) {
        question = data[questionIndex]
        totalQuiz = data.length
        const questionText = question.question
        const responseChoices = question.response
        // const indexImg = questionIndex + 3

        const numeroQuiz = document.getElementById('num-quiz')
        numeroQuiz.textContent = questionIndex + 1

        const maxQuiz = document.getElementById('max-quiz')
        maxQuiz.textContent = data.length

        const questionElement = document.getElementById("quiz-question-text")
        questionElement.textContent = questionText

        if(questionIndex == 6){
            const questionImg2 = document.getElementById("quiz-img-2")
            questionImg2.innerHTML = `<img src="./assets/Illustrations/Batgame_13.png" alt="">`
        }else {
            const questionImg2 = document.getElementById("quiz-img-2")
            questionImg2.innerHTML = ``
        }

        const questionImg = document.getElementById("quiz-img")
        questionImg.innerHTML = `<img src="./assets/Illustrations/Batgame_${imageIndex[questionIndex]}.png" alt="">`

        const answerLabels = document.querySelectorAll(".quiz-answer-text")

        responseChoices.forEach((choice, index) => {
        answerLabels[index].textContent = choice.text


        })
    }
    else {
        console.log('Dernière question atteinte !')
    }
    })
    .catch(error => {
    console.error('Une erreur s\'est produite lors de la récupération des données:', error)
    })
}

function debutQuiz() {
    let quiz = document.getElementById('question-game-start')
    let newContent = document.createElement('div')
    let fleche = document.getElementsByClassName('flecheBas')[0]
    quiz.id = 'question-game'
    newContent.classList.add('container')
    fleche.classList.add('hide')

    newContent.innerHTML = `
        <div class="quiz-card">
            <h1 class="titre">
                <span id="num-quiz"></span>/<span id="max-quiz"></span>
            </h1>
            <div class="quiz-item">
                <div class="quiz-question">
                <h2 id="quiz-question-text"></h2>
                </div>
                <div id="quiz-quest-img">
                    <div id="quiz-img">
                        
                    </div>
                    <div id="quiz-img-2">
                    
                    </div>
                    <div class="quiz-answers">
                    <div>
                        <input type="checkbox" name="answer" class="quiz-answer-box">
                        <label for="answer" class="quiz-answer-text"></label>
                    </div>
                    <div>
                        <input type="checkbox" name="answer" class="quiz-answer-box">
                        <label for="answer" class="quiz-answer-text"></label>
                    </div>
                    <div>
                        <input type="checkbox" name="answer" class="quiz-answer-box">
                        <label for="answer" class="quiz-answer-text"></label>
                    </div>
                    </div>
                </div>
            </div>
            <div class="btn-card">
                <button id="submit-btn">Question Suivant</button>
            </div>
        </div>`

    quiz.innerHTML = ''
    quiz.appendChild(newContent)
    fetchQuiz(i)
    const submitBtn = document.getElementById('submit-btn')
    submitBtn.addEventListener('click', () => {

        if(submitBtn.textContent === ' Voir le Résultat '){
            console.log(`Total:${totalQuiz}`)

            resultTitre.innerHTML = '<h2 id="result-titre">Résultat du Quiz</h2>';
            resultText.innerHTML = '<p id="result"></p>';

            let noteBas = totalQuiz * (2 / 5)
            let noteMoyenne = totalQuiz * (4 / 5)

            if (score <= noteBas ) {
                resultTitre.textContent = `${score}/${totalQuiz} C'est pas tout à fait ça...`
                resultText.textContent = `Oula ! Heureusement que le Riddler est sous les verrous...
                                    Il faut que vous vous repassiez les films, cette fois en enlevant peut-être
                                    le masque qui vous a bloqué la vue ! Aller, rien n'est perdu !`
            }else if ( score > noteBas && score <= noteMoyenne ) {
                resultTitre.textContent = `${score}/${totalQuiz} Pas Mal !`
                resultText.textContent = `Encore un peu d'entrainement avec le Chevalier Noir vous serait
                                    bénéfique, mais vous pouvez marcher la tête haute vos connaissance sont là. 
                                    A vous de les consolider, foncer Gotham est votre terrain de chasse !`
            }else if ( score <= totalQuiz && score > noteMoyenne ) {
                resultTitre.textContent = `${score}/${totalQuiz} Bravo !`
                resultText.textContent = `Vous êtes véritalement un super fan de l'univers de Batman ! 
                                    Comics, films, rien ne vous échappe. Bruce Wayne a de quoi être fier, 
                                    Gotham est en paix et Batman peut prendre sa retraite, vous veillez aux grains !`
            }

            popUp.style.display = 'block'

            restart.addEventListener('click', () => {
                popUp.style.display = 'none'
                resultTitre.innerHTML =''
                resultText.innerHTML =''
                score = 0
                i = 0
                submitBtn.textContent = 'Question suivant'
                fetchQuiz(0)
            })

        }else{
            const checkboxes = document.querySelectorAll('.quiz-answer-box')
            let questionSelect = question
            console.log(questionSelect)
            checkboxes.forEach((checkbox, index) => {
                if (checkbox.checked) {
                const selectedAnswerText = questionSelect.response[index].text
                const isGood = questionSelect.response[index].isGood
            
                if (isGood) {
                    score++
                }
                }
                checkbox.checked = false
            })
        
            i++
            fetchQuiz(i)
            console.log('Score :' + score)
        
            if ((i + 1) === totalQuiz) {
                submitBtn.textContent = ' Voir le Résultat '
            }
        }
    })
}

start.addEventListener('click', debutQuiz)

//ferme le pop up box

closePopUpBtn.addEventListener('click', () => {
    popUp.style.display = 'none'
    window.location.reload()
})


window.addEventListener('click', (event) => {
    if (event.target == popUp) {
        popUp.style.display = 'none'
        window.location.reload()
    }
})

