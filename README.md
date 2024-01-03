# OrganiX

> A MERN full-stack e-commerce project

## Tech Used

- React.js - Frontend
- Node.js - Backend
- Express - Web Server
- MongoDB - Database
- Mongoose - Database Object Models
- Redux - State Management
- Bootstrap - UI Design
- Heroku - Deployment

## Features

- Full-featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as a delivered option
- Checkout process (shipping, payment method, etc)
- Database seeder (products & users)

## Usage

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 5000
MONGO_URI = your mongodb uri
JWT_SECRET = 'any random string without spaces'
```

### Install Dependencies (frontend & backend)

```bash
npm install
cd frontend
npm install
```

### Run

```bash
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```bash
# Create frontend prod build
cd frontend
npm run build
```

There is a Heroku post-build script, so if you push to Heroku, there is no need to build manually for deployment to Heroku

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```
