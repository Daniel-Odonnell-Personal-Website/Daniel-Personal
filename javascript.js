console.log("Can you see this? Great!")
// above was a test. below is a dialogue box with some Undertale Inspo quote.
alert("“But you didn't get this far by giving up, did you? That's right. You have something called 'determination'. So as long as you hold on, so as long as you do what's in your heart, I believe you can do the right thing.”")

const form = document.querySelector("#form")
const submitButton = document.querySelector("#submit")
const scriptURL = 'https://httpbin.org/post'

form.addEventListener('submit', e => {
  submitButton.disabled = true
  e.preventDefault()
  let requestBody = new FormData(form)
  fetch(scriptURL, { method: 'POST', body: requestBody})
    .then(response => {
       alert('Success!', response)
       submitButton.disabled = false
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})