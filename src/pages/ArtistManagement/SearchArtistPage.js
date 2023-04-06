// SearchArtistPage:
//   Initialize state variables for searchTerm and searchResults

//   handleSearchTermChange:
//     Given a new search term:
//       Update the searchTerm state variable

//   searchArtists:
//     Given a search term:
//       Call the backend API to search for artists using searchTerm and supported APIs (e.g. Spotify, Apple Music, etc.)
//       Update the searchResults state variable with the received artist data

//   render:
//     Display SearchArtistPage component with:
//       - Search input field, with a change event handler calling handleSearchTermChange
//       - Search button, with a click event handler calling searchArtists with searchTerm
//       - List of search results, displaying:
//           - Artist name
//           - Artist image (if available)
//           - Subscribe button, allowing users to subscribe to the artist
