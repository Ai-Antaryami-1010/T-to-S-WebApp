const textInputField = document.querySelector('#text')
const form = document.querySelector('#form') 
const utterThis = new
SpeechSynthesisUtterance()
const synth = window.speechSynthesis
let ourText = ""

const checkBrowserCompability = () => {
    "speechSynthesis" in window ?
    console.log("Web Speech API supported!") : console.log("Web Speech API not supported :-(")
}

checkBrowserCompability()

form.onsubmit = (event) => {
    event.preventDefault()
    ourText = textInputField.value
    utterThis.text = ourText
    synth.speak(utterThis)
    textInputField.value = ""
}