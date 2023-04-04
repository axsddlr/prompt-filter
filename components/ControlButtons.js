import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopy,
  faSave,
  faTrash,
  faRandom,
  faClone,
} from "@fortawesome/free-solid-svg-icons";

const ControlButtons = ({
  onCopy,
  onDelete,
  onSave,
  onShuffle,
  onRemoveDuplicates,
}) => {
  return (
    <div className="flex mt-4">
      <button
        className="bg-green-500 text-white px-4 py-2 mr-2 rounded-md focus:outline-none hover:bg-green-600"
        onClick={onCopy}
      >
        <FontAwesomeIcon icon={faCopy} /> Copy
      </button>
      <button
        className="bg-red-500 text-white px-4 py-2 mr-2 rounded-md focus:outline-none hover:bg-red-600"
        onClick={onDelete}
      >
        <FontAwesomeIcon icon={faTrash} /> Delete
      </button>
      <button
        className="bg-yellow-500 text-white px-4 py-2 mr-2 rounded-md focus:outline-none hover:bg-yellow-600"
        onClick={onSave}
      >
        <FontAwesomeIcon icon={faSave} /> Save
      </button>
      <button
        onClick={onShuffle}
        className="rounded-md px-4 py-2 mr-2 bg-indigo-500 text-white focus:outline-none hover:bg-indigo-600"
      >
        <FontAwesomeIcon icon={faRandom} /> Shuffle
      </button>
      <button
        className="bg-orange-500 text-white px-4 py-2 rounded-md focus:outline-none hover:bg-orange-600"
        onClick={onRemoveDuplicates}
      >
        <FontAwesomeIcon icon={faClone} /> Duplicate
      </button>
    </div>
  );
};

export default ControlButtons;
