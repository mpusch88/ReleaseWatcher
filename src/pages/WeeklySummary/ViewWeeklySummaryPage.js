// ViewWeeklySummaryPage:
//   Initialize state variables for weeklySummary and isLoading

//   componentDidMount:
//     Call fetchWeeklySummary to populate weeklySummary from the backend

//   fetchWeeklySummary:
//     Set isLoading to true
//     Call the backend API to fetch the user's weekly summary data
//     Update the weeklySummary state variable with the received data
//     Set isLoading to false

//   renderRelease:
//     Given a release object:
//       Display the release information, including:
//         - Artist name
//         - Release title
//         - Release type (e.g., album, single, EP)
//         - Release date
//         - Links to streaming services and/or YouTube

//   render:
//     Display ViewWeeklySummaryPage component with:
//       - Title: "Weekly Summary"
//       - If isLoading is true:
//           - Display a loading indicator
//       - Else:
//           - For each release in weeklySummary.releases:
//               - Call renderRelease with the release object
