// create a function to get color
const getcolor =()=> {
    const randomNumber = Math.floor(Math.random() * 16777215);
    // Math.floor() is a function in JavaScript that rounds a number downward to the nearest integer,
    // regardless of the number's decimal part.
    const randomCode = "#" + randomNumber.toString(16);
    // we need hex code
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;
    navigator.clipboard.writeText(randomCode);// copy code
} 
// event call
document.getElementById("btn").addEventListener(
    "click", getcolor
)
// inital call
