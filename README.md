===========================================</br>
Trivia Quiz App</br>
===========================================</br>

A simple quiz application built with React that fetches trivia questions from the Open Trivia Database API. Users can select a category, difficulty level, and answer questions interactively.

===========================================</br>
Features</br>
===========================================</br>

1. Home Page
   - Displays a form with:
     - User's name (text input)
     - Trivia category (dropdown menu with multiple options)
     - Difficulty level (dropdown: Easy, Medium, Hard)
   - Validates all fields to ensure completion before proceeding.
   - Displays error messages for invalid inputs.

2. Question Form
   - Dynamically fetches a trivia question based on user preferences.
   - Displays the question and multiple-choice answers using radio buttons.
   - Validates that an answer is selected before submission.

3. Results Section
   - Feedback on whether the user's answer was correct.
   - Displays the correct answer if the user was incorrect.
   - Allows users to restart the quiz.

4. API Integration
   - Fetches trivia questions from the Open Trivia Database API.

===========================================</br>
Technologies Used</br>
===========================================</br>

- React: For building the UI and managing state.
- CSS: For styling the application.
- Open Trivia Database API: For fetching trivia questions.

===========================================</br>
Folder Structure</br>
===========================================</br>

quiz-app/</br>
│</br>
├── src/</br>
│   ├── components/</br>
│   │   ├── Home.js           # Home page component</br>
│   │   ├── QuestionForm.js   # Question form component</br>
│   │   ├── Results.js        # Results display component</br>
│   ├── App.js                # Main application component</br>
│   ├── index.js              # Entry point</br>
│   └── App.css               # Styling for the application</br>
│</br>
├── package.json              # Dependencies and scripts</br>
└── README.txt                # Project documentation</br>

===========================================</br>
Setup Instructions</br>
===========================================</br>

1. Install Node.js
   - Ensure Node.js and npm are installed.
   - Check versions:
     ```
     node -v
     npm -v
     ```

2. Clone the Repository
   - Navigate to your desired folder and clone the repository:
     ```
     git clone <repository_url>
     ```

3. Install Dependencies
   - Navigate to the project folder and run:
     ```
     npm install
     ```

4. Run the Development Server
   - Start the development server:
     ```
     npm start
     ```

5. Open the Application
   - In your browser, navigate to:
     ```
     http://localhost:3000
     ```

===========================================</br>
Usage Instructions</br>
===========================================</br>

1. On the Home Page:
   - Enter your name.
   - Choose a category and difficulty level.
   - Click "Start Quiz."

2. On the Question Page:
   - Read the question and choose an answer.
   - Submit your answer to see if it's correct.

3. On the Results Page:
   - View feedback and the correct answer (if applicable).
   - Restart the quiz by clicking "Start Over."

===========================================</br>
API Information</br>
===========================================</br>

- Base URL: https://opentdb.com/api.php?amount=1&category=18&difficulty=medium&type=multiple


===========================================</br>
Known Issues</br>
===========================================</br>

- API may return a "429 Too Many Requests" error if overloaded. To resolve this, reduce the frequency of requests.

===========================================</br>
Future Enhancements</br>
===========================================</br>

- Add a timer for each question.
- Include support for true/false question types.
- Improve mobile responsiveness.
