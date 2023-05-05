# TIHKR (Tutor, I Hardly Know Her)

Tutor, I Hardly Know Her (TIHKR) is a full stack app that arranges online tutoring sessions between users and tutors. First, users and tutors register to the system so they can access the app features. For tutors, they will have a profile to enter their available days and hours, subject list, and biography page. Once logged in, the home page features a list of upcoming appointments and additionally for users, a favorite tutors list. The search page displays a simple search option where users find a list of available tutors in an organized manner. Users can filter out their search results based on the tutors’ names and subjects. When finding a match, the user can book an appointment with the tutor. The user can also add a tutor to their favorites list from the search page. The total tutoring hours will show for both users and tutors.

## Deployment

The deployed version of the TIHKR app can be accessed [here](https://tihkr.netlify.app/). The server runs from https://tihkr.onrender.com/ and the initial log in might take awhile to load. Refresh the page and try registering and logging in again if the loading time takes too long.

## Demo
[Link to Demo](https://www.youtube.com/watch?v=YHCeZpKVXF0)

## Note on Google OAuth

Please note that currently Google OAuth is only enabled for the current group members. To use Google OAuth, you will need to have access to the Google API credentials used by the app.

## Installation

1. Clone the repository.
2. In the client folder, run `npm install` to install the client dependencies.
3. In the server folder, run `npm install` to install the server dependencies.

## Usage

To run the client:
1. In the client folder, go to client folder and run `npm start`.
2. Navigate to `http://localhost:3000` in your browser.

To run the server:
1. In the server folder, go to server folder run `npm start`.
2. The server will be running at `http://localhost:8080`.

## Technologies Used

- React
- Node.js
- MongoDB
- Express.js
- Google Calendar API
