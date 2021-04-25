import React from "react";
import "./photo-display.css";
import { URL, COMPARE_BUTTON_TEXT } from "./photo-display.constant";

const PhotoDisplay = ({ photoData, toggleCompare }) => (
  <div className="photo-display inline-block">
    <img src={photoData.thumbnailUrl} alt="image" />
    <div className="photo-display-title"> {photoData.title} </div>
    <div className="photo-display-id"> {photoData.id} </div>
    <a className="photo-display-url" href={photoData.url}>
      {URL}
    </a>
    <button onClick={toggleCompare(photoData.id)}>
      {photoData.compare
        ? COMPARE_BUTTON_TEXT.REMOVE
        : COMPARE_BUTTON_TEXT.COMPARE}
    </button>
  </div>
);

export default PhotoDisplay;
