# ReleaseWatcher

ReleaseWatcher is a web and mobile application designed to help users monitor their favorite music artists for new releases and provide a weekly summary of all new releases through a playlist or email. This project not only demonstrates the development of ReleaseWatcher but also showcases how ChatGPT and GPT4 can assist and guide the development process.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Context](#context)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [Milestones](#milestones)
- [Contributing](#contributing)
- [License](#license)

## About

The idea behind ReleaseWatcher is to make it easier for users to keep track of new releases from their favorite music artists across multiple streaming services. By offering a unified platform, users can receive a weekly summary of new releases through a playlist or email, ensuring they never miss a new release from the artists they care about.

## Features

- User Authentication and Account Management
- Connecting to Multiple Streaming Services
- Artist Management and Search Functionality
- Release Monitoring for Subscribed Artists
- Weekly Summary of New Releases via Playlist or Email
- Bonus Feature (Tentative): Podcast Subscription Transfer

## Technology Stack

- Frontend: React (Web), React Native (Mobile)
- Backend: Node.js, Express
- Database: MongoDB
- Third-Party APIs: Spotify API, Apple Music API, Amazon Music API, Deezer API, Last.fm API, YouTube API, MusicBrainz API

## Getting Started

To set up the project locally, please follow these steps:

1. Clone the repository to your local machine.
2. Install the required dependencies using `npm install` or `yarn install`.
3. Create a `.env` file and fill in the required API keys and secrets for the third-party services.
4. Start the development server using `npm run dev` or `yarn dev`.
5. Open the app in your browser at `http://localhost:3000`.

## Milestones

This project is divided into several milestones:

1. **Milestone 1:** Design and develop user authentication, account management, and streaming service connection features.
2. **Milestone 2:** Implement artist search, subscription, and management functionalities, including refined settings for importing artists.
3. **Milestone 3:** Integrate release monitoring and weekly summary features, including refined playlist export options and user choice of export type.
4. **Milestone 4:** Add support for Amazon Music, Deezer, and Last.fm, including research and integration of APIs for data scraping.
5. **Milestone 5:** Research and assess the feasibility of integrating podcast subscription transfer as a bonus feature, either within ReleaseWatcher or as a separate app.
6. **Milestone 6:** Optimize performance, usability, scalability, and security.
7. **Milestone 7:** Test and debug the application on web and mobile platforms, including comprehensive testing of all supported streaming services and export options.
8. **Milestone 8:** Launch the app and provide ongoing support, updates, and potential integration of additional streaming services or features based on user feedback and market demands.

## Contributing

We welcome contributions to the ReleaseWatcher project! If you would like to contribute, please fork the repository and create a pull request with your changes. Be sure to provide a detailed description of your changes and follow the project's coding standards and guidelines.

## Context

This project uses a modified version of  <https://github.com/mpoon/gpt-repository-loader> to maintain up to date code context for use with ChatGPT and GPT4.

Example command:

```bash
python gpt_repository_loader.py "../ReleaseWatcher" -p "../ReleaseWatcher/.preamble" -o "../ReleaseWatcher/context.txt" -t 2048 -m 10
```

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
