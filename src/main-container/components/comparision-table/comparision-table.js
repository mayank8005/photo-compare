import React from "react";
import "./comparision-table.css";

const ComparisionTable = ({ photos }) => {
  if (photos.length === 0) return <div>No photos up for comparision!</div>;

  return (
    <table className="comparision-table">
      <thead>
        <tr>
          <th className="table-heading" colSpan="4">
            Comparision Table
          </th>
        </tr>
      </thead>
      <tbody>
        {photos.map((photo) => (
          <tr key={photo.id}>
            <td> Photo {photo.id} </td>
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
