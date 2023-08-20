const emailInput = document.querySelector("#email");

emailInput.addEventListener('focus', () => {
    emailInput.style.border = '2px solid #8257E5'
})

emailInput.addEventListener('blur', () => {
    emailInput.style.border = '2px solid black'

})
