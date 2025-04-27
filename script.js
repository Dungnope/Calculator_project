const displayCal = document.querySelector(".container__display");
const Button = document.querySelectorAll("button");
const Content = document.getElementsByTagName("span");

let first = "", second = "", operator = "";
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
                    displayCal.textContent = "";
                }
                first += e.innerText;
                displayCal.textContent += e.innerText;
            }
            else {
                second += e.innerText;
                displayCal.textContent += e.innerText;
            }
        }
        if(e.matches(".operator"))
        {
            error();
            if(operator === "" && first !== "")
            {
                operator += e.innerText;
                console.log(operator);
                displayCal.textContent += e.innerText;
            }
            else{
                first += e.innerText;
                displayCal.textContent = first;
            } 
        }
        if(e.matches(".delete"))
        {
            displayCal.textContent = first = second = operator = "";
        }

        if(e.matches(".operator--result"))
        {
            if(first === "" && second === "" && operator === "")
            {
                displayCal.textContent = "ERROR";
            }
            else{displayCal.textContent = operate(operator, first, second);;
            first = operate(operator, first, second);
            operator = "";
            second = "";}
        }

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
    if(displayCal.textContent === "ERROR")
    {
        displayCal.textContent = "";
    }
}
