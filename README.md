# Welcome to Waddle 2.0! We are Penguin Sweater.

Waddle 2.0 is a social networking application for penguins. It's a dashboard for people to use to organize their daily tasks, events, news article, friends, and chat messages so they can spend more time on the ice.

This project has been built by students of Nashville Software School Cohort #28 to utilize all of the skills and concepts that we've learned up to this point in the course after 6 weeks. Waddle 2.0 is a refactoring of a previous project that used vanilla javascript that has been updated using React!

1. Functions
1. Databases/API
1. Github
1. Objects
1. CSS
1. Handling user events
1. Factory functions
1. Data entry/editing
1. Modular code
1. Relational data

For Waddle, we've utilized the following npm modules:

1. [ESLint](https://eslint.org/)
1. [React](https://github.com/facebook/create-react-app)
1. [Reactstrap](https://reactstrap.github.io/)
1. Bootstrap
1. NodeJS
1. [Moment.js](https://momentjs.com/)

## Getting Started

To run Waddle locally, create an empty directory and clone the project by running the following command in your terminal:
`git clone https://github.com/penguin-sweater/react-nutshell.git`

Waddle uses a <b>database.json</b> file to store all data. To create the database, run:
```
mkdir api
cd api
touch database.json
```

Open <b>database.json</b> and copy the following into the file to create a database skeleton:
```json
{
  "users": [
    {
      "id": 1,
      "email": "user@penguin.com",
      "password": "penguin",
      "displayName": "Penguin User"
    },
    {
      "id": 2,
      "email": "jeremy@penguin.com",
      "password": "penguinforever",
      "displayName": "JPenG"
    },
    {
      "id": 3,
      "email": "gloriaestefan@sbcglobal.net",
      "password": "happyFeet",
      "displayName": "Slidez"
    }
  ],
  "events": [
    {
      "name": "Coffee with JPenG",
      "userId": 3,
      "location": "The Rookery",
      "date": "2018-12-10",
      "id": 1
    },
    {
      "name": "The Great Migration",
      "userId": 3,
      "location": "Inland",
      "date": "2019-01-01",
      "id": 2
    },
    {
      "name": "Penguin Pop Up Bar",
      "userId": 3,
      "location": "2nd and Main",
      "date": "2018-11-27",
      "id": 3
    },
    {
      "name": "Slidez' Surprise Birthday Party",
      "userId": 2,
      "location": "The Rookery",
      "date": "2018-12-10",
      "id": 4
    }
  ],
  "tasks": [
    {
      "name": "Waddle away",
      "": "January",
      "dueBy": "2019-01-31",
      "status": 1,
      "userId": 1,
      "id": 1
    },
    {
      "name": "Buy new flippers",
      "dueBy": "2018-12-14",
      "status": 1,
      "userId": 3,
      "id": 2
    },
    {
      "name": "Try that new seafood restaurant: Arctic Breeze",
      "dueBy": "2018-11-17",
      "status": 1,
      "userId": 3,
      "id": 3
    },
    {
      "name": "Wash sled",
      "dueBy": "2018-11-20",
      "status": 1,
      "userId": 3,
      "id": 4
    },
    {
      "name": "Buy birthday present for Slidez",
      "dueBy": "2018-12-10",
      "status": 1,
      "userId": 2,
      "id": 5
    },
    {
      "name": "Dentist Appointment",
      "dueBy": "2018-11-16",
      "status": 1,
      "userId": 2,
      "id": 6
    }
  ],
  "news": [
    {
      "title": "BOAT CRASH",
      "summary": "TITANIC 2!?!?!?",
      "url": "https://www.testitout.com",
      "userId": 1,
      "timestamp": "2018-11-14T23:02:52.195Z",
      "id": 1
    },
    {
      "title": "Penguins trade Carl Hagelin to Kings for Tanner Pearson",
      "summary": "Big news for my favorite team!",
      "url": "http://www.espn.com/nhl/story/_/id/25275439/pittsburgh-penguins-trade-carl-hagelin-los-angeles-kings-tanner-pearson",
      "userId": 3,
      "timestamp": "2018-11-15T05:43:09.879Z",
      "id": 2
    },
    {
      "title": "EMPEROR PENGUIN MIGRATION",
      "summary": "Full details of the march",
      "url": "https://www.naturalworldsafaris.com/experiences/natures-great-events/emperor-penguin-migration",
      "userId": 2,
      "timestamp": "2018-11-15T06:02:05.366Z",
      "id": 3
    },
    {
      "title": "Perplexed Penguin Pair Discovers 'The Selfie'",
      "summary": "Save this for a rough day",
      "url": "https://video.nationalgeographic.com/video/news/00000162-0681-dfb4-a1ef-1fd9ddbe0000",
      "userId": 2,
      "timestamp": "2018-11-15T06:08:58.807Z",
      "id": 4
    }
  ],
  "messages": [
    {
      "text": "first forever!",
      "userId": 1,
      "isEdited": true,
      "timestamp": "2018-11-11T10:55:09.421Z",
      "id": 1
    },
    {
      "text": "Don't be that kind of penguin!",
      "userId": 2,
      "isEdited": true,
      "timestamp": "2018-11-14T12:30:49.421Z",
      "id": 2
    },
    {
      "text": "Don't tell me what to do!",
      "userId": 1,
      "isEdited": false,
      "timestamp": "2018-11-14T15:17:38.421Z",
      "id": 3
    },
    {
      "text": "Can't we all just get along?",
      "userId": 3,
      "isEdited": false,
      "timestamp": "2018-11-15T05:29:23.477Z",
      "id": 4
    }
  ],
  "relationships": [
    {
      "id": 1,
      "userId": 1,
      "friendId": 2
    },
    {
      "id": 2,
      "userId": 1,
      "friendId": 3
    },
    {
      "id": 3,
      "userId": 2,
      "friendId": 1
    },
    {
      "id": 4,
      "userId": 2,
      "friendId": 3
    },
    {
      "id": 5,
      "userId": 3,
      "friendId": 2
    },
    {
      "id": 6,
      "userId": 3,
      "friendId": 1
    }
  ]
}
```

Run the following command to install all libraries and their dependencies:
`npm install`

Be sure to run the following in order to view Waddle in your browser:
`npm start`

Spin up a json server in the <b>api</b> folder:
```json-server -p 8088 --w database.json```

Open your preferred browser and go to:
`http://localhost:3000/`

##ERD
![The Entity Relationship Diagram for Waddle 2.0](https://github.com/penguin-sweater/react-nutshell/Waddle_ERD.PNG)

# Enjoy Waddle, Have Fun, Stay Icy

## Penguin Sweater
- [Sebastian Civarolo](https://github.com/scivarolo)
- [Rachel Daniel](https://github.com/racheldaniel)
- [Elyse Dawson](https://github.com/CurtainUp)
- [Nolan Little](https://github.com/Nolan-Little)