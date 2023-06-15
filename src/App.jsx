import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  // State variables
  const [images, setImages] = useState([]); // Array of images
  const [isLoading, setLoading] = useState(true); // Loading indicator
  const [term, setTerm] = useState(""); // Search term

  // Fetch images from the Pixabay API when the search term changes
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=&q=${term}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setImages(data.hits); // Set the fetched images
        setLoading(false); // Set loading to false
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [term]);

  // Function to render content based on the loading and images states
  const renderContent = () => {
    if (isLoading) {
      return <h1 className="text-6xl text-center">Loading...</h1>;
    } else if (images.length === 0) {
      return <h1 className="text-5xl text-center">No images found</h1>;
    } else {
      return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-6">
          {/* Iterate over the images and render ImageCard component */}
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`${index === 0 ? "ml-6" : ""} flex justify-center`}
            >
              <ImageCard image={image} />
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center">
      <div className="container text-center mx-auto px-4">
        {/* Heading */}
        <h1 className="text-6xl font-bold mb-4">React Gallery App</h1>
        {/* Description */}
        <p className="text-4xl">
          React 18 gallery app with Tailwind CSS and Pixabay API
        </p>
        {/* Image search component */}
        <ImageSearch searchText={setTerm} />
        {/* Render the content based on loading and images states */}
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
