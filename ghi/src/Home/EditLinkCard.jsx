import React, { useState } from "react";
import { useDeleteLinkMutation } from "../app/apiSlice";
import EditLinkForm from "./EditLinkForm";

function EditLinkCard({ linkToEdit }) {
  const [deleteLink] = useDeleteLinkMutation();
  const [isEditable, setEditable] = useState(false);

  return (
    <>
      <div className="card w-75 mb-3">
        <div className="card-body">
          {!isEditable && (
            <>
              <h5 className="card-title">{linkToEdit.name}</h5>
              <p className="card-text">{linkToEdit.link}</p>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setEditable(!isEditable);
                }}
              >
                Edit
              </button>

              <button
                className="btn shadow btn-outline-primary"
                onClick={() => deleteLink(linkToEdit.link_id)}
              >
                Delete
              </button>
            </>
          )}
          {isEditable && (
            <>
              <EditLinkForm
                linkToEdit={linkToEdit}
                isSubmitted={() => setEditable(false)}
              ></EditLinkForm>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default EditLinkCard;
