
Button.forEach(e => {
    e.addEventListener("transitionend", event => {
        e.classList.remove("button__active");
    })
})



window.addEventListener("keydown", (e) => {
    const deletewrongtype = document.querySelector(`button[data-key="${e.keyCode}"]`);
    if(!deletewrongtype) return;
    if(e.keyCode == "8")
    {
        if(operator !== "" && second !== "")
            {
                show.textContent = show.textContent.slice(0, show.textContent.length - 1);
                second = second.slice(0, second.length - 1);
            }
        
            else if(operator !== "" && second === "")
            {
                show.textContent = show.textContent.slice(0, show.textContent.length - 1);
                operator = "";
            }
        
            else if(first !== ""){
                show.textContent = show.textContent.slice(0, show.textContent.length - 1);
                first = first.toString().slice(0, second.length - 1);
            } 
    }

    if((e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode == "110")
        {
            error();
            if(operator === "") // firstNumber
            {   
                if(typeof(first) == "number")
                {
                    first = ""
                    show.textContent = "";
                }
                if(deletewrongtype.innerText === "." && !first.includes(".") && first !== "")
                {
                    first += deletewrongtype.innerText;
                    show.textContent += deletewrongtype.innerText;
                }
                if(deletewrongtype.innerText !== ".")
                {
                    first += deletewrongtype.innerText;
                    show.textContent += deletewrongtype.innerText;
                }
            }
            else {
                if(deletewrongtype.innerText === "." && !second.includes("."))
                {
                    second += deletewrongtype.innerText;
                    show.textContent += deletewrongtype.innerText;
                }
                if(deletewrongtype.innerText !== ".")
                {
                    second += deletewrongtype.innerText;
                    show.textContent += deletewrongtype.innerText;
                }
            }
        }
        if(e.keyCode >= 106 && e.keyCode <= 111 && e.keyCode !== 110)
        {
            error();
            if(operator === "" && first !== "")
            {
                operator += deletewrongtype.innerText;
                show.textContent += deletewrongtype.innerText;
            }
        }
        if(e.keyCode == "27")
        {
            show.textContent = first = second = operator = "";
        }
        if(e.keyCode == "13")
        {
            if(first === "" && second === "" && operator === "")
            {
                show.textContent = "ERROR";
            }
            else{show.textContent = operate(operator, first, second);;
            first = operate(operator, first, second);
            operator = "";
            second = "";}
        }
        displayCal.appendChild(show);
        deletewrongtype.classList.add("button__active");
})

