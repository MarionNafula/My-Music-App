# React Music Website
A modern music website built with React, designed to showcase and interact with music songs. Users can browse songs, view detailed information, search for specific songs, and even like/dislike songs.

## Features

- **Browse Songs**: View a list of songs, including song name, artist, and genre.
- **Song Details**: Click on a song to view more detailed information about it.
- **Search Functionality**: Search songs by name, artist, or genre.
- **Like/Dislike Songs**: Users can like or dislike songs directly from the song cards.
- **Responsive Design**: The website is fully responsive, providing a great user experience across all devices.

## Tech Stack
- **Frontend**: React.js, Axios
- **Routing**: React Router
- **State Management**: React useState, useEffect hooks
- **Styling**: Custom CSS

## Installation
Follow these steps to set up the project on your local machine.

### 1. Clone the repository
git clone git@github.com:MarionNafula/My-Music-App.git
cd music-website

### Install dependencies
Make sure you have Node.js installed on your machine. Then run:
npm install

### Start the development server
npm start
This will start the app in development mode. Open http://localhost:3000 to view it in your browser.

## Project Structure
src/
  components/
    Navbar.js        - Navigation bar component
    SongList.js      - Displays a list of songs
    SongCard.js      - Represents individual song cards
    SongDetail.js    - Displays detailed song info
    SearchBar.js     - Search bar to filter songs
    Footer.js        - Footer component
  App.js             - Main app component
  App.css            - Styles for the website
  index.js           - Entry point of the app

## API
This project fetches song data from a local JSON server. Below is a sample of the song data:
{
  "Songs": [
    {
      "id": "1",
      "Song": "Soweto",
      "Genre": "Afro music",
      "Artist": "Victony ,Tempoe",
      "Cover": "https://images.genius.com/7b0131f3024fd96bb402695238fceb9d.1000x1000x1.jpg"
    },
    {
      "id": "2",
      "Song": "Ta Ta Ta",
      "Genre": "Afro music",
      "Artist": "Bayani",
      "Cover": "https://www.citimuzik.com/wp-content/uploads/2022/08/28AB0A1A-5D70-4C99-880E-5D37D7C446DE-1.jpeg"
    }
    ...
  ]
}

## Contributing
Feel free to fork this project, make changes, and submit pull requests. We welcome contributions to improve the website.

### How to Contribute:
1.Fork the repository.
2.Clone your forked repo: git clone git@github.com:MarionNafula/My-Music-App.git
3.Create a new branch: git checkout -b feature-name
4.Make your changes and commit them.
5.Push to the branch: git push origin feature-name
6.Submit a pull request. 

## Acknowledgements
*React for building the user interface.
*Axios for handling HTTP requests.
*React Router for managing client-side routing.
*JSON Server for simulating an API.

## Contact
For any inquiries, please contact wekesamarion100@gmail.com

## This project is licensed under the MIT License - see the LICENSE file for details.



