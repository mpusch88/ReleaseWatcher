// SubscribedArtistsPage:
//   Initialize state variable for subscribedArtists

//   fetchSubscribedArtists:
//     Call the backend API to fetch the list of subscribed artists for the logged-in user
//     Update the subscribedArtists state variable with the received data

//   componentDidMount:
//     Call fetchSubscribedArtists to populate the subscribedArtists list

//   unsubscribeArtist:
//     Given an artistId:
//       Call the backend API to remove the artist from the user's subscribed artists list
//       Call fetchSubscribedArtists to update the list of subscribed artists

//   render:
//     Display SubscribedArtistsPage component with:
//       - Title: "Your Subscribed Artists"
//       - List of subscribedArtists, displaying:
//           - Artist name
//           - Artist image (if available)
//           - Unsubscribe button, with a click event handler calling unsubscribeArtist with artistId
