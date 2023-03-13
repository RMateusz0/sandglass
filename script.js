window.onload = () => {
    
    let timeLeft = false;
    let latestTimeClicked;

    const startBtn = document.querySelector(".start-btn")
    const container1div = document.querySelector(".container1")
    const container2div = document.querySelector(".container2")
    const container3div = document.querySelector(".container3")
    const setTimerButtons = document.querySelectorAll("button[time]")
    const screen = document.querySelector(".screen")
    const resetCounterBtn = document.querySelector(".reset-counter-btn")
    const reloadPageBtn = document.querySelector(".reload-page-btn")
    
    const soundFileTClick = new Audio('click.wav')
    const soundFileTimeUp = new Audio('timeup.wav')
    const soundFileReset = new Audio('reset.wav')

    resetCounterBtn.addEventListener("click", () => {
        timeLeft = latestTimeClicked;
        screen.innerText = timeLeft
        clearInterval(timerTickingID)
        clearInterval(checkerID)
        setTimerTicking()
        setCheckerID()
        soundFileReset.load();soundFileReset.play()
    })


    reloadPageBtn.addEventListener("click", () => {
        soundFileTClick.load();soundFileTClick.play()
        
        setTimeout(() => { location.reload() },250)
    })


    let timerTickingID;
    let checkerID;

    
    function setTimerTicking () {
        timerTickingID = setInterval(
            () => {
                timeLeft -= 1
                screen.innerText = timeLeft
            },1000)
    }


    function setCheckerID () {
        checkerID = setInterval(
            () => { 
                if (timeLeft <= 0) {
                    clearInterval(timerTickingID)
                    clearInterval(checkerID)
                    timeLeft = false
                    screen.innerText = `0`
                    // ✕
                    soundFileTimeUp.load();soundFileTimeUp.play()
                }
             },500)
    }


    startBtn.addEventListener("click", () => {
        container1div.style.display = "none"
        container2div.style.display = "block"
        soundFileTClick.load();soundFileTClick.play()
    })


    setTimerButtons.forEach(setTimerButton => {
        setTimerButton.addEventListener("click", (event) => {
            container2div.style.display = "none"
            container3div.style.display = "block"
            
            soundFileTClick.load();soundFileTClick.play()

            timeLeft = event.target.getAttribute("time")
            latestTimeClicked = timeLeft
            screen.innerText = timeLeft
            
            setTimerTicking()
            setCheckerID()
            } )
    })
    
}