import {quizzData} from './data.js';


window.addEventListener("load", ()=>{
    console.log("Quiz App Loaded")

    const interactBtn = document.querySelector(".interact-btn");

    const reloadBtn = document.querySelector(".fa-redo");
    reloadBtn.addEventListener("click", ()=>{
        location.reload();
    })

    interactBtn.addEventListener("click", ()=>{
        const leftPanel = document.querySelector(".left-panel");
        leftPanel.classList.toggle("active");

        document.querySelector(".main_container").classList.toggle("active")
    })





    let currentQuiz = 0;
    let selectedAnswer = undefined;
    let answerCollection = [];
    loadQuiz()

    function loadQuiz(){
        let selections = document.querySelectorAll(".selection");
        selections.forEach(selection =>{
            selection.checked = false;
        })
        if(currentQuiz > (quizzData.length -1)){
            quizFinished()
            return
        }
        let currentQuizData = quizzData[currentQuiz];

        let mainTitle = document.querySelector(".main-title")

        let labelIdA = document.querySelector("#text-a");
        let labelIdB = document.querySelector("#text-b");
        let labelIdC = document.querySelector("#text-c");

        
        mainTitle.innerHTML = currentQuizData.question
        labelIdA.innerHTML = currentQuizData.a
        labelIdB.innerHTML = currentQuizData.b
        labelIdC.innerHTML = currentQuizData.c
        
        
        
    }
    
    let submitBtn = document.querySelector(".submitBtn");
    submitBtn.addEventListener("click", (e) =>{
        //TODO:
        //fetch selected
        //on submit deselect choices

        if(currentQuiz > (quizzData.length -1)){
            console.log("done")
            console.log(answerCollection);
            
            return
        }

        currentQuiz++;
        answerCollection.push(getSelected());
        console.log(answerCollection);
        loadQuiz()
    })


    function quizFinished(){
        console.log(answerCollection);
        let quizCounter = 0;
        let quizPassed = false; 

        quizzData.forEach((quiz, index) =>{
            console.log(quiz.answer)
            if(quiz.answer == answerCollection[index]){
                quizCounter++;
                console.log(`index: ${index}...answer ${quiz.answer} CORRECT`)
                console.log(quizCounter);
            }
            
        })

        if(quizCounter == quizzData.length){
            console.log("PASSED")
            quizPassed = true;
        }else{
            console.log("FAILED")
            
        }
        let overlay = document.querySelector(".overlay");
        let icon = document.querySelector(".fa-check-double");
        overlay.classList.toggle("active")

        if(!quizPassed){
            let messageTitle = document.querySelector(".message-title");
            messageTitle.innerText = "Quiz Failed"
            icon.style.color = "red"
        }else{
            let messageTitle = document.querySelector(".message-title");
            messageTitle.innerText = "Quiz Passed"
            icon.style.color = "greenyellow"
        }
    }

  

    function getSelected(){
        let selections = document.querySelectorAll(".selection");
        let answerCollection = [];
        selections.forEach(selection =>{
                // console.log(selection.checked)
                // console.log(selection)
                if(selection.checked){
                    
                    console.log(selection.id);
                    selectedAnswer = selection.id;
                    answerCollection.push(selectedAnswer);
                }
            // if(selection.value === "on"){
            // }
        })
        // console.log(answerCollection);
        return answerCollection;
    }
})