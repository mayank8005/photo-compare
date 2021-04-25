import React, { useState, useEffect, useMemo } from "react";
import "./main-container.css";

// importing external lib
import axios from "axios";

//importing child components
import PhotoDisplay from "./components/photo-display/photo-display";
import ComparisionTable from "./components/comparision-table/comparision-table";
import Loading from "./components/loading/loading";

const MainContainer = () => {
  const [photos, setPhotos] = useState([]);
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/photos")
      .then((photos) => {
        const transformedResponse = photos.data.map((photo) => ({
          ...photo,
          compare: false,
        }));
        setPhotos(transformedResponse);
      })
      .catch(() => {
        setPhotos([]);
        console.log("SOMETHING WENT WRONG");
      })
      .finally(() => {
          setLoaded(true)
      });
  }, []);

  const photosForCompare = useMemo(
    () => photos.filter((photo) => photo.compare),
    [photos]
  );

  const togglePhotoCompareState = (id) => () => {
    const newPhotosState = photos.map((photo) => {
      if (photo.id !== id) return photo;
      return {
        ...photo,
        compare: !photo.compare,
      };
    });

    setPhotos(newPhotosState);
  };

  if(!loaded) return (<Loading/>)

  return (
    <div className="main-container">
      <div className="comparision-table-section">
        <ComparisionTable photos={photosForCompare} />
      </div>
      <div className="photo-display-section">
        {photos.map((photo) => (
          <PhotoDisplay
            key={photo.id}
            photoData={photo}
            toggleCompare={togglePhotoCompareState}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContainer;
