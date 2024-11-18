//This is script for contact page of the Personal Webiste Ania Leibel

const scriptURL = 'https://script.google.com/macros/s/AKfycbxe709ReGipb3UZBcyWGOH-chZol4GTY1KkBawUVGiRymdRdcWGBMK3UHxd5Snf5B-usQ/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg')

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})