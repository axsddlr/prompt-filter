// components/InputBox.js
import { useState } from 'react';

const InputBox = ({ onTokensGenerated }) => {
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    const tokens = input.split(',').map(token => token.trim());
    onTokensGenerated(tokens);
  };

  return (
    <div className="flex">
      <input
        className="w-full p-2 bg-gray-200 dark:bg-gray-800 dark:text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
        type="text"
        placeholder="Enter your prompt..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-indigo-500 text-white p-2 rounded-r-md focus:outline-none hover:bg-indigo-600" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default InputBox;
