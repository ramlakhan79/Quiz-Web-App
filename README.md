# Quiz Web Application

**QuizMaster** is a full-stack web application built for conducting quizzes. This application is developed using the MERN stack and offers dynamic quiz management features.

## Live Demo

[Quiz App Live](https://quiz-web-app-khaki.vercel.app/)

## Features

### Admin Module
- **User Management**: Add, edit, or delete user details.
- **Quiz Management**: Create, update, and delete quizzes.
- **Category Management**: Manage quiz categories dynamically.
- **Results Management**: View and manage quiz results.
- **Question Bank**: Add, edit, delete questions for quizzes.
- **Time Management**: Set time limits for quizzes.

### Student Module
- **Quiz Attempt**: Attempt quizzes based on categories.
- **Dynamic Difficulty**: Adjust quiz difficulty based on performance.
- **Results Tracking**: View scores and analyze correct/incorrect answers.
- **Negative Marking**: Supports quizzes with penalty scoring.
- **Responsive UI**: Optimized for desktop and mobile devices.

## Technologies Used

- **Frontend**: React, Redux, React Router DOM, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: Redux with Thunk middleware
- **Styling**: Tailwind CSS

## Screenshots

### Admin Dashboard
![Admin Dashboard](https://placeholder.com/admin-dashboard)

### Quiz Management
![Quiz Management](https://placeholder.com/quiz-management)

### Student Quiz Interface
![Student Quiz](https://placeholder.com/student-quiz)

### Results Page
![Results](https://placeholder.com/results)

### Login Page
![Login](https://placeholder.com/login)

### Sign Up Page
![Sign Up](https://placeholder.com/sign-up)

## Installation

### Prerequisites
Make sure you have the following installed on your system:
- Node.js
- npm or Yarn
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/ramlakhan79/Quiz-Web-App.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Quiz-Web-Application
   ```

3. Install dependencies for the frontend and backend:
   ```bash
   npm install
   ```

4. Set up the environment variables:
   Create a `.env` file in the root directory and add the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongo_db_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. Start the development servers:
   - Backend:
     ```bash
     npm run server
     ```
   - Frontend:
     ```bash
     npm start
     ```

6. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

```plaintext
├── backend/
│   ├── controllers/      # Business logic for routes
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── server.js         # Entry point for backend
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Pages for the application
│   │   ├── redux/       # Redux store and slices
│   │   ├── App.js       # Main application component
│   │   ├── index.js     # Entry point of the frontend
├── .env                  # Environment variables
├── package.json          # Project metadata and dependencies
├── README.md             # Documentation
└── .gitignore            # Ignored files
```

## Future Enhancements

- **Leaderboard**: Add a leaderboard to rank students based on scores.
- **Quiz Analytics**: Provide insights into quiz performance.
- **Live Quiz**: Enable real-time quiz sessions.
- **Custom Themes**: Allow users to personalize the UI.
- **Email Notifications**: Notify students about upcoming quizzes and results.

## Contributing

Contributions are welcome! If you find a bug or want to add a feature, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for exploring the **QuizMaster** app! 🚀
