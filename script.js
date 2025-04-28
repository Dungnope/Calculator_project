const displayCal = document.querySelector(".container__display");
const Button = document.querySelectorAll("button");
const show = document.createElement("span");
let first = "", second = "", operator = "";
window.addEventListener("keydown", (e) => {
    const deletewrongtype = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if(!deletewrongtype) return;
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
    else{
        show.textContent = show.textContent.slice(0, show.textContent.length - 1);
        first = first.toString().slice(0, first.length - 1);
    } 
})
Button.forEach(e => {
    e.addEventListener("click", (event) => {
        if(e.matches(".number"))
        {
            error();
            if(operator === "") // firstNumber
            {   
                if(typeof(first) == "number")
                {
                    first = ""
                    show.textContent = "";
                }

                if(e.innerText === "." && !first.includes("."))
                {
                    first += e.innerText;
                    show.textContent += e.innerText;
                }

                if(e.innerText !== ".")
                {
                    first += e.innerText;
                    show.textContent += e.innerText;
                }
            }
            else {
                if(e.innerText === "." && !second.includes("."))
                {
                    second += e.innerText;
                    show.textContent += e.innerText;
                }

                if(e.innerText !== ".")
                {
                    second += e.innerText;
                    show.textContent += e.innerText;
                }
            }
        }
        if(e.matches(".operator"))
        {
            error();
            if(operator === "" && first !== "")
            {
                operator += e.innerText;
                show.textContent += e.innerText;
            }
        }
        if(e.matches(".delete"))
        {
            show.textContent = first = second = operator = "";
        }

        if(e.matches(".operator--result"))
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
    })
})

function operate(operator, a, b)
{
    if(a === "" || b === "" || operator == "") return a;
    a = +a;
    b = +b;
    let result = new Number;
    if(operator !== "")
    {
        if(operator === "+")
        {
            result = add(a, b);
        }
        else if(operator === "-")
        {
             result = subtract(a, b);
        }
        else if(operator === "*")
        {
            result =  multiply(a, b);
        }
        else  result = divide(a, b);
        let ans = Number(result.toFixed(2));
        if(!Number.isInteger(result)) return ans;
        else return result;
    }
}

function add(a, b)
{
    return a + b;
}

function subtract(a, b)
{
    return a - b;
}

function multiply(a, b)
{
    return a * b;
}

function divide(a, b)
{
    if(b === 0) return `${b} can't be divided by ${a}`;
    else return a / b;
}

function error() {
    if(show.textContent === "ERROR")
    {
        show.textContent = "";
    }
}