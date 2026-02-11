let randomnumber = parseInt(Math.random() * 100 + 1)
console.log(randomnumber);

guessfeild = document.getElementById('guessField')
const submit = document.getElementById('subt')
const para = document.createElement('p')
const form = document.querySelector('.form')
    let lastsection = document.querySelector('.resultsect')


let preguesses = []
let gameon = true
let guessno = 1
if (gameon) {

    submit.addEventListener('click', function (e) {
        e.preventDefault();
        let inputvalue = parseInt(guessfeild.value)
        validate(inputvalue)

    })

}

function validate(inputvalue) {
    if (isNaN(inputvalue)) {
        alert(`Please Enter Valid Number\n ${inputvalue} is not valid`)
    }
    else if (inputvalue > 100) {
        alert(`Please Enter Valid Number\n ${inputvalue} Is grater then 100`)
    }
    else if (inputvalue < 1) {
        alert(`Please Enter Valid Number\n ${inputvalue} Is less then 1`)
    }
    else {
        guessno++
        preguesses.push(inputvalue)
        display(inputvalue)
    }
}
function display(inputvalue) {
    allguesses = document.querySelector('.guesses')
    allguesses.innerHTML = preguesses

    const remainguess = document.querySelector('.lastResult');
    remainguess.innerText = 11 - guessno;

    if (inputvalue > randomnumber) {
        para.innerHTML = `${inputvalue} is High`
        para.style.color = 'red'
        para.style.fontSize = '25px'
        para.style.fontWeight = "bold";

    }
    else if (inputvalue < randomnumber) {
        para.innerHTML = `${inputvalue} is Low`
        para.style.color = 'red'
        para.style.fontSize = '25px'
        para.style.fontWeight = "bold";

    }
    else if (inputvalue === randomnumber) {
        para.innerHTML = `${inputvalue} is Right`
        para.style.color = 'green'
        para.style.fontSize = '25px'
        para.style.fontWeight = "bold";
        lastsection.remove()
        gameend();
    }
    else {
        // gamestart()
    }
    if (guessno > 10) {
        para.innerHTML = `Game Over! Number was ${randomnumber}`;
        para.style.color = 'orange';
        para.style.fontSize = '25px'
        gameend()
    }

    form.appendChild(para)

}
function gameend() {
    guessfeild.disabled = true;
    submit.disabled = true;
    gameon = false;
    gamestart();
}
function gamestart() {
    const newGameBtn = document.createElement('button');
    newGameBtn.innerText = 'Start New Game'
    //css added
    newGameBtn.classList.add('newgamebtn')


    lastsection.appendChild(newGameBtn)
    
    newGameBtn.addEventListener('click', function () {
        preguesses = []
        guessno = 1
        randomnumber = parseInt(Math.random() * 100 + 1)
        allguesses = document.querySelector('.guesses')
        remainguess = document.querySelector('.lastResult');
        gameon = true
        remainguess.innerText = 10
        allguesses.innerText = ''
        para.innerHTML = ''
        guessfeild.disabled = false;
        submit.disabled = false;
        gameon = true;
        newGameBtn.remove();
    });
}