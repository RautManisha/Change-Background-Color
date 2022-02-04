const body = document.body
console.log(body)

// body.style.background = "green"

function generateRandomColor(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const randomColor = `rgb(${red}, ${green}, ${blue})`
    return randomColor
}

const my_button = document.querySelector(".btn")
const my_text = document.querySelector(".color-heading")

my_button.addEventListener("click", ()=>{
    const color = generateRandomColor()
    body.style.background = color
    my_text.textContent = color
})