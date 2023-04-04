import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faSave, faTrash } from '@fortawesome/free-solid-svg-icons';

const ControlButtons = ({ onCopy, onDelete, onSave }) => {
  return (
    <div className="flex mt-4">
      <button className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md focus:outline-none hover:bg-green-600" onClick={onCopy}>
        <FontAwesomeIcon icon={faCopy} /> Copy
      </button>
      <button className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md focus:outline-none hover:bg-red-600" onClick={onDelete}>
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
      <button className="bg-yellow-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-yellow-600" onClick={onSave}>
        <FontAwesomeIcon icon={faSave} /> Save
      </button>
    </div>
  );
  };
  
  export default ControlButtons;