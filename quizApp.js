
var turn = 1;
var score = 0;

function clearQuestions () {
    var clearActive = document.getElementsByClassName(`container`)
    for (var item of clearActive) {
        item.classList.remove('active')
    }}

function setQuestion (number) {
    let activate = document.getElementById(`Question${number}`)
    activate.classList.add('active')
    let submitButton = document.querySelector(`#sub${number}`)
    submitButton.addEventListener("click", NexKeshun(number))
}
   
    
function NexKeshun (number) {
    var target = document.querySelectorAll(`.Q-group-${turn}`);
    let submitAnswer;
    target.forEach(answer => {
        if (answer.checked) {
            submitAnswer = answer.id    
            console.log(submitAnswer)    
        }})

    clearQuestions();
    number++
}


(function () {
    setQuestion(turn)
})();
