console.log("Can you see this? Great!")
// above was a test. Since now we have something more for a JS tool, deleting the dialog box and this will now be in the contact


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
       window.location.href = "./submission.html"
      })
    .catch(error => {
    alert('Error!', error.message)
      submitButton.disabled = false

    }
    )
})