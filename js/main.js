window.addEventListener("load", ()=>{
    console.log("Quiz App Loaded")


    const quizzData = [
        {
            question: "Who is the villain in The Shining?",
            a: 'Jack Nicholson',
            b: 'Dustin Hoffman',
            c: 'Robert DeNiro',
            answer: 'a'
        },
        {
            question: "Who is the director of Seven",
            a: 'Martin Scorcesse',
            b: 'Christopher Nolan',
            c: 'David Fincher',
            answer: 'c'
        },
        {
            question: "Who is the president of the USA",
            a: 'Lebron James',
            b: 'Donald Trump',
            c: 'Hillary Clinton',
            answer: 'b'
        },
        {
            question: "Who's says Get Over Here!",
            a: 'Hanzo Hasachi',
            b: 'Sub-Zero',
            c: 'Geras',
            answer: 'a'
        }
    ];



    let currentQuiz = 0;
    let selectedAnswer = undefined;
    let answerCollection = [];
    loadQuiz()

    function loadQuiz(){
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