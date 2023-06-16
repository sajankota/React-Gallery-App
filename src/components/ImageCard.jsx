// Import React to use JSX syntax
import React from "react";

// Define a functional component called ImageCard that takes the 'image' prop
const ImageCard = ({ image }) => {
  // Split the 'tags' string into an array using commas as separators
  const tags = image.tags.split(",");

  // Return the JSX structure representing the image card component
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* Display the image using the 'webformatURL' from the 'image' object */}
      <img src={image.webformatURL} alt="Random Image" className="w-full" />

      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          {/* Display the username of the image author */}
          Photo by {image.user}
        </div>

        <ul>
          <li>
            <strong>Views:</strong>
            {/* Display the number of views of the image */}
            {image.views}
          </li>
          <li>
            <strong>Downloads:</strong>
            {/* Display the number of downloads of the image */}
            {image.downloads}
          </li>
          <li>
            <strong>Likes:</strong>
            {/* Display the number of likes of the image */}
            {image.likes}
          </li>
        </ul>
      </div>

      <div className="px-6 py-4">
        {/* Iterate over the 'tags' array and display each tag */}
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {/* Display each tag preceded by '#' */}#{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

// Export the ImageCard component as the default export
export default ImageCard;
