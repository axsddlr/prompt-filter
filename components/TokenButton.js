// components/TokenButton.js
const TokenButton = ({ token, onTokenClick }) => {
    return (
      <button className="bg-blue-500 text-white px-2 py-1 m-1 rounded-md focus:outline-none hover:bg-blue-600" onClick={() => onTokenClick(token)}>
        {token}
      </button>
    );
  };
  
  export default TokenButton;
  