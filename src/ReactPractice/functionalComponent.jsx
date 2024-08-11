import React, { useState } from 'react';

const FunctionalInput = ({ name }) => {
  const [todos, setTodos] = useState([]);
  const [inputVal, setInputVal] = useState('');

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //You should use preventDefault() whenever you want to prevent the browser's default behavior for an event.
    setTodos((todo) => [...todo, inputVal]);
    setInputVal('');
  };

  return (
    <section>
      <h3>{name}</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="task-entry">Enter a task: </label>
        <input type="text" name="task-entry" value={inputVal} onChange={handleInputChange} />
        <button type="submit">Submit</button>
      </form>
      <h4>All the tasks!</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>{todo}</li>
        ))}
      </ul>
    </section>
  );
};

export default FunctionalInput;
