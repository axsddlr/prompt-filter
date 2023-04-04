// components/OutputBox.js
import React from 'react';

const OutputBox = ({ tokens }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md p-4 my-8 rounded">
      <p className="text-gray-800 dark:text-gray-100">
        {tokens.map((token, index) => (
          <React.Fragment key={index}>
            {token}
            {index < tokens.length - 1 && ', '}
          </React.Fragment>
        ))}
      </p>
    </div>
  );
};

export default OutputBox;
