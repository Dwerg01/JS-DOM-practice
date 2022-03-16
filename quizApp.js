
let turn = 1;
let score = 0;

var total = document.body.childElementCount - 1
console.log(total)

var submitButton = document.querySelector(`#sub${turn}`)
submitButton.textContent = "Submit >";

var clearQuestions = document.getElementsByClassName(`container`)
for (var item of clearQuestions) {
    item.classList.remove('active')
}

var activate = document.getElementById(`Question${turn}`)
activate.classList.add('active')

submitButton.addEventListener("click", function() {
    var target = document.querySelectorAll(`.Q-group-${turn}`);
    let submitAnswer;
    target.forEach(answer => {
            if (answer.checked) {
                submitAnswer = answer.id            
            }})
    if (submitAnswer) {
        if (submitAnswer.slice(0,7) === "correct") {
            score++;
            turn++;
        } else {
            turn++;
        }
    } else {
        alert('please choose a valid option before submitting');
    }
    console.log(turn, score)
});

