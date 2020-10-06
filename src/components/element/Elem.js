import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";

function Elem({ elem, onSelect, id }) {
  return (
    <div className="elem">
      <div className="text">
      <FontAwesomeIcon className="checked" icon={faList}/>&nbsp;&nbsp;<li>{elem}</li>
      </div>

      <FontAwesomeIcon
        className="btn-delete"
        onClick={() => {
          onSelect(id);
        }}
        icon={faTrash}
      />
    </div>
  );
}

export default Elem;
