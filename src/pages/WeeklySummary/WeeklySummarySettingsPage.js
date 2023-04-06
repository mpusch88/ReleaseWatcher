// WeeklySummarySettingsPage:
//   Initialize state variables for userSettings

//   componentDidMount:
//     Call fetchUserSettings to populate userSettings from the backend

//   fetchUserSettings:
//     Call the backend API to fetch the user's weekly summary settings
//     Update the userSettings state variable with the received data

//   handleInputChange:
//     Given an input field and its value:
//       Update the corresponding field in the userSettings state variable

//   handleSaveSettings:
//     Call the backend API to save the updated userSettings
//     Display a success message or an error message based on the API response

//   render:
//     Display WeeklySummarySettingsPage component with:
//       - Title: "Weekly Summary Settings"
//       - Form containing input fields for:
//           - Export type (e.g., Email, Playlist, or Both)
//           - Time frame for releases (e.g., Last 7 days, Last 30 days, etc.)
//           - Popularity threshold for songs
//       - Save button, with a click event handler calling handleSaveSettings
