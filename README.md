# Slack Clone

A solution based on Slack famous app, used for makes it simple to follow conversations or find important information in an easily searchable archive. This Slack clone will allow for user authentication and login, and interaction with channels, direct messages through messages.

## Quick Links

[Demo](#demo)

- [Live Site Demo](#live-site-demo)

[Objectives](#objectives)

[Tech Stack](#tech-stack)


[Getting Started](#getting-started)

- [Prerequisites](#prerequisites)
- [Client Development Environment](#client-development-environment)


[Production Deployment](#production-deployment)

- [Server Production Deployment](#server-production-deployment)
- [Client Production Deployment](#client-production-deployment)


[License](#liscense)

---

## Demo

### Live Site Demo

[Link](http://slack-duplicate.herokuapp.com/)

---

## Objectives

- single page application with JS, MongoDB and its ecosystem
- Flexbox and CSS Grid for UI layout
- User authentications
- Real time messaging

### User Stories

- users can register and log in to their account, JWT for authentications
- users can create channel
- channels can be public or private for invited members only
- channels description can be edited by channel members
- users can create direct message or group message with other team members
- users can send messages within channels or direct message

### Future Expansions

- Implements more features in WebSocket instead of REST, similiar to Slack's implementation
- Implements workspace
- Implements more test coverage
- Optimization
  - More advanced webpack config
  - Prerendering

---

## Tech Stack
MERN Stack (MongoDB, JS, Express, React, and NodeJS).
- Express (the main framework)
- React
  - component based single page application
- Redux
  - client side data management
- Node.js
  - web server & services in service oriented architecure
- MongoDB
  - no relational database
  - Mongoose (to connect and interact with MongoDB)
  - Validator (for database validations)
  - Body-parser (to parse data from requests)
- ES6 JavaScript
- Authentication
  - Passport (for authentication)
  - Passport-jwt (for JSON web tokens)
  - Jsonwebtoken (to generate the tokens)
  - Bcryptjs (Bcrypting password)

---

## Getting Started

#### Client Development Environment

- install dependencies & start application in client  
  application will be running on [http://localhost:3000]

  ```
  cd slack/frontend
  npm install
  npm start
  ```

---

## Production Deployment

### Prerequisites

#### Tools & Versions

| Softwares for Production Deployment | Versions   |
| ----------------------------------- | ---------- |
| nodemon                             | ^2.0.2     |
| npm                                 | 6.13.4     |
| jsonwebtoken                        | ^8.5.1     |

### Server Production Deployment

- install dependencies & output production build in server  
  production build directory will be output to ./slack

  ```
  cd ./slack
  npm install
  npm run dev
  ```

#### Option A. Serve Application on Local Machine

- start server application with production build locally  
  server will be listening to [http://localhost:3000] by default

  ```npm ./slack
  npm run frontend
  ```

- **!important**: client API url's port is set to **3000** by default


### Client Production Deployment

- install dependencies & output production build in client  
  production build directory will be output to ./slack

  ```
  cd ./slack
  npm install
  npm update
  ```

- serve client application with static server locally  
  static server will be running on [http://localhost:5000] by default

  ```npm ./slack
  npm run dev
  ```

## Group Members and Work Breakdown

- Feb 10
  - Frontend auth 
  - Style landing page
  - Setting up the mongodb configuration 
- Feb 11
  - Style landing page
  - Implement channels
- Feb 12
  - Implement direct messages groups
  - Implement messages
- Feb 13
  - Debug and style on direct messages and channels
  - Implement users info show under direct messages and channels
- Feb 14
  - Implement messages on channels
  - Implement messages on direct messages groups
- Feb 17
  - Finish styling and debugging
  - Deploy to Heroku
- Feb 18
  - Debug and refactor style on Messages


## Author

- Javier, David, Thalia and Yenisbel

---

## License

This project is licensed under the MIT License - see the LICENSE file for details

---
