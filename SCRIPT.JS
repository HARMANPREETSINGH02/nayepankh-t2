
if (name === '' || phone === '') {
    
    submissionMessageElement.innerHTML = 'Please enter your name and phone number.';
    submissionMessageElement.style.color = 'red';
    submissionMessageElement.style.display = 'block';
  } else {
    
    submissionMessageElement.innerHTML = `Thank you for registering, ${name}! Your phone number is ${phone}.`;
    submissionMessageElement.style.color = 'green';
    submissionMessageElement.style.display = 'block';
  }
  const feedbackForm = document.getElementById('feedbackForm');
const thankyouMessage = document.getElementById('thankyouMessage');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission to the server

    thankyouMessage.classList.remove('hidden'); // Show the "Thank you for your feedback!" message
});
