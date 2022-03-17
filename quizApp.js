
var turn = 1;
var score = 0;


const clearQuestions = function () {
    var clearActive = document.getElementsByClassName(`container`);
    for (var item of clearActive) {
        if (item.classList[2]) {
            var goNext = item.id.slice(-1,) + 1;
            console.log(goNext, ": ", item.classList[2]);
            item.classList.remove("active");
        }}

        console.log({goNext})
        var nextQ = document.getElementById(`Question2`)
        nextQ.classList.add('active')
        console.log({nextQ})
    }

const setQuestion = function (number) {
    let activate = document.getElementById(`Question${number}`)
    activate.classList.add('active')
    let submitButton = document.querySelector(`#sub${number}`)
    submitButton.addEventListener("click", next => clearQuestions())
}
   

function scoreCount (number) {
    var target = document.querySelectorAll(`.Q-group-${turn}`);
    let submitAnswer;
    target.forEach(answer => {
        if (answer.checked) {
            submitAnswer = answer.id    
            console.log(submitAnswer) 
        }})
}


(function () {
setQuestion(turn)
})();

setQuestion(turn)