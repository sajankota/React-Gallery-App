// Import React and useState hook from the 'react' package
import React, { useState } from "react";

// Define a functional component called ImageSearch that takes the 'searchText' prop
const ImageSearch = ({ searchText }) => {
  // Declare a state variable 'text' using the useState hook and set its initial value to an empty string
  const [text, setText] = useState("");

  // Define an event handler function 'onSubmit' that is triggered when the form is submitted
  const onSubmit = (e) => {
    // Prevent the default form submission behavior, which would cause a page reload
    e.preventDefault();

    // Invoke the 'searchText' function passed as a prop and pass the current value of 'text' as an argument
    searchText(text);
  };

  // Return the JSX structure representing the image search component
  return (
    <div className="max-w-sm rounded overflow-hidden my-10 mx-auto">
      <form onSubmit={onSubmit} className="w-full max-w-sm">
        <div className="flex items-center border-b border-b-2 border-teal-500 py-2">
          {/* Input field for entering the search term */}
          <input
            onChange={(e) => setText(e.target.value)} // Update the 'text' state with the current input value
            value={text} // Bind the value of the input field to the 'text' state
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search Image Term..."
          />

          {/* Submit button */}
          <button
            type="submit"
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm text-white py-1 px-2 rounded"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

// Export the ImageSearch component as the default export
export default ImageSearch;
