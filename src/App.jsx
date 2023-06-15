import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(
          `https://pixabay.com/api/?key=&q=${term}&image_type=photo&pretty=true`
        );
        const data = await response.json();
        setImages(data.hits);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchImages();
  }, [term]);

  return (
    <div className="min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <h1>React Gallery App</h1>
        <p>React 18 galley app with Tailwincss and Pixabay API</p>
        <ImageSearch searchText={setTerm} />
        {!isLoading && images.length === 0 ? (
          <h1 className="text-5xl text-center">No images found</h1>
        ) : (
          <>
            {isLoading ? (
              <h1 className="text-6xl text-center">Loading...</h1>
            ) : (
              <div className="max-w-screen-xl mx-auto grid grid-cols-3 gap-6">
                {images.map((image, index) => (
                  <div
                    key={image.id}
                    className={`${
                      index === 0 ? "ml-6" : ""
                    } flex justify-center`}
                  >
                    <ImageCard image={image} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
