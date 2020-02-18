# Slack Clone

This project is a clone of the popular app Slack. The app makes it really simple to follow different conversations and to keep all the communication regarding a project on the same place. This Slack clone incorporates user authentication and login, interaction with different channels and direct messages.

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


[License](#license)

---

## Demo

### Live Site Demo

[Link](http://slack-duplicate.herokuapp.com/)

---

## Objectives

- Single page application with MongoDB, Express, React, and Node.js
- Flexbox and CSS Grid for UI layout.
- User authentication.
- Real time messaging.

### User Stories

- Users can register and log in to their account, JWT for authentications.
- Users can create a channel.
- Channels can be public or private for invited members only.
- Channels description can be edited by channel members.
- Users can create direct messages or group messages with other team members.
- Users can send messages within channels or direct messages.

### Future Expansions

- Implements more features in WebSocket instead of REST, similiar to Slack's implementation.
- Implements workspace.
- Implements more test coverage.
- Optimization:
  - More advanced webpack config.
  - Prerendering.

---

## Tech Stack
MERN Stack (MongoDB, Express, React, and NodeJS).
- Express.
- React.
  - Component based single page application.
- Redux.
  - Client side data management.
- Node.js
  - Web server & services in service oriented architecure.
- MongoDB.
  - Non-relational database.
  - Mongoose (to connect and interact with MongoDB).
  - Validator (for database validations).
  - Body-parser (to parse data from requests).
- ES6 JavaScript.
- Authentication.
  - Passport (for authentication).
  - Passport-jwt (for JSON web tokens).
  - Jsonwebtoken (to generate the tokens).
  - Bcryptjs (Bcrypting password).

---

## Getting Started

#### Client Development Environment

- Install dependencies & start application in client.  
  Application will be running on [http://localhost:3000]

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

- Install dependencies & output production build in server.  
  Production build directory will be output to ./slack

  ```
  cd ./slack
  npm install
  npm run dev
  ```

#### Option A. Run application on Local Machine

- Start server application with production build locally.  
  Server will be listening to [http://localhost:3000] by default.

  ```npm ./slack
  npm run frontend
  ```

- **!important**: client API url's port is set to **3000** by default.


### Client Production Deployment

- Install dependencies & output production build in client.  
  Production build directory will be output to ./slack

  ```
  cd ./slack
  npm install
  npm update
  ```

- Start client application with static server locally.  
  Static server will be running on [http://localhost:5000] by default

  ```npm ./slack
  npm run dev
  ```

## Group Members and Work Breakdown

- Feb 10
  - Frontend auth.
  - Style landing page.
  - Setting up the mongodb configuration. 
- Feb 11
  - Style landing page.
  - Implement channels.
- Feb 12
  - Implement direct messages groups.
  - Implement messages.
- Feb 13
  - Debug and style on direct messages and channels.
  - Implement users info to show under direct messages and channels.
- Feb 14
  - Implement messages on channels.
  - Implement messages on direct messages groups.
- Feb 17
  - Finish styling and debugging.
  - Deploy to Heroku.
- Feb 18
  - Debug and refactor, style on messages.


## Author

- David Odio, Javier Ortiz, Thalia Pena, and Yenisbel Valle.

---

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---
