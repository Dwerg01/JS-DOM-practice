var body = document.body

var QuestionBank = [
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

var score = 0;


const populateQuestion = function (counter) {

    // this function is meant to populateQuestion the quiz page from the array QuestionBank: line-4 

    var displayNum = counter + 1;
    var QuestionText =  QuestionBank[counter].question;
    
    // populateQuestion sub headings provided in index.html
    document.getElementById('counter').textContent = `Question ${displayNum} of ${QuestionBank.length}:`;
    document.getElementById('question-text').textContent = `${QuestionText}`;
    
    var options = QuestionBank[counter].answers;
    
    for (option of options) {
    // this function takes a question object from the QuestionBank array and populates all questions, and then finds and hides the correct answer
    
    const linkStr = option.split(" ")[0] + options.indexOf(option)
    let section = document.createElement('div')
    let picker = document.createElement('label');
    picker.setAttribute('for', linkStr)
    picker.innerText = option;
    document.getElementById('question-list').appendChild(section);
    
    

    picker.classList.add("question");
    let pickerButton = document.createElement('input');
    pickerButton.setAttribute('type', 'radio');
    pickerButton.setAttribute('name', counter);
    pickerButton.id = linkStr;

    section.appendChild(pickerButton)
    section.appendChild(picker)
    

    if (picker.textContent.slice(-9,) === "[correct]") {
        picker.classList.add("correct");
        picker.textContent = picker.textContent.slice(0, -10)
    }

    console.log(typeof picker)
}
    
    let submitButton = body.appendChild(document.createElement('button'))
    submitButton.textContent = "Next >";
    
    submitButton.addEventListener('click', testAnswer() )
    
}


const testAnswer = function (correctAnswer, selectedAnswer, score) {
    if (selectedAnswer === correctAnswer) {
        score += 1
    } 
}


populateQuestion(1);

// for (let i=0; i < QuestionBank.length; i++) {
//     populateQuestion(i);

// }



