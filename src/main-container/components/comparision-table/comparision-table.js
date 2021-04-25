import React from "react";
import "./comparision-table.css";
import { NO_PHOTO_ERROR, HEADING } from "./comparision-table.constants";

const ComparisionTable = ({ photos }) => {
  if (photos.length === 0) return <div>{NO_PHOTO_ERROR}</div>;

  return (
    <table className="comparision-table">
      <thead>
        <tr>
          <th className="table-heading" colSpan="4">
            {HEADING}
          </th>
        </tr>
      </thead>
      <tbody>
        {photos.map((photo) => (
          <tr key={photo.id}>
            <td>
              <img src={photo.thumbnailUrl} alt="thumbnail"></img>
            </td>
            <td> {photo.id} </td>
            <td> {photo.url} </td>
            <td> {photo.title} </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ComparisionTable;
