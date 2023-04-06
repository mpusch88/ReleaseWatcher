// ForgotPasswordPage:
//   Initialize state variables for email and error message

//   handleSubmit:
//     Prevent default form submission behavior
//     Validate email input
//       If input is invalid:
//         Set appropriate error message in state
//         Exit function
//     Call backend API to initiate password reset process with provided email
//       If successful:
//         Display success message or redirect to a success page
//       If failed:
//         Set appropriate error message in state

//   handleKeyPress:
//     Check if the pressed key is "Enter"
//       If true, call handleSubmit

//   handleChange:
//     Update the email state variable based on the input field value

//   render:
//     Display ForgotPasswordPage component with a form containing:
//       - Email input field, with a change event handler calling handleChange and a key press event handler calling handleKeyPress
//       - Submit button, with a click event handler calling handleSubmit
//       - If error message exists in state, display the error message
