import React, { useState } from 'react';

const categories = [
  { id: 9, name: "General Knowledge" },
  { id: 10, name: "Entertainment: Books" },
  { id: 11, name: "Entertainment: Film" },
  { id: 12, name: "Entertainment: Music" },
  { id: 13, name: "Entertainment: Musicals & Theatres" },
  { id: 14, name: "Entertainment: Television" },
  { id: 15, name: "Entertainment: Video Games" },
  { id: 16, name: "Entertainment: Board Games" },
  { id: 17, name: "Science & Nature" },
  { id: 18, name: "Science: Computers" },
  { id: 19, name: "Science: Mathematics" },
  { id: 20, name: "Mythology" },
  { id: 21, name: "Sports" },
  { id: 22, name: "Geography" },
  { id: 23, name: "History" },
  { id: 24, name: "Politics" },
  { id: 25, name: "Art" },
  { id: 26, name: "Celebrities" },
  { id: 27, name: "Animals" },
  { id: 28, name: "Vehicles" },
  { id: 29, name: "Entertainment: Comics" },
  { id: 30, name: "Science: Gadgets" },
  { id: 31, name: "Entertainment: Japanese Anime & Manga" },
  { id: 32, name: "Entertainment: Cartoon & Animations" },
];

const Home = ({ onStart }) => {
  const [formData, setFormData] = useState({ name: '', category: '', difficulty: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.category || !formData.difficulty) {
      setError('All fields are required.');
      return;
    }
    setError('');
    onStart(formData);
  };

  return (
    <div className="container">
      <h1>Welcome to the Trivia Quiz!</h1>
      <p>Enter your details and choose your preferences to start.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Category:
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Difficulty:
          <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
            <option value="">Select difficulty</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </label>
        <button type="submit">Start Quiz</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default Home;