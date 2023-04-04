import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const OutputBox = ({ tokens, onCopy }) => {
  return (
    <div className="mt-4">
      <div className="relative">
        <textarea
          className="w-full p-2 bg-gray-300 dark:bg-gray-800 dark:text-white rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          rows="5"
          placeholder="Tokens will appear here..."
          readOnly
          value={tokens.join(", ")}
        ></textarea>
        <button
          onClick={onCopy}
          className="absolute top-2 right-2 text-gray-500 dark:text-gray-500 p-1 rounded-md focus:outline-none active:bg-indigo-700 active:dark:bg-gray-600"
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </div>
    </div>
  );
};

export default OutputBox;
