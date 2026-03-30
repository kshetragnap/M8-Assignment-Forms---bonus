    // JavaScript code for form validation
    const form = document.getElementById("myForm");
    const inputField = document.getElementById("inputField");
    const message =  document.getElementById("message");
	// Prevent form from submitting
    form.addEventListener("submit", function(event) {
        event.preventDefault();
      // Retrieve the input field value
      const value = inputField.value;
      // Regular expression pattern for alphanumeric input
      const pattern = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
      if (pattern.test(value)) {
        // Valid input: display confirmation and submit the form
        message.textContent = "Form submitted successfully!";
        message.className = "success";
        
        setTimeout(() => form.submit(), 1000);

      } else {
        // Invalid input: display error message
        message.textContent = "Error -  only letters and numbers allowed! ";
        message.className = "error";
      }
    });