import React, { useState } from "react";
import { useAddLinkMutation, useDeleteLinkMutation } from "../app/apiSlice";
import EditLinkForm from "./EditLinkForm";

function EditLinkCard({ linkToEdit }) {
  const [submitLink] = useAddLinkMutation();
  const [deleteLink] = useDeleteLinkMutation();
  const [link, setLink] = useState("");
  const [name, setName] = useState("");

  console.log(linkToEdit);

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLink({ name, link });
  };

  const handleLinkChange = (event) => {
    const data = event.target.value;
    setLink(data);
  };

  const handleNameChange = (event) => {
    const data = event.target.value;
    setName(data);
  };

  let isDisabled = false;
  if (typeof rating == "string") {
    isDisabled = true;
  }

  return (
    <>
      <div class="card w-75 mb-3">
        <div class="card-body">
          <h5 class="card-title">{linkToEdit.name}</h5>
          <p class="card-text">{linkToEdit.link}</p>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Edit
          </button>

          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Edit Link
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <EditLinkForm linkToEdit={linkToEdit}></EditLinkForm>
                </div>
              </div>
            </div>
          </div>

          <button
            className="btn shadow btn-outline-primary"
            style={{ backgroundColor: "white" }}
            onClick={() => deleteLink(linkToEdit.link_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default EditLinkCard;
