// KEEP IT SIMPLE STUPID

var questions = [
    {question: "Which of the following is not a real eCommerce platform?",
    answers: ["Shopify",
    "WooCommerce",
    "ShopCommerce [correct]",
    "BigCommerce"]},

    {question: "If Shopify is so good, why are Shopify developers necessary?",
    answers: ["To save time on things like store setups and migrations",
    "To extend the limited design options and functionalities of themes with custom code",
    "To provide support with a deep understanding of how the platform works and what its limitations are",
    "All the above [correct]"]},

    {question: "Which of the following is true about Shopify developers?",
    answers: ["They are paid extremely well",
    "There is a high demand for them",
    "They need to know web development, the platform itself, and the liquid template language",
    "All the above [correct]"]}
]

score = 0

var counter = 0;
const buildQ = questions.forEach( () => {
    var qBox = document.body.appendChild(document.createElement('container'));    // main question section
    qBox.id = `question${counter}`;
    console.log("qBox.id", qBox.id)
    var qNumber = qBox.appendChild(document.createElement('h3'));
    qNumber.textContent = `Question ${counter+1} of ${questions.length}:`;        // question number heading
    var qText = qBox.appendChild(document.createElement('h4'));
    qText.innerText = questions[counter].question;
    console.log(qText.innerText)
    
    var answerForm = qBox.appendChild(document.createElement('form'))
    answerForm.id = "answer-form"+counter
    
    for (let answer of questions[counter].answers) {
        var answerDiv = answerForm.appendChild(document.createElement('div'));

        var optionInput = answerDiv.appendChild(document.createElement('input'));
        optionInput.setAttribute("type", "radio")
        optionInput.setAttribute("name", `options${counter}`)

        var optionLabel = answerDiv.appendChild(document.createElement('label'));
        optionLabel.textContent = answer       

        if (answer.slice(-9,) === '[correct]') {
            optionInput.value = '';
            optionInput.id = "correct"+counter
            optionLabel.innerText = answer.slice(0,-10)
            optionLabel.setAttribute("for", "correct"+counter)
            console.log(optionLabel.innerText)

        } else {
            optionInput.id = answer.slice(0,6)+counter
            optionLabel.setAttribute("for", answer.slice(0,6)+counter)
        }
        
        // optionInput.id = answer.split(' ')[1] find the correct answer with this slice.
    }
    
    var submitButton = answerForm.appendChild((document.createElement('button')))
    submitButton.innerText = 'Next >'
    submitButton.setAttribute('type', 'submit')
    submitButton.addEventListener("click", function () { console.log(answerForm.innerText) } )
    counter+=1;

})

var displayQ = function (turnNum) {
    var allQ = document.getElementsByTagName('container')
    for ( let Q of allQ ) {
        Q.classList.remove("active")
    }
    var activeQ = document.getElementById("question"+turnNum)
    activeQ.classList.add("active")
}


var checkAnswer = function (checkNum) {
    var correctDiv = document.getElementById(`correct${checkNum}`);
    var validA = document.querySelector(`input[name = "options${checkNum}"]:checked`)

    console.log("correctdiv", correctDiv)
    console.log("validA", validA)

    }

    // console.log(isSelected)


// checkAnswer(0)

    displayQ(0)

// for (let i = 0; i < questions.length;) {
//     displayQ(i)
// // var turns = 0;
// }
// while (turns < questions.length) {
//     displayQ(turns);
//     checkAnswer(turns)
//     turns++
// }