const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
inputField = document.querySelector("input"),
timeText = document.querySelector(".time b"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord,timer;


const initTimer=maxTime =>{
    clearInterval(timer);
    timer=setInterval(()=>{
        if(maxTime>0){
            maxTime--;
            return timeText.innerText=maxTime;
        }
        clearInterval(timer);
        alert(`Time is up!  "${correctWord.toLocaleUpperCase()}" was the correct Word.`);
        initGame();
    },1000);    
}


const initGame = () => {
    initTimer(20);
  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split("");

  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }

  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord=randomObj.word.toLocaleLowerCase();
  inputField.value="";
  inputField.setAttribute("maxlength",correctWord.length);
  console.log(randomObj);
};


initGame();


const checkWord=()=>{

    let userWord=inputField.value.toLocaleLowerCase();
    if (!userWord){
            alert("Please Enter a Word to check.");
    }else if (userWord!==correctWord){
        return alert(`Oops!  "${userWord}"  is not a correct word.`);
    }else {
         alert(`Congrats!  "${userWord.toLocaleUpperCase()}" is a correct Word.`);
    }

    initGame();

}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);
