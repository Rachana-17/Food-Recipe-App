# Food Recipe Web App

This is a full-stack web application for managing and exploring recipes, built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. The app enables users to create, search, and delete recipes while securely managing their information using JWT-based authentication. Additionally, users can save their favorite recipes to a "liked" list, view all liked recipes, and remove recipes from the list.

## Features

- **User Authentication**: Secure JWT-based authentication to manage user sessions.
- **Recipe Management**: Create, search, and delete recipes.
- **Liked Recipes**: Users can add recipes to their liked list, view all liked recipes, and remove recipes from the list.
- **Search**: Quickly find recipes based on keywords or ingredients.
- **Responsive UI**: A responsive design for seamless access across devices.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Token (JWT)

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB instance or MongoDB Atlas account

### Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/food-recipe-app.git
    cd food-recipe-app
    ```

2. **Install dependencies** for both frontend and backend:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. **Environment Variables**: Set up environment variables in `.env` files for both frontend and backend. Ensure you add your MongoDB URI and JWT secret key.

### Running the Application

1. **Start MongoDB**: Ensure MongoDB is running locally or connect to MongoDB Atlas.

2. **Run Backend**:
    ```bash
    cd server
    npm start
    ```

3. **Run Frontend**:
    ```bash
    cd client
    npm start
    ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## API Endpoints

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `POST /api/recipes` - Create a new recipe
- `GET /api/recipes` - Get all recipes
- `GET /api/recipes/:id` - Get a specific recipe
- `DELETE /api/recipes/:id` - Delete a specific recipe
- `POST /api/recipes/:id/like` - Add a recipe to the liked list
- `GET /api/recipes/liked` - Get all liked recipes
- `DELETE /api/recipes/:id/unlike` - Remove a recipe from the liked list

## Project Structure

```plaintext
food-recipe-app/
├── client/                # Frontend (React)
└── server/                # Backend (Node, Express)
